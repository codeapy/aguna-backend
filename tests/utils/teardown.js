// const { Client } = require('pg');
//
// const dropTemplateTestDatabase = async () => {
//   // Drop the schema after the tests have completed
//   const client = new Client({
//     connectionString: process.env.MAINTENANCE_DATABASE_URL,
//   });
//   await client.connect();
//   await client.query(
//     `DROP DATABASE IF EXISTS "${process.env.TEMPLATE_TEST_DATABASE}"`
//   );
//   await client.end();
// };
//
// module.exports = async () => {
//   await dropTemplateTestDatabase();
// };
