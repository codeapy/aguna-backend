import { chain } from 'graphql-shield';
import rules from '../../utils/rules';
import { ModuleObjects } from '../../utils/types';

// eslint-disable-next-line import/prefer-default-export
export const UsuarioPermission = {
  type: ModuleObjects.PERMISSION,
  Query: {
    usuarios: chain(rules.isAuthenticated),
  },
  Mutation: {
    syncUsuario: chain(rules.isAuthenticated),
  },
};
