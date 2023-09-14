// const path = require('path');
// module.exports = ({ env }) => ({
//     connection: {
//       client: 'postgres',
//       NODE_ENV: 'production',
//       connection: {
//         host: env('DATABASE_HOST', ''),
//         port: env.int('DATABASE_PORT', ''),
//         database: env('DATABASE_NAME', ''),
//         user: env('DATABASE_USERNAME', ''),
//         password: env('DATABASE_PASSWORD', ''),
        
//       },
      
//     }
//   });

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

