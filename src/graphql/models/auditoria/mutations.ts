import { mutationField } from 'nexus';
import services from './services';

// eslint-disable-next-line import/prefer-default-export
export const AuditoriaMutations = mutationField((t) => {
  t.field('createAuditoria', {
    type: 'Auditoria',
    args: {
      input: 'AuditoriaInput',
    },
    resolve: async (_parent, { input: { nombre, entidadId } }) => {
      return services.createAuditoria(nombre, entidadId);
    },
  });
  t.field('updateAuditoria', {
    type: 'Auditoria',
    args: {
      input: 'AuditoriaUpdateInput',
    },
    resolve: async (_parent, { input: { id, nombre, entidadId } }) => {
      return services.updateAuditoria(id, nombre, entidadId);
    },
  });
  t.field('deleteAuditoria', {
    type: 'Auditoria',
    args: {
      input: 'IdInput',
    },
    resolve: async (_parent, { input: { id } }) => {
      return services.deleteAuditoria(id);
    },
  });
});
