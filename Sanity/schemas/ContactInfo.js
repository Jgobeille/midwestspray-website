export default {
  type: "object",
  name: "contactInfo",
  title: "Contact Info",
  fieldsets: [{ name: "contact", title: "Contact Info" }],
  fields: [
    {
      title: "Address",
      name: "address",
      type: "string",
      fieldset: "contact",
    },
    {
      title: "Google Maps URL",
      name: "addressURL",
      type: "url",
      fieldset: "contact",
    },
    {
      title: "Phone Number",
      name: "phoneNumber",
      type: "string",
      fieldset: "contact",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      fieldset: "contact",
    },
  ],
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 2, // Defines a grid for the fields and how many columns it should have
  },
};
