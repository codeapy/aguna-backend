import { mutationField } from 'nexus';
import services from './services';

// eslint-disable-next-line import/prefer-default-export
export const UsuarioMutations = mutationField((t) => {
  t.field('syncUsuario', {
    type: 'Usuario',
    resolve: async (_parent, _args, ctx) => {
      return services.syncUsuario(ctx.user);
    },
  });
});
