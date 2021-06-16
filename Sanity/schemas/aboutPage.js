export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "aboutTopTitle",
      title: "Top Section Title",
      description: "This is for the large text at the top of the About screen",
      type: "text",
    },
    {
      name: "aboutTitleDescription",
      title: "Description",
      description: "This is the text under the large text",
      type: "text",
    },
    {
      name: "aboutTitleImage",
      title: "Image",
      type: "imageComponent",
    },
    {
      name: "aboutSectionTitle",
      title: "About Section Title",
      description: "This is for the large header text in the section",
      type: "text",
    },
    {
      name: "aboutSectionDescription",
      title: "Description",
      description: "This is the text under the large text",
      type: "text",
    },
    {
      name: "aboutSectionImage",
      title: "Image",
      type: "imageComponent",
    },
    {
      name: "history",
      title: "History Section",
      type: "array",
      of: [{ type: "reference", to: { type: "history" } }],
    },
    // Photo Gallery
    {
      name: "photoGallery",
      title: "Photo Gallery",
      type: "photoGallery",
    },
  ],
};
