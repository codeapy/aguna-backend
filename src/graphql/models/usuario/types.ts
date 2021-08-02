import { objectType } from 'nexus';

// eslint-disable-next-line import/prefer-default-export
export const Usuario = objectType({
  name: 'Usuario',
  definition(t) {
    t.string('email');
    t.string('username');
    t.string('nombre');
    t.string('apellido');
    t.boolean('activo');
  },
});
