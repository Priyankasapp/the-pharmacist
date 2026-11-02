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
      title: "Share Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
    }),
  ],
});