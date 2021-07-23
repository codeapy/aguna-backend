import { AgunaErrorsDefinition } from '../../utils/types';

type EntidadErrorCode =
  | 'ENTIDAD_EXISTENTE'
  | 'ENTIDAD_NO_EXISTENTE'
  | 'ENTIDAD_POSEE_AUDITORIAS';

const errors: AgunaErrorsDefinition<EntidadErrorCode> = {
  ENTIDAD_EXISTENTE: {
    code: 'ENTIDAD_EXISTENTE',
    message: 'Ya existe una entidad con el mismo nombre',
  },
  ENTIDAD_NO_EXISTENTE: {
    code: 'ENTIDAD_NO_EXISTENTE',
    message: 'No existe entidad con el id especificado',
  },
  ENTIDAD_POSEE_AUDITORIAS: {
    code: 'ENTIDAD_POSEE_AUDITORIAS',
    message: 'La entidad no puede ser eliminada, ya que pose auditorias',
  },
};

export default errors;
