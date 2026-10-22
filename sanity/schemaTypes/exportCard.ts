import { defineField, defineType } from "sanity";

export const exportCardType = defineType({
    name: 'exportCard',
    title: 'Export Card',
    type: 'document',
    fields: [
        defineField({
            name: 'img',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true, 
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isnhs',
            title: 'Show NHS Logo?',
            type: 'boolean',
            initialValue: false,
            description: 'Toggle this on if this card should display the NHS logo.'
        }),
    ],
})