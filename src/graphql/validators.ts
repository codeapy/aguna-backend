import * as models from './models';
import { ModuleObjects } from './utils/types';

const modulesValidators = Object.entries(models)
  .filter((entry: any) => entry?.[1]?.type === ModuleObjects.VALIDATOR)
  .map((entry: any) => entry?.[1]);

const validators = modulesValidators.reduce((composeValidator, validator) => {
  return {
    Query: {
      ...composeValidator.Query,
      ...validator.Query,
    },
    Mutation: {
      ...composeValidator.Mutation,
      ...validator.Mutation,
    },
    // Subscription: {
    //   ...composeValidator.Subscription,
    //   ...validator.Subscription,
    // },
  };
}, {});

export default validators;
