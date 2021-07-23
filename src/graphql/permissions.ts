import { shield } from 'graphql-shield';
import * as models from './models';
import { ModuleObjects } from './utils/types';

const modulesPermissions = Object.entries(models)
  .filter((entry: any) => entry?.[1]?.type === ModuleObjects.PERMISSION)
  .map((entry: any) => entry?.[1]);

const ruleTree = modulesPermissions.reduce((composePermission, permission) => {
  return {
    Query: {
      ...composePermission.Query,
      ...permission.Query,
    },
    Mutation: {
      ...composePermission.Mutation,
      ...permission.Mutation,
    },
    // Subscription: {
    //   ...composePermission.Subscription,
    //   ...validator.Subscription,
    // },
  };
}, {});

const permissions = shield(ruleTree, {
  allowExternalErrors: true,
});

export default permissions;
