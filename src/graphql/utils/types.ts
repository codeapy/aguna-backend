/* eslint-disable camelcase */
/* eslint-disable camelcase,no-unused-vars,no-shadow */
import {
  ApolloError,
  AuthenticationError,
  UserInputError,
} from 'apollo-server-koa';

export enum ModuleObjects {
  VALIDATOR,
  PERMISSION,
}

export type AgunaErrors = {
  notAuthenticated: AuthenticationError;
  userAlreadyExists: UserInputError;
  invalidAdminSecretKey: Error;
};

export type AgunaError = {
  code: string;
  message: string;
};

export type AgunaErrorsDefinition = {
  [key: string]: AgunaError;
};

export class AgunaApolloError extends ApolloError {
  constructor(agunaError: AgunaError) {
    super(agunaError.message, agunaError.code);
  }
}

export type KeycloakUser = {
  exp: number;
  iat: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  session_state: string;
  acr: number;
  'allowed-origins': string[];
  realm_access: {
    roles: string[];
  };
  resource_access: {
    account: {
      roles: string[];
    };
  };
  scope: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
};
