import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO & Social Settings",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (rule) => rule.max(60).warning("Max 60 characters"),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(160).warning("Max 160 characters"),
    }),
    defineField({
      name: "ogImage",
      title: "Fallback Share Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
    }),
    defineField({
      name: "openGraph",
      title: "Open Graph",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({ name: "url", title: "URL", type: "url" }),
        defineField({ name: "siteName", title: "Site Name", type: "string" }),
        defineField({
          name: "type",
          title: "Content Type",
          type: "string",
          options: {
            list: [
              { title: "Website", value: "website" },
              { title: "Article", value: "article" },
            ],
          },
          initialValue: "website",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "twitter",
      title: "Twitter / X Card",
      type: "object",
      fields: [
        defineField({
          name: "card",
          title: "Card Type",
          type: "string",
          options: {
            list: [
              { title: "Large Image", value: "summary_large_image" },
              { title: "Summary", value: "summary" },
            ],
          },
          initialValue: "summary_large_image",
        }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({ name: "site", title: "Site Handle", type: "string" }),
        defineField({
          name: "creator",
          title: "Creator Handle",
          type: "string",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "robots",
      title: "Robots",
      type: "object",
      initialValue: { index: true, follow: true },
      fields: [
        defineField({
          name: "index",
          title: "Allow indexing",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "follow",
          title: "Allow following links",
          type: "boolean",
          initialValue: true,
        }),
      ],
    }),
    defineField({
      name: "noIndex",
      title: "Legacy No Index",
      type: "boolean",
      hidden: true,
    }),
  ],
});