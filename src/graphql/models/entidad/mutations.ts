import { mutationField } from 'nexus';
import services from './services';

// eslint-disable-next-line import/prefer-default-export
export const EntidadMutations = mutationField((t) => {
  t.field('createEntidad', {
    type: 'Entidad',
    args: {
      input: 'EntidadInput',
    },
    resolve: async (_parent, { input: { nombre } }) => {
      return services.createEntidad(nombre);
    },
  });
  t.field('updateEntidad', {
    type: 'Entidad',
    args: {
      input: 'EntidadUpdateInput',
    },
    resolve: async (_parent, { input: { id, nombre } }) => {
      return services.updateEntidad(id, nombre);
    },
  });
  t.field('updateEntidad', {
    type: 'Entidad',
    args: {
      input: 'EntidadUpdateInput',
    },
    resolve: async (_parent, { input: { id, nombre } }) => {
      return services.updateEntidad(id, nombre);
    },
  });
  t.field('deleteEntidad', {
    type: 'Entidad',
    args: {
      input: 'IdInput',
    },
    resolve: async (_parent, { input: { id } }) => {
      return services.deleteEntidad(id);
    },
  });
});
