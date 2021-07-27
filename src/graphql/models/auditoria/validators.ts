import { prisma } from '../../schema/context';
import { throwError } from '../../utils/helpers';
import errors from './errors';
import { ModuleObjects } from '../../utils/types';

async function createAuditoria(resolve, root, args, context, info) {
  const {
    input: { entidadId },
  } = args;
  const countEntidad = await prisma.entidad.count({
    where: { id: entidadId },
  });

  if (countEntidad === 0) {
    throwError(errors.ENTIDAD_NO_EXISTENTE);
  }

  return resolve(root, args, context, info);
}

async function updateAuditoria(resolve, root, args, context, info) {
  const {
    input: { id, entidadId },
  } = args;
  const auditoriaCount = await prisma.entidad.count({
    where: { id },
  });

  const entidadCount = await prisma.entidad.count({
    where: { id: entidadId },
  });

  if (auditoriaCount === 0) {
    throwError(errors.AUDITORIA_NO_EXISTENTE);
  } else if (entidadCount === 0) {
    throwError(errors.ENTIDAD_NO_EXISTENTE);
  }

  return resolve(root, args, context, info);
}

async function deleteAuditoria(resolve, root, args, context, info) {
  const {
    input: { id },
  } = args;
  const auditoriaCount = await prisma.entidad.count({
    where: { id },
  });

  if (auditoriaCount === 0) {
    throwError(errors.AUDITORIA_NO_EXISTENTE);
  }

  return resolve(root, args, context, info);
}

// eslint-disable-next-line import/prefer-default-export
export const AuditoriaValidator = {
  type: ModuleObjects.VALIDATOR,
  Mutation: {
    createAuditoria,
    updateAuditoria,
    deleteAuditoria,
  },
};
