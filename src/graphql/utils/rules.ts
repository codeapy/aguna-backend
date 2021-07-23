// eslint-disable-next-line no-unused-vars
import { rule } from 'graphql-shield';
import { AuthenticationError } from 'apollo-server-koa';
import { Context } from '../schema/context';

export default {
  isAuthenticated: rule({ cache: 'contextual' })(
    (_parent, _args, ctx: Context): boolean | AuthenticationError => {
      return !!ctx.user || new AuthenticationError('Not authenticated!');
    }
  ),
};
