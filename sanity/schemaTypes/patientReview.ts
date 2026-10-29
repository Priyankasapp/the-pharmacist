import { defineField, defineType } from "sanity";

export const patientReviewType = defineType({
  name: "patientReview",
  title: "Patient Review",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Patient Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Subtitle",
      type: "string",
      description: "Optional role or short attribution shown below the name.",
    }),
    defineField({
      name: "description",
      title: "Review",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imgSrc",
      title: "Patient Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    })
  ],
  preview: {
    select: { title: "name", subtitle: "title", media: "imgSrc" },
  },
});
