export default {
  name: 'homePageTopSection',
  title: 'Home page Top Section',
  type: 'document',
  fields: [
    {
      name: 'topMessage',
      title: 'Top message',
      description: 'This is for the large text at the top of the home screen',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'This is the text under the large text',
      type: 'text',
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
