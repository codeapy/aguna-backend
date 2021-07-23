import { prisma } from '../../schema/context';
import { throwError } from '../../utils/helpers';
import errors from './errors';
import { ModuleObjects } from '../../utils/types';

async function createEntidad(resolve, root, args, context, info) {
  const {
    input: { nombre },
  } = args;
  const countEntidadMismoNombre = await prisma.entidad.count({
    where: { nombre },
  });

  if (countEntidadMismoNombre > 0) {
    throwError(errors.ENTIDAD_EXISTENTE);
  }

  return resolve(root, args, context, info);
}

async function updateEntidad(resolve, root, args, context, info) {
  const {
    input: { id },
  } = args;
  const count = await prisma.entidad.count({
    where: { id },
  });

  if (count === 0) {
    throwError(errors.ENTIDAD_NO_EXISTENTE);
  }

  return resolve(root, args, context, info);
}

async function deleteEntidad(resolve, root, args, context, info) {
  const {
    input: { id },
  } = args;
  const entidad = await prisma.entidad.findUnique({
    where: { id },
  });

  const auditorias = await prisma.auditoria.findMany({
    where: { entidadId: id },
  });

  if (!entidad) {
    throwError(errors.ENTIDAD_NO_EXISTENTE);
  } else if (auditorias.length) {
    throwError(errors.ENTIDAD_POSEE_AUDITORIAS);
  }

  return resolve(root, args, context, info);
}

// eslint-disable-next-line import/prefer-default-export
export const validators = {
  type: ModuleObjects.VALIDATOR,
  Mutation: {
    createEntidad,
    updateEntidad,
    deleteEntidad,
  },
};
