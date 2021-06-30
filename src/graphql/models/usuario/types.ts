import { objectType } from 'nexus';

// eslint-disable-next-line import/prefer-default-export
export const Rol = objectType({
  name: 'Rol',
  definition(t) {
    t.int('id');
    t.string('codigo');
    t.string('descripcion');
  },
});
