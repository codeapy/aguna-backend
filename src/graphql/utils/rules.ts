// eslint-disable-next-line no-unused-vars
import { chain, rule, shield } from 'graphql-shield';
import { AuthenticationError } from 'apollo-server-koa';
import { Context } from '../schema/context';

export const rules = {
  isAuthenticated: rule({ cache: 'contextual' })(
    (_parent, _args, ctx: Context): boolean | AuthenticationError => {
      return !!ctx.user || new AuthenticationError('Not authenticated!');
    }
  ),
};

export const permissions = shield(
  {
    Query: {
      entidades: chain(rules.isAuthenticated),
    },
  },
  {
    allowExternalErrors: true,
  }
);
