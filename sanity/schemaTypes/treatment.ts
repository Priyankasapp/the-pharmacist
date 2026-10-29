
import { defineField, defineType } from "sanity";

export const treatmentType = defineType({
  name: "treatment",
  title: "Treatment",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "img",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "condition",
      title: "Conditions",
      type: "array",
      of: [{ type: "string" }],
      description: "Add one or more conditions (e.g. 'Erectile Dysfunction').",
      validation: (Rule) => Rule.required().min(1),
    })
  ],
  preview: {
    select: { title: "title", media: "img" },
  },
});