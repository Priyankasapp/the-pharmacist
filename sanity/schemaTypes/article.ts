
import { defineField, defineType } from "sanity";

export const articleType = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "Lifestyle & Wellness",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Short Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "img",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", media: "img" },
  },
});