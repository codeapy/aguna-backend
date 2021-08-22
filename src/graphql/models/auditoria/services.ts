import { keycloak, prisma } from '../../schema/context';
import { forEachAsync } from '../../utils/helpers';

async function crearRolesConPrefijo(prefijo: number) {
  const tiposRolAuditoria = await prisma.tipoRolAuditoria.findMany();
  await Promise.all(
    tiposRolAuditoria.map(async (tipoRolAuditoria) => {
      try {
        await keycloak.roles.create({
          name: `${prefijo}-${tipoRolAuditoria.codigo}`,
        });
      } catch (e) {
        console.error(e);
      }
    })
  );
}

async function getAuditorias() {
  return prisma.auditoria.findMany();
}

async function createAuditoria(nombre: string, entidadId: number) {
  const auditoria = await prisma.auditoria.create({
    data: {
      nombre,
      entidadId,
    },
  });

  await crearRolesConPrefijo(auditoria.id);

  return auditoria;
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

type AsignacionRol = {
  keycloakUserId: string;
  codigosRolesAuditoria: string[];
};

async function asignarRoles(asignaciones: AsignacionRol[]) {
  try {
    await forEachAsync<AsignacionRol>(asignaciones, async (asignacion) => {
      await forEachAsync<string>(
        asignacion.codigosRolesAuditoria,
        async (codigoRolAuditoria) => {
          const rol = await keycloak.roles.findOneByName({
            name: codigoRolAuditoria,
          });
          await keycloak.users.addRealmRoleMappings({
            id: asignacion.keycloakUserId,
            roles: [
              {
                id: rol.id,
                name: rol.name,
              },
            ],
          });
        }
      );
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export default {
  getAuditorias,
  createAuditoria,
  updateAuditoria,
  deleteAuditoria,
  findAuditoria,
  asignarRoles,
};
