import nextEnv from "@next/env";
import { createClient } from "next-sanity";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-10-16";
const token = process.env.SANITY_API_TOKEN;
const applyChanges = process.argv.includes("--apply");

if (!projectId || !dataset) {
  throw new Error(
    "Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET before running this migration.",
  );
}

if (applyChanges && !token) {
  throw new Error("Set SANITY_API_TOKEN to apply the SEO migration.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  ...(token ? { token } : {}),
});

const documents = await client.fetch(
  `*[
    _type in ["product", "healthCondition"] &&
    (
      defined(seo) ||
      defined(metaTitle) ||
      defined(metaDescription) ||
      defined(ogImage)
    )
  ] {
    _id,
    _type,
    seo,
    metaTitle,
    metaDescription,
    ogImage,
    noIndex
  }`,
);

function firstDefined(...values) {
  return values.find((value) => value !== undefined && value !== null);
}

function copyFields(source, target, keys) {
  for (const key of keys) {
    if (source?.[key] !== undefined && source[key] !== null) {
      target[key] = source[key];
    }
  }
}

function stableStringify(value) {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }
  if (value && typeof value === "object") {
    const entries = Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`);
    return `{${entries.join(",")}}`;
  }
  return JSON.stringify(value);
}

function migrateSeo(document) {
  const oldSeo = document.seo ?? {};
  const seo = { _type: "seoFields" };

  copyFields(oldSeo, seo, [
    "keywords",
    "canonicalUrl",
    "focusKeyword",
    "hreflangs",
    "metaAttributes",
    "preview",
  ]);

  const title = firstDefined(oldSeo.title, oldSeo.metaTitle, document.metaTitle);
  const description = firstDefined(
    oldSeo.description,
    oldSeo.metaDescription,
    document.metaDescription,
  );
  const metaImage = firstDefined(
    oldSeo.metaImage,
    oldSeo.ogImage,
    document.ogImage,
  );

  if (title !== undefined) seo.title = title;
  if (description !== undefined) seo.description = description;
  if (metaImage !== undefined) seo.metaImage = metaImage;

  const oldRobots = oldSeo.robots ?? {};
  const robots = {};
  for (const key of ["noTranslate", "noImageIndex"]) {
    if (typeof oldRobots[key] === "boolean") robots[key] = oldRobots[key];
  }

  const noIndex = firstDefined(
    oldRobots.noIndex,
    oldSeo.noIndex,
    typeof oldRobots.index === "boolean" ? !oldRobots.index : undefined,
    document.noIndex,
  );
  const noFollow = firstDefined(
    oldRobots.noFollow,
    typeof oldRobots.follow === "boolean" ? !oldRobots.follow : undefined,
  );
  if (typeof noIndex === "boolean") robots.noIndex = noIndex;
  if (typeof noFollow === "boolean") robots.noFollow = noFollow;
  if (Object.keys(robots).length > 0) seo.robots = robots;

  if (oldSeo.openGraph && typeof oldSeo.openGraph === "object") {
    const openGraph = { _type: "openGraph" };
    copyFields(oldSeo.openGraph, openGraph, [
      "url",
      "title",
      "description",
      "siteName",
      "type",
      "imageType",
      "image",
      "imageUrl",
    ]);
    seo.openGraph = openGraph;
  }

  if (oldSeo.twitter && typeof oldSeo.twitter === "object") {
    const twitter = { _type: "twitter" };
    copyFields(oldSeo.twitter, twitter, [
      "card",
      "site",
      "creator",
      "title",
      "description",
      "imageType",
      "image",
      "imageUrl",
    ]);
    seo.twitter = twitter;
  }

  return seo;
}

const migrations = documents
  .map((document) => {
    const seo = migrateSeo(document);
    const removeTopLevel = ["metaTitle", "metaDescription", "ogImage"].filter(
      (field) => document[field] !== undefined,
    );
    const unchanged =
      stableStringify(document.seo) === stableStringify(seo) &&
      removeTopLevel.length === 0;

    return unchanged ? null : { document, seo, removeTopLevel };
  })
  .filter(Boolean);

console.log(
  `${applyChanges ? "Applying" : "Dry run:"} ${migrations.length} SEO migration(s) in ${projectId}/${dataset}.`,
);

for (const migration of migrations) {
  const { document, seo, removeTopLevel } = migration;
  console.log(`${document._type} ${document._id}: SEO fields normalized`);

  if (!applyChanges) continue;

  let patch = client.patch(document._id).set({ seo });
  if (removeTopLevel.length > 0) {
    patch = patch.unset(removeTopLevel);
  }
  await patch.commit();
}

if (!applyChanges) {
  console.log("No documents changed. Add --apply to write these changes.");
}
