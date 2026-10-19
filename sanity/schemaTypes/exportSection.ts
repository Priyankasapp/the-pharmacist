import { defineField, defineType } from "sanity";

export const exportSectionType = defineType({
  name: "exportSection",
  title: "Export Section (Home Page)",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main heading text (highlighted part is set separately)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "highlightText",
      title: "Highlighted Text",
      type: "string",
      description:
        "The emphasized word(s) inside the heading, e.g.'Export Pharmacy'",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "cards",
      title: "Service Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "exportCard",
          title: "Export Card",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "desc",
              title: "Description",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "img",
              title: "Icon /Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt text",
                  type: "string",
                }),
              ],
            }),
            defineField({
              name: "isnhs",
              title: "NHS Card?",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
                name:"order",
                title:"Order",
                type:"number",
                description:"Sort order (lower = first)",
                initialValue:0,
            }),

          ],
          preview:{
            select:{
                title:"title",
                subtitle:"desc",
                media:"img",
            },
          },
        },
      ],
      validation:(Rule) => Rule.min(1),
    }),
  ],

  preview:{
    select:{ title: "heading"},
    prepare:({ title}) =>({
        title:title || "Export Section",
        subtitle:"Singleton - homepage section",
    }),
  },
});
