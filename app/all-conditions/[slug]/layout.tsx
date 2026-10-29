import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { healthConditionSeoQuery } from "@/sanity/lib/queries";
import { createSeoMetadata } from "@/sanity/lib/seo";

type HealthConditionSeoData = {
  name?: string | null;
  desc?: string | null;
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
    noIndex?: boolean | null;
    ogImageUrl?: string | null;
  } | null;
};

type HealthConditionLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: HealthConditionLayoutProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const condition = await client.fetch<HealthConditionSeoData>(
      healthConditionSeoQuery,
      { slug },
    );

    return createSeoMetadata({
      title: condition?.name ?? decodeURIComponent(slug).replace(/-/g, " "),
      description: condition?.desc,
      seo: condition?.seo,
    });
  } catch (error) {
    console.error(
      `Failed to fetch SEO metadata for health condition "${slug}":`,
      error,
    );
    return createSeoMetadata({
      title: decodeURIComponent(slug).replace(/-/g, " "),
    });
  }
}

export default function HealthConditionLayout({
  children,
}: HealthConditionLayoutProps) {
  return children;
}
