export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
      description: 'Text under company name in footer',
      type: 'text',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'socialMedia',
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'contactInfo',
    },
  ],
};
