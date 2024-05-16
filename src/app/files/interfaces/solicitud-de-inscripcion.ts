export interface Provincia {
  muniDenominacion: string;
  provCodProvincia: string;
  provDenominacion: string;
  provCapital: string;
  provCodCcaa: string;
  provCodLetra: string;
}
export interface Municipio {
  id: {
    muniCodMunicipio: string;
    muniCodProvincia: string;
  };
  muniDenominacion: string;
}

export interface postalCode {
  cpostMunicipio: string;
  id: {
    cpostCodMuni: string;
    cpostCodPostal: string;
    cpostCodProv: string;
  };
}
export interface Entidad {
  id: number;
  codidfiscal?: string;
  codmun?: string;
  codpro?: string;
  cp?: string;
  denomsocial?: string;
  dirCodmun?: string;
  dirCodpro?: string;
  dirCp?: string;
  dirDomicilio?: string;
  dirEmail?: string;
  dirFax?: string;
  dirTelefono?: string;
  domsocial?: string;
  email?: string;
  fax?: string;
  fbaja?: string;
  feentrada?: string;
  nifcif?: string;
  numinscripcion?: string;
  observaciones?: string;
  publicaWeb?: string;
  telefono?: string;
  web?: string;
}

export interface EntidadFilter {
  codmun?: string;
  codpro?: string;
  cp?: string;
  denomsocial?: string;
  fbaja?: string;
  feentrada?: string;
  nifcif?: string;
  numinscripcion?: string;
  representantesNifcif?: string;
}
