export default {
  name: "imageComponent",
  title: "Image",
  type: "image",
  options: {
    hotspot: true, // <-- Defaults to false
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Image Caption",
      description: "Details about the image",
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
    },
  ],
};
