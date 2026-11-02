import type { Metadata } from "next";

export type SanitySeo = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  keywords?: string[] | null;
  canonicalUrl?: string | null;
  noIndex?: boolean | null;
  ogImageUrl?: string | null;
  openGraph?: {
    title?: string | null;
    description?: string | null;
    url?: string | null;
    siteName?: string | null;
    type?: string | null;
    imageUrl?: string | null;
  } | null;
  twitter?: {
    card?: "summary" | "summary_large_image" | null;
    title?: string | null;
    description?: string | null;
    site?: string | null;
    creator?: string | null;
    imageUrl?: string | null;
  } | null;
  robots?: {
    index?: boolean | null;
    follow?: boolean | null;
  } | null;
};

type SeoMetadataInput = {
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  seo?: SanitySeo | null;
};

export function createSeoMetadata({
  title,
  description,
  imageUrl,
  seo,
}: SeoMetadataInput): Metadata {
  const resolvedTitle = seo?.metaTitle?.trim() || title?.trim();

  const resolvedDescription =
    seo?.metaDescription?.trim() || description?.trim();

  const resolvedImage =
    seo?.openGraph?.imageUrl || seo?.ogImageUrl || imageUrl;
  const resolvedTwitterImage =
    seo?.twitter?.imageUrl || resolvedImage;

  const resolvedKeywords =
    seo?.keywords && seo.keywords.length > 0
      ? seo.keywords
      : undefined;

  const shouldIndex =
    seo?.robots?.index ?? (seo?.noIndex === true ? false : true);
  const shouldFollow = seo?.robots?.follow ?? true;
  const openGraphType =
    seo?.openGraph?.type === "article" ? "article" : "website";
  const twitterCard =
    seo?.twitter?.card === "summary" ? "summary" : "summary_large_image";

  return {
    ...(resolvedTitle
      ? {
          title: resolvedTitle,
        }
      : {}),

    ...(resolvedDescription
      ? {
          description: resolvedDescription,
        }
      : {}),

    ...(resolvedKeywords
      ? {
          keywords: resolvedKeywords,
        }
      : {}),

    robots: {
      index: shouldIndex,
      follow: shouldFollow,
      googleBot: {
        index: shouldIndex,
        follow: shouldFollow,
      },
    },

    ...(seo?.canonicalUrl
      ? { alternates: { canonical: seo.canonicalUrl } }
      : {}),
    openGraph: {
      type: openGraphType,
      title: seo?.openGraph?.title?.trim() || resolvedTitle,
      description:
        seo?.openGraph?.description?.trim() || resolvedDescription,
      ...(seo?.openGraph?.url || seo?.canonicalUrl
        ? { url: seo.openGraph?.url || seo.canonicalUrl || undefined }
        : {}),
      ...(seo?.openGraph?.siteName
        ? { siteName: seo.openGraph.siteName }
        : {}),
      ...(resolvedImage ? { images: [{ url: resolvedImage }] } : {}),
    },
    twitter: {
      card: twitterCard,
      title: seo?.twitter?.title?.trim() || resolvedTitle,
      description:
        seo?.twitter?.description?.trim() || resolvedDescription,
      ...(seo?.twitter?.site ? { site: seo.twitter.site } : {}),
      ...(seo?.twitter?.creator ? { creator: seo.twitter.creator } : {}),
      ...(resolvedTwitterImage ? { images: [resolvedTwitterImage] } : {}),
    },
  };
}