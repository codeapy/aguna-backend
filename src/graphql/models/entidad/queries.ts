/* eslint-disable import/prefer-default-export */
import { queryField } from 'nexus';
import services from './services';

// eslint-disable-next-line import/prefer-default-export
export const usuarioQueries = queryField((t) => {
  t.list.field('entidades', {
    type: 'Entidad',
    args: {},
    resolve: async () => {
      return services.getEntidades();
    },
  });
  t.field('entidad', {
    type: 'Entidad',
    args: {
      input: 'IdInput',
    },
    resolve: async (root, { input: { id } }) => {
      return services.findEntidad(id);
    },
  });
});
