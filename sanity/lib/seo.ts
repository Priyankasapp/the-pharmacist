import type { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import {
  buildSeoMeta,
  type SeoFieldsInput,
} from "sanity-plugin-seofields/next";

export type SanitySeo = SeoFieldsInput;

type SeoMetadataInput = {
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  path: string;
  seo?: SanitySeo | null;
};

const siteUrl = "https://the-pharmacist.vercel.app";

export function createSeoMetadata({
  title,
  description,
  imageUrl,
  path,
  seo,
}: SeoMetadataInput): Metadata {
  return buildSeoMeta({
    seo,
    baseUrl: siteUrl,
    path,
    defaults: {
      title: title ?? undefined,
      description: description ?? undefined,
      siteName: "The Pharmacist",
      ogImage: imageUrl ?? undefined,
    },
    imageUrlResolver: (image) => urlFor(image).url(),
  });
}
