export default {
  name: "photoGalleryImage",
  type: "image",
  title: "Photo Gallery Image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
    },
    {
      name: "display",
      type: "string",
      title: "Display as",
      description: "How should we display this image?",
      options: {
        // Title of display and Tailwind styling
        list: [
          { title: "Regular", value: "row-span-1 col-span-1" },
          { title: "Wide", value: "row-span-1 col-span-2 " },
          { title: "Tall", value: "row-span-2 col-span-1" },
          { title: "Large", value: "row-span-2 col-span-2" },
        ],
        layout: "radio", // <-- defaults to 'dropdown'
      },
    },
  ],
};
