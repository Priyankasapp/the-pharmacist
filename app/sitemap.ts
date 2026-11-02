import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import {
  sitemapHealthConditionsQuery,
  sitemapProductsQuery,
} from "@/sanity/lib/queries";

const siteUrl = "https://the-pharmacist.vercel.app";

type SanitySitemapEntry = {
  slug: string;
  _updatedAt: string;
};

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, conditions] = await Promise.all([
    client.fetch<SanitySitemapEntry[]>(sitemapProductsQuery),
    client.fetch<SanitySitemapEntry[]>(sitemapHealthConditionsQuery),
  ]);

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about-us`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/all-conditions`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/find-pharmacy`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/lifestyle-treatments`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/product`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...conditions.map(({ slug, _updatedAt }) => ({
      url: `${siteUrl}/all-conditions/${encodeURIComponent(slug)}`,
      lastModified: _updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...products.map(({ slug, _updatedAt }) => ({
      url: `${siteUrl}/product/${encodeURIComponent(slug)}`,
      lastModified: _updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
