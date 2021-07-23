import { prisma } from '../../schema/context';

async function getEntidades() {
  return prisma.entidad.findMany();
}

async function createEntidad(nombre: string) {
  return prisma.entidad.create({
    data: {
      nombre,
    },
  });
}

async function updateEntidad(id: number, nombre: string) {
  return prisma.entidad.update({
    data: {
      nombre,
    },
    where: {
      id,
    },
  });
}

async function deleteEntidad(id: number) {
  return prisma.entidad.delete({
    where: {
      id,
    },
  });
}

async function findEntidad(id: number) {
  return prisma.entidad.findUnique({
    where: {
      id,
    },
  });
}

export default {
  getEntidades,
  createEntidad,
  updateEntidad,
  deleteEntidad,
  findEntidad,
};
