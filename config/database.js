const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'ec2-52-54-38-229.compute-1.amazonaws.com'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'd8kqi9viki79a3'),
//       user: env('DATABASE_USERNAME', 'qtbdvbhkxcskqm'),
//       password: env('DATABASE_PASSWORD', '6f253835a4044da9d35d201e8f9893054e867a81a8e0990a108cb74ba47eca0e'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//     useNullAsDefault: true,
//   },
// });


   // strapi-api/config/database.js
  //  module.exports = ({ env }) => ({
  //   defaultConnection: "default",
  //   connections: {
  //     default: {
  //       connector: "bookshelf",
  //       settings: {
  //         client: "postgres",
  //         host: env('DATABASE_HOST', 'ec2-52-54-38-229.compute-1.amazonaws.com'),
  //         port: env.int('DATABASE_PORT', 5432),
  //         database: env('DATABASE_NAME', 'd8kqi9viki79a3'),
  //         user: env('DATABASE_USERNAME', 'qtbdvbhkxcskqm'),
  //         password: env('DATABASE_PASSWORD', '6f253835a4044da9d35d201e8f9893054e867a81a8e0990a108cb74ba47eca0e'),
  //         schema: env("DATABASE_SCHEMA", "public"),
  //       },
  //       options: {},
  //     },
  //   },
  // });