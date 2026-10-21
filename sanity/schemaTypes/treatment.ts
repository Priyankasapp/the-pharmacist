import { defineField, defineType } from "sanity";

export const treatmentType = defineType({
    name:"treatment",
    title:"Treatment",
    type:"document",
    fields:[
        defineField({
            name:'name',
            type:'string',
            validation:(r) => r.required(),
        }),
        defineField({
            name:'slug',
            type:'slug',
            options:{ source:"name"},
            validation:(r) => r.required(),
        }),
        defineField({
            name:"desc",
            title:"Description",
            type:"text",
            rows:3,
            validation:(r) => r.required(),
        }),
        defineField({
            name:"imgSrc",
            title:"Image",
            type:"image",
            options:{ hotspot:true},
            validation:(r) => r.required(),
        }),
        defineField({
            name:'order',
            title:'Display order',
            type:'number',
            initialValue:0,
            description:'Lower numbers appear first',
        }),
    ],
    orderings:[
        {
            title:'Display order',
            name:'orderAsc',
            by:[{ field:"order", direction:"asc"}],
        },
    ],
});