import { prisma } from '../../schema/context';

async function getAuditorias() {
  return prisma.auditoria.findMany();
}

async function createAuditoria(nombre: string, entidadId: number) {
  return prisma.auditoria.create({
    data: {
      nombre,
      entidadId,
    },
  });
}

async function updateAuditoria(id: number, nombre: string, entidadId: number) {
  return prisma.auditoria.update({
    data: {
      nombre,
      entidadId,
    },
    where: {
      id,
    },
  });
}

async function deleteAuditoria(id: number) {
  return prisma.auditoria.delete({
    where: {
      id,
    },
  });
}

async function findAuditoria(id: number) {
  return prisma.auditoria.findUnique({
    where: {
      id,
    },
  });
}

export default {
  getAuditorias,
  createAuditoria,
  updateAuditoria,
  deleteAuditoria,
  findAuditoria,
};
