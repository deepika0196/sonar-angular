export interface Oficinas {
  codmun?: string;
  codpro?: string;
  cp?: string;
  denominacion?: string;
  domicilio?: string;
  entidadId?: number;
  fax?: string;
  oficinaId?: number;
  telefono?: string;
  reccaResponsables?: {
    apellidos?: string;
    codmun?: string;
    codpro?: string;
    cp?: string;
    domicilio?: string;
    email?: string;
    fax?: string;
    nifcif?: string;
    nombre?: string;
    oficinaEntidadId?: number;
    oficinaId?: number;
    responsableId?: number;
    telefono?: string;
  };
}
