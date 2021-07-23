import { chain } from 'graphql-shield';
import rules from '../../utils/rules';
import { ModuleObjects } from '../../utils/types';

// eslint-disable-next-line import/prefer-default-export
export const EntidadPermission = {
  type: ModuleObjects.PERMISSION,
  Query: {
    entidades: chain(rules.isAuthenticated),
  },
};
