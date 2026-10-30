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

    defineField({
      name: "subtitle",
      title: "Subtitle / Pack Summary",
      type: "string",
      description: "e.g. '24 Tablets' (Displayed directly under the main title)",
    }),

    defineField({
      name: "description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "image",
      title: "Main Product Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "gallery",
      title: "Product Gallery",
      type: "array",
      of: [
        {
          type: "object",
          name: "galleryItem",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (r) => r.required(),
            }),
            defineField({
              name: "label",
              title: "Thumbnail Label",
              type: "string",
              description: "Optional text overlay for the thumbnail (e.g., 'Boosted by caffeine')",
            }),
          ],
          preview: {
            select: {
              title: "label",
              media: "image",
            },
            prepare({ title, media }) {
              return {
                title: title || "Gallery Image",
                media,
              };
            },
          },
        },
      ],
      description: "Additional product images and promotional images.",
    }),

    // Pricing
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


    // Product availability
    defineField({
      name: "prescriptionOnly",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
      description: "Control the green 'In stock' badge at the top.",
    }),

    // Category and brand
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    }),

    defineField({
      name: "brand",
      type: "reference",
      to: [{ type: "brand" }],
    }),

    // Reviews
    defineField({
      name: "rating",
      type: "number",
      validation: (r) => r.min(0).max(5),
    }),

    defineField({
      name: "reviewCount",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "strengths",
      title: "Available Strengths",
      type: "array",
      of: [
        {
          type: "object",
          name: "productStrength",
          fields: [
            defineField({
              name: "label",
              title: "Strength Label",
              type: "string",
              validation: (r) => r.required(),
              description: "e.g. 500 mg",
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "number",
              validation: (r) => r.min(0),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "price",
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle:
                  subtitle != null ? `£${subtitle.toFixed(2)}` : "No price set",
              };
            },
          },
        },
      ],
    }),

    defineField({
      name: "packSizes",
      title: "Available Pack Sizes",
      type: "array",
      of: [
        {
          type: "object",
          name: "productPackSize",
          fields: [
            defineField({
              name: "label",
              title: "Pack Size",
              type: "string",
              validation: (r) => r.required(),
              description: "e.g. 16 tablets",
            }),
            defineField({
              name: "quantity",
              title: "Quantity (Number of tablets)",
              type: "number",
              validation: (r) => r.min(1),
              description: "Used to calculate price per tablet on the frontend.",
            }),
            defineField({
              name: "price",
              title: "Selling Price",
              type: "number",
              validation: (r) => r.min(0),
            }),
            defineField({
              name: "originalPrice",
              title: "Original Price",
              type: "number",
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "price",
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle:
                  subtitle != null ? `£${subtitle.toFixed(2)}` : "No price set",
              };
            },
          },
        },
      ],
    }),

    //  Delivery Options Table
    defineField({
      name: "deliveryOptions",
      title: "Delivery Options",
      type: "array",
      description: "Table displaying shipping methods, times, and costs.",
      of: [
        {
          type: "object",
          name: "deliveryOption",
          fields: [
            defineField({
              name: "type",
              title: "Delivery Type",
              type: "string",
              validation: (r) => r.required(),
              description: "e.g. Standard delivery",
            }),
            defineField({
              name: "time",
              title: "Estimated Time",
              type: "string",
              validation: (r) => r.required(),
              description: "e.g. 1-4 business days",
            }),
            defineField({
              name: "cost",
              title: "Cost",
              type: "string",
              validation: (r) => r.required(),
              description: "e.g. $4.50 or Free",
            }),
          ],
          preview: {
            select: {
              title: "type",
              subtitle: "cost",
            },
          },
        },
      ],
    }),

    // Optional product detail tabs
    defineField({
      name: "productInformation",
      title: "Product Information Tabs",
      type: "array",
      of: [
        {
          type: "object",
          name: "productInformationSection",
          fields: [
            defineField({
              name: "title",
              title: "Tab Title",
              type: "string",
              options: {
                list: [
                  { title: "Description", value: "Description" },
                  { title: "Directions", value: "Directions" },
                  { title: "Ingredients", value: "Ingredients" },
                  { title: "Side Effects", value: "Side effects" },
                  { title: "Warnings", value: "Warnings" },
                  { title: "FAQs", value: "FAQs" },
                ],
              },
              validation: (r) => r.required(),
            }),
            defineField({
              name: "content",
              title: "Tab Content",
              type: "text",
              rows: 6,
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "content",
            },
          },
        },
      ],
    }),

    // SEO
    defineField({
      name: "seo",
      type: "seo",
    }),
  ],
});