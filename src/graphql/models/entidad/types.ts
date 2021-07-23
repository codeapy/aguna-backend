import { inputObjectType, objectType } from 'nexus';

// eslint-disable-next-line import/prefer-default-export
export const Entidad = objectType({
  name: 'Entidad',
  definition(t) {
    t.int('id');
    t.string('nombre');
  },
});

export const EntidadInput = inputObjectType({
  name: 'EntidadInput',
  definition(t) {
    t.nonNull.string('nombre');
  },
});

export const EntidadUpdateInput = inputObjectType({
  name: 'EntidadUpdateInput',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('nombre');
  },
});

export const IdInput = inputObjectType({
  name: 'IdInput',
  definition(t) {
    t.nonNull.int('id');
  },
});

//
// export const Auditoria = objectType({
//   name: 'Auditoria',
//   definition(t) {
//     t.int('id');
//     t.string('nombre');
//     t.timestamp('fechaInicio');
//     t.timestamp('fechaFin');
//     t.string('informe');
//     t.timestamp('informeCreatedAt');
//     t.timestamp('informeUpdatedAt');
//     t.field('entidad', {
//       type: 'Entidad',
//     });
//   },
// });
