export default {
  name: 'homePageRepairSection',
  title: 'Repair Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of section',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'This is the text under the title',
      type: 'text',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: 'Add link button?',
      name: 'addButton',
      type: 'boolean',
    },
    {
      name: 'button',
      title: 'Button text',
      description: 'Text for the button',
      type: 'string',
    },
    {
      title: 'Button URL',
      name: 'buttonUrl',
      description: 'Link for button',
      type: 'url',
    },
  ],
};
