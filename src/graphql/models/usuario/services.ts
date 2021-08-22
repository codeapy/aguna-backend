import { prisma } from '../../schema/context';
import { KeycloakUser } from '../../utils/types';

async function syncUsuario({
  email,
  preferred_username: username,
  given_name: nombre,
  family_name: apellido,
  sub: keycloakId,
}: KeycloakUser) {
  return prisma.usuario.upsert({
    create: {
      email,
      username,
      nombre,
      apellido,
      keycloakId,
      activo: true,
    },
    update: {
      email,
      username,
      nombre,
      apellido,
      keycloakId,
      activo: true,
    },
    where: {
      email,
    },
  });
}

async function getUsuarios() {
  return prisma.usuario.findMany();
}

export default {
  syncUsuario,
  getUsuarios,
};
