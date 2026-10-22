import { defineField, defineType } from "sanity";

export const healthCondition = defineType({
  name: "healthCondition",
  title: "Health Condition",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "id",
      title: "ID",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "desc",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "isNHS",
      title: "Show NHS Logo",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "desc",
    },
  },
});
