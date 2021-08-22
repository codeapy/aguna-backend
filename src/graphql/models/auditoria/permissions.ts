import { chain } from 'graphql-shield';
import rules from '../../utils/rules';
import { ModuleObjects } from '../../utils/types';

// eslint-disable-next-line import/prefer-default-export
export const AuditoriaPermission = {
  type: ModuleObjects.PERMISSION,
  Query: {
    auditorias: chain(rules.isAuthenticated),
  },
  Mutation: {
    asignarRoles: chain(rules.isAuthenticated),
  },
};
