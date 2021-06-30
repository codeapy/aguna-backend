import { prisma } from '../../schema/context';

async function getRoles() {
  return prisma.rol.findMany();
}

export default {
  getRoles,
};
