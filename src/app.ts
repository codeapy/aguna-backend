import { config } from 'dotenv';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { applyMiddleware } from 'graphql-middleware';
import { permissions } from './graphql/utils/rules';
import schema from './graphql/schema/schema';
import { isDev } from './graphql/utils/constants';
import { createContext } from './graphql/schema/context';

config();

export const server = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  context: createContext,
  debug: isDev,
});

export const app = new Koa();

server.applyMiddleware({ app });
// alternatively you can get a composed middleware from the apollo server
// app.use(server.getMiddleware());
