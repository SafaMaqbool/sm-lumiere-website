import {defineField, defineType} from 'sanity'

export const book = defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'e.g. A Journey of Mindset, Entrepreneurship, Leadership & Impact',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Shagufta Munaf',
    }),
    defineField({
      name: 'edition',
      title: 'Edition',
      type: 'string',
      description: 'e.g. First Edition, 2026',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'previewFile',
      title: 'Preview PDF',
      type: 'file',
      options: {accept: 'application/pdf'},
      description: 'The marketing/preview PDF visitors can download. Do not upload the KDP print-interior file here.',
    }),
    defineField({
      name: 'purchaseUrl',
      title: 'Purchase Link',
      type: 'url',
      description: 'Amazon or other store link, once published.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers show first. Leave blank to sort by newest.',
    }),
  ],
})
