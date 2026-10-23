import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", type: "text", rows: 2 }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "price",
      type: "number",
      validation: (r) => r.required().min(0),
    }),
    defineField({
      name: "originalPrice",
      title: "Original price (was)",
      type: "number",
    }),
    defineField({
      name: "unitInfo",
      type: "string",
      description: "e.g. 15g | £18 per 100g",
    }),
    defineField({
      name: "prescriptionOnly",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({ name: "brand", type: "reference", to: [{ type: "brand" }] }),
    defineField({
      name: "rating",
      type: "number",
      validation: (r) => r.min(0).max(5),
    }),
    defineField({ name: "reviewCount", type: "number", initialValue: 0 }),
    defineField({
      name:'inStock',
      title:'In Stock',
      type:'boolean',
      initialValue:true,
      description:"Control the green 'In stock' badge at the top",

    }),
   
  ],
});
