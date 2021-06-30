// /* eslint-disable import/prefer-default-export */
// import { PrismaClient } from '@prisma/client';
// import { Client } from 'pg';
// import pgtools from 'pgtools';
// import { mocked } from 'ts-jest/utils';
// import { PubSub } from 'apollo-server-koa';
// import makeTestSeeds from './makeTestSeeds';
// import { createContext } from '../src/graphql/schema/context';
//
// jest.mock('../src/graphql/schema/context');
//
// function prismaTestContext() {
//   const prismaContext = {
//     prisma: null,
//   } as { prisma: PrismaClient };
//   const pubsub = new PubSub();
//
//   mocked(createContext).mockImplementation((ctx: any) => {
//     return {
//       ...ctx.ctx,
//       user: {
//         id: 1,
//         email: 'consumer1@gmail.com',
//         cognitoId: 'ba7d0276-b7e5-434d-8929-700eca1e441d',
//       },
//       prisma: prismaContext.prisma,
//       pubsub,
//     };
//   });
//
//   const dropTestDatabaseIfExists = async (client: Client) => {
//     try {
//       await client.query(`
//         SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '${process.env.TEST_DATABASE}';
//         `);
//       await pgtools.dropdb(
//         process.env.MAINTENANCE_DATABASE_URL,
//         process.env.TEST_DATABASE
//       );
//     } catch (e) {
//       console.error(e);
//     }
//   };
//
//   const recreateTestDatabase = async () => {
//     // Drop the schema after the tests have completed
//     const client = new Client({
//       connectionString: process.env.MAINTENANCE_DATABASE_URL,
//     });
//
//     await client.connect();
//     await dropTestDatabaseIfExists(client);
//
//     try {
//       await client.query(
//         `CREATE DATABASE "${process.env.TEST_DATABASE}" WITH TEMPLATE "${process.env.TEMPLATE_TEST_DATABASE}"`
//       );
//     } catch (e) {
//       console.error(e);
//     }
//
//     await client.end();
//
//     prismaContext.prisma = new PrismaClient();
//     // seed data
//     await makeTestSeeds(prismaContext.prisma);
//   };
//
//   const releasePrismaConnection = async () => {
//     prismaContext?.prisma?.$disconnect();
//   };
//
//   return {
//     prismaContext,
//     recreateTestDatabase,
//     releasePrismaConnection,
//   };
// }
//
// export function createTestContext() {
//   const {
//     prismaContext,
//     recreateTestDatabase,
//     releasePrismaConnection,
//   } = prismaTestContext();
//
//   jest.setTimeout(3 * 60 * 1000);
//
//   beforeEach(recreateTestDatabase);
//   afterEach(releasePrismaConnection);
//
//   return prismaContext;
// }
