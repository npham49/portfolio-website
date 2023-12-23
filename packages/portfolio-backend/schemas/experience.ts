export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      title: 'Position',
      name: 'position',
      type: 'string',
    },
    {
      title: 'Company',
      name: 'company',
      type: 'string',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
    },
    {
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
    },
    {
      title: 'End Date',
      name: 'endDate',
      type: 'date',
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
  ],
}
