import { inputObjectType, objectType } from 'nexus';

// eslint-disable-next-line import/prefer-default-export
export const Auditoria = objectType({
  name: 'Auditoria',
  definition(t) {
    t.int('id');
    t.string('nombre');
    t.timestamp('fechaInicio');
    t.timestamp('fechaFin');
    t.string('informe');
    t.timestamp('informeCreatedAt');
    t.timestamp('informeUpdatedAt');
    t.field('entidad', {
      type: 'Entidad',
    });
  },
});

export const AuditoriaInput = inputObjectType({
  name: 'AuditoriaInput',
  definition(t) {
    t.nonNull.string('nombre');
    t.nonNull.int('entidadId');
  },
});

export const AuditoriaUpdateInput = inputObjectType({
  name: 'AuditoriaUpdateInput',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('nombre');
    t.nonNull.int('entidadId');
  },
});
