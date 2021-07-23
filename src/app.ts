import { config } from 'dotenv';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { applyMiddleware } from 'graphql-middleware';
import permissions from './graphql/permissions';
import schema from './graphql/schema/schema';
import { isDev } from './graphql/utils/constants';
import { createContext } from './graphql/schema/context';
import authMiddleware from './graphql/middlewares/authMiddleware';
import validators from './graphql/validators';

config();

export const server = new ApolloServer({
  schema: applyMiddleware(schema, authMiddleware, permissions, validators),
  context: createContext,
  debug: isDev,
});

export const app = new Koa();

server.applyMiddleware({ app });
// alternatively you can get a composed middleware from the apollo server
// app.use(server.getMiddleware());
