import { defineField, defineType } from "sanity";

export const seo = defineType({
    name:"seo",
    title:"SEO",
    type:"object",
    fields:[
        defineField({name:"metaTitle", type:"string", validation:(r) => r.max(60).warning("max 60 characters")}),
        defineField({name:"metaDescription", type:"text", rows:3, validation: (r) => r.max(110).warning("Max 160 characters")}),
        defineField({name:"ogImage", title:"Share image", type:"image"}),
        defineField({name:"noIndex", type:"boolean", initialValue:false}),
    ]
})