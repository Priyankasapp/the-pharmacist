import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { productSeoQuery } from "@/sanity/lib/queries";
import { createSeoMetadata } from "@/sanity/lib/seo";

type ProductSeoData = {
  name?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
    noIndex?: boolean | null;
    ogImageUrl?: string | null;
  } | null;
};

type ProductLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductLayoutProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const product = await client.fetch<ProductSeoData>(productSeoQuery, {
      slug,
    });

    return createSeoMetadata({
      title: product?.name ?? decodeURIComponent(slug).replace(/-/g, " "),
      description: product?.description,
      imageUrl: product?.imageUrl,
      seo: product?.seo,
    });
  } catch (error) {
    console.error(`Failed to fetch SEO metadata for product "${slug}":`, error);
    return createSeoMetadata({
      title: decodeURIComponent(slug).replace(/-/g, " "),
    });
  }
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return children;
}
