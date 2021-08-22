import { TipoRolAuditoria, Auditoria } from '@prisma/client';
import { keycloak, prisma } from '../../schema/context';
import { forEachAsync } from '../../utils/helpers';
import { KeycloakRole } from '../../utils/types';

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
  return prisma.auditoria.findMany({
    include: {
      entidad: true,
    },
  });
}

async function createAuditoria(nombre: string, entidadId: number) {
  const tiposRolConnects = (await prisma.tipoRolAuditoria.findMany()).map(
    (tipoRol) => ({
      id: tipoRol.id,
    })
  );
  const auditoria = await prisma.auditoria.create({
    data: {
      nombre,
      entidad: {
        connect: {
          id: entidadId,
        },
      },
      tiposRol: {
        connect: tiposRolConnects,
      },
    },
    include: {
      entidad: true,
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
    include: {
      entidad: true,
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
    include: {
      entidad: true,
    },
  });
}

type AsignacionRol = {
  keycloakUserId: string;
  roles: KeycloakRole[];
};

async function asignarRoles(asignaciones: AsignacionRol[]) {
  try {
    await forEachAsync<AsignacionRol>(asignaciones, async (asignacion) => {
      const { keycloakUserId: id, roles } = asignacion;
      await keycloak.users.addRealmRoleMappings({
        id,
        roles,
      });
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

async function getRolesAuditoria(
  auditoria: Auditoria & { tiposRol: TipoRolAuditoria[] }
) {
  return Promise.all(
    auditoria.tiposRol.map(async (tipoRol) =>
      keycloak.roles.findOneByName({
        name: `${auditoria.id}-${tipoRol.codigo}`,
      })
    )
  );
}

export default {
  getAuditorias,
  createAuditoria,
  updateAuditoria,
  deleteAuditoria,
  findAuditoria,
  asignarRoles,
  getRolesAuditoria,
};
