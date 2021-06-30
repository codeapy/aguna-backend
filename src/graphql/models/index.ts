/* eslint-disable import/export */
import { TimestampResolver, LongResolver } from 'graphql-scalars';
import { asNexusMethod } from 'nexus';

export const GQLTimestamp = asNexusMethod(
  TimestampResolver,
  'timestamp',
  'Date'
);

export const GQLLong = asNexusMethod(LongResolver, 'long', 'number');

export * from './usuario';
