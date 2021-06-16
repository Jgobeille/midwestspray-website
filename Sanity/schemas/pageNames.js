export default {
  name: "pageNames",
  title: "Page Names",
  type: "document",
  fields: [
    {
      name: "page",
      type: "string",
      title: "Page",

      options: {
        // Title of display and Tailwind styling
        list: [
          { title: "Home", value: "/" },
          { title: "About", value: "/about" },
          { title: "Contact", value: "/contact" },
          { title: "Blog", value: "/blog" },
        ],
      },
    },
  ],
};
