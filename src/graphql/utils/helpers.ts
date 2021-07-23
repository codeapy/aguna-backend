import { AgunaApolloError, AgunaError } from './types';

// eslint-disable-next-line import/prefer-default-export
export const throwError = (error: AgunaError) => {
  console.error(`❌ Error: [${error.message}]`);
  throw new AgunaApolloError(error);
};
