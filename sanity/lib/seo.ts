import type { Metadata } from "next";

type SanitySeo = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  keywords?: string[] | null;
  robots?: "index, follow" | "noindex, nofollow" | null;
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

  const resolvedKeywords =
    seo?.keywords && seo.keywords.length > 0
      ? seo.keywords
      : undefined;

  const shouldIndex = seo?.robots
    ? seo.robots.includes("index")
    : true;

  const shouldFollow = seo?.robots
    ? seo.robots.includes("follow")
    : true;

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
    },

    ...(resolvedImage
      ? {
          openGraph: {
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
            images: [
              {
                url: resolvedImage,
              },
            ],
          },
          twitter: {
            card: "summary_large_image",
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
            images: [resolvedImage],
          },
        }
      : {}),
  };
}