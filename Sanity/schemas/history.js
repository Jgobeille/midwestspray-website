export default {
  name: "history",
  title: "History",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the event you want to talk about.",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      description: "Date of the event",
      type: "date",
      options: {
        dateFormat: "MMMM-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "description",
      title: "Description",
      description: "This is the text under the large text",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "*Optional",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "imageCaption",
      title: "Image Caption",
      description: "*Optional",
      type: "text",
    },
  ],
};
