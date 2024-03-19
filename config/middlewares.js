module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
 
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::body",
    config: {
      jsonLimit: "250mb",
      formLimit: "250mb",
      textLimit: "250mb",
      formidable: {
        maxFileSize: 250 * 1024 * 1024,
      },
    },
  },
];
