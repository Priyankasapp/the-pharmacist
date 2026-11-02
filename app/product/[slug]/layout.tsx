import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { productSeoQuery } from "@/sanity/lib/queries";
import { createSeoMetadata } from "@/sanity/lib/seo";
import type { SanitySeo } from "@/sanity/lib/seo";
import { getSlugCandidates } from "@/sanity/lib/slugCandidates";

type ProductSeoData = {
  name?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  seo?: SanitySeo | null;
};

type ProductLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductLayoutProps): Promise<Metadata> {
  const { slug } = await params;

  const decoded = decodeURIComponent(slug);

  try {
    const product = await client.fetch<ProductSeoData>(productSeoQuery, {
      slugCandidates: getSlugCandidates(slug),
    });

    return createSeoMetadata({
      title: product?.name ?? decoded.replace(/-/g, " "),
      description: product?.description,
      imageUrl: product?.imageUrl,
      path: `/product/${encodeURIComponent(slug)}`,
      seo: product?.seo,
    });
  } catch (error) {
    console.error(`Failed to fetch SEO metadata for product "${slug}":`, error);
    return createSeoMetadata({
      title: decoded.replace(/-/g, " "),
      path: `/product/${encodeURIComponent(slug)}`,
    });
  }
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return children;
}