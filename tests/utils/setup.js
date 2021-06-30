// const { execSync } = require('child_process');
// const { join } = require('path');
//
// const createTemplateTestDatabase = async () => {
//   const prismaBinary = join(
//     __dirname,
//     '..',
//     '..',
//     'node_modules',
//     '.bin',
//     'prisma'
//   );
//
//   // init template test db
//   const t0 = new Date().getTime();
//   execSync(`${prismaBinary} migrate up --create-db --experimental`, {
//     env: {
//       ...process.env,
//       DATABASE_URL: process.env.TEMPLATE_TEST_DATABASE_URL,
//     },
//   });
//   const t1 = new Date().getTime();
//   console.log(`# Migrate took ${t1 - t0} milliseconds.`);
// };
//
// module.exports = async () => {
//   await createTemplateTestDatabase();
// };
