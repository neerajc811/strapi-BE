// strapi-api/config/database.js

const path = require('path');

  module.exports = ({ env }) => ({
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '')),
      },
      useNullAsDefault: true,
    },
  });


