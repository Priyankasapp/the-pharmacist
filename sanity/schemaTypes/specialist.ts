import { defineField, defineType } from "sanity";

export const specialistType = defineType({
    name:'specialist',
    title:'Specialist',
    type:'document',
    fields:[
        defineField({
            name:'name',
            title:'Name',
            type:'string',
            validation:(Rule) => Rule.required(),
        }),
        defineField({
            name:'image',
            title:'Profile Image',
            type:'image',
            options:{
                hotspot:true,
            },
            validation:(Rule) => Rule.required(),
        }),
        defineField({
            name:'role',
            title:'Role',
            type:'string',
            validation:(Rule) => Rule.required(),
        }),
        defineField({
            name:'registration',
            title:'Registration Number',
            type:'string',
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'text',
        })
    ],
})