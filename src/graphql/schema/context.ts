import { Response, Request } from 'koa';
import { PrismaClient } from '@prisma/client';
import { PubSub } from 'apollo-server-koa';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { KeycloakUser } from '../utils/types';

export const pubsub = new PubSub();

export const prisma: PrismaClient = new PrismaClient();

export const keycloak = new KeycloakAdminClient({
  baseUrl: 'http://localhost:8180/auth',
  realmName: 'aguna',
});

keycloak
  .auth({
    grantType: 'client_credentials',
    clientId: process.env.KEYCLOAK_CLIENT_ID,
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
  })
  .then(() => console.log('🔒 Keycloak auth success'))
  .catch(console.error);

export interface Context {
  prisma: PrismaClient;
  user: KeycloakUser;
  request: Request;
  response: Response;
  pubsub: PubSub;
}

export function createContext(ctx: any): Context {
  return {
    ...ctx.ctx,
    prisma,
    pubsub,
  };
}
