import { AgunaErrorsDefinition } from '../../utils/types';

type AuditoriaErrorCode = 'ENTIDAD_NO_EXISTENTE' | 'AUDITORIA_NO_EXISTENTE';

const errors: AgunaErrorsDefinition<AuditoriaErrorCode> = {
  AUDITORIA_NO_EXISTENTE: {
    code: 'AUDITORIA_NO_EXISTENTE',
    message: 'No existe auditoria con el id especificado',
  },
  ENTIDAD_NO_EXISTENTE: {
    code: 'ENTIDAD_NO_EXISTENTE',
    message: 'No existe entidad con el id especificado',
  },
};

export default errors;
