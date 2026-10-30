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
      title: "ID (Slug)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "desc",
      title: "Short Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
      description:"Used on the main conditions list page."
    }),

    defineField({
      name:"heroDescription",
      title:"Hero Description",
      type:"text",
      rows:3,
      description:"The large heading text on the condition page "
    }),
    defineField({
      name:"headerImage",
      title:"Header Image",
      type:"image",
      options:{ hotspot:true},
    }),
    defineField({
      name:"steps",
      title:"Steps / Process" ,
      type:"array",
      of:[
        {
          type:"object",
          fields:[
            defineField({ name:"stepNumber", title:"Step Number", type:"string"}),
            defineField({ name:"title", title:"Step Title", type:"string"}),
            defineField({ name:"description", title:"Step Description", type:"text"}),
          ],
        },
      ],
    }),
    defineField({
      name: "isNHS",
      title: "Show NHS Logo",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name:"seo",
      type:"seo"
    })
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "desc",
    },
  },
});
