/* eslint-disable import/prefer-default-export */
import { queryField } from 'nexus';
import services from './services';

// eslint-disable-next-line import/prefer-default-export
export const AuditoriaQueries = queryField((t) => {
  t.list.field('auditorias', {
    type: 'Auditoria',
    args: {},
    resolve: async () => {
      return services.getAuditorias();
    },
  });
  t.field('auditoria', {
    type: 'Auditoria',
    args: {
      input: 'IdInput',
    },
    resolve: async (root, { input: { id } }) => {
      return services.findAuditoria(id);
    },
  });
});
