export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          name: 'skill',
          to: [{type: 'skill'}],
        },
      ],
    },
    {
      title: 'Github Link',
      name: 'githubLink',
      type: 'string',
    },
    {
      title: 'Live Link',
      name: 'liveLink',
      type: 'string',
    },
    {
      title: 'About Image',
      name: 'aboutimage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
  ],
}
