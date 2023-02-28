import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter number between 1-5 Stars',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter value between 1 and 5'),
    }),

    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dish'}}],
    }),
  ],
})

// fields: [
//   defineField({
//     name: 'title',
//     title: 'Title',
//     type: 'string',
//   }),
//   defineField({
//     name: 'slug',
//     title: 'Slug',
//     type: 'slug',
//     options: {
//       source: 'title',
//       maxLength: 96,
//     },
//   }),
//   defineField({
//     name: 'author',
//     title: 'Author',
//     type: 'reference',
//     to: {type: 'author'},
//   }),
//   defineField({
//     name: 'mainImage',
//     title: 'Main image',
//     type: 'image',
//     options: {
//       hotspot: true,
//     },
//   }),
//   defineField({
//     name: 'categories',
//     title: 'Categories',
//     type: 'array',
//     of: [{type: 'reference', to: {type: 'category'}}],
//   }),
//   defineField({
//     name: 'publishedAt',
//     title: 'Published at',
//     type: 'datetime',
//   }),
//   defineField({
//     name: 'body',
//     title: 'Body',
//     type: 'blockContent',
//   }),
// ],
