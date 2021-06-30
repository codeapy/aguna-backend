// import {
//   ApolloError,
//   AuthenticationError,
//   UserInputError,
// } from 'apollo-server-koa';
//
// export type PlatformError = {
//   code: string;
//   message: string;
// };
//
// export type PlatformErrorsDefinition = {
//   [key: string]: PlatformError;
// };
//
// export class PlatformApolloError extends ApolloError {
//   constructor(platformError: PlatformError) {
//     super(platformError.message, platformError.code);
//   }
// }
