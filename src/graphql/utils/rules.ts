// eslint-disable-next-line no-unused-vars
import { shield } from 'graphql-shield';

export const rules = {};

export const permissions = shield(
  {
    Query: {},
  },
  {
    allowExternalErrors: true,
  }
);
