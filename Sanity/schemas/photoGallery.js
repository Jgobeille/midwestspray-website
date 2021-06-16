export default {
  name: "photoGallery",
  type: "object",
  title: "Photo Gallery",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "photoGalleryImage",
          title: "Photo Gallery Image",
          type: "photoGalleryImage",
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      images: "images",
      image: "images.0",
    },
    prepare(selection) {
      const { images, image } = selection;

      return {
        title: `Gallery block of ${Object.keys(images).length} images`,
        subtitle: `Alt text: ${image.alt}`,
        media: image,
      };
    },
  },
};
