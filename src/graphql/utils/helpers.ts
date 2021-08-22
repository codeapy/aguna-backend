import { AgunaApolloError, AgunaError } from './types';

// eslint-disable-next-line import/prefer-default-export
export const throwError = (error: AgunaError) => {
  console.error(`❌ Error: [${error.message}]`);
  throw new AgunaApolloError(error);
};

export async function forEachAsync<T>(
  arr: T[],
  // eslint-disable-next-line no-unused-vars
  fn: (item: T) => Promise<void>
) {
  return Promise.all(arr.map(fn));
}
