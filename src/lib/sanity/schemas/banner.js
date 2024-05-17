import { defineType } from "sanity";

export const product = defineType({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'images',
            title: 'Images',
            type: 'array',
        },
        {
            name: 'bannerTitle',
            title: 'Banner Title',
            type: 'string'
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
    ]
})