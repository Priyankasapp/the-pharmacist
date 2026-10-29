import type { Metadata } from "next";

type SanitySeo = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  noIndex?: boolean | null;
  ogImageUrl?: string | null;
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
  const resolvedImage = seo?.ogImageUrl || imageUrl;

  return {
    ...(resolvedTitle ? { title: resolvedTitle } : {}),
    ...(resolvedDescription ? { description: resolvedDescription } : {}),
    ...(resolvedImage
      ? {
          openGraph: {
            images: [{ url: resolvedImage }],
          },
        }
      : {}),
    ...(seo?.noIndex !== undefined && seo.noIndex !== null
      ? {
          robots: {
            index: !seo.noIndex,
            follow: true,
          },
        }
      : {}),
  };
}
