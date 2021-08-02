/* eslint-disable import/prefer-default-export */
import { queryField } from 'nexus';
import services from './services';

// eslint-disable-next-line import/prefer-default-export
export const UsuarioQueries = queryField((t) => {
  t.list.field('usuarios', {
    type: 'Usuario',
    resolve: async () => {
      return services.getUsuarios();
    },
  });
});
