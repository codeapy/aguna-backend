import { Response, Request } from 'koa';
import { PrismaClient } from '@prisma/client';
import { PubSub } from 'apollo-server-koa';
import { KeycloakUser } from '../utils/types';

export const pubsub = new PubSub();

export const prisma: PrismaClient = new PrismaClient();

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
