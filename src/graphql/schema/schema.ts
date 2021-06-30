import { makeSchema } from 'nexus';
import path from 'path';
import * as allTypes from '../models';

export default makeSchema({
  types: allTypes,
  outputs: {
    schema: path.join(__dirname, './schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
});
