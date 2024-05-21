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

export interface PostalCode {
  cpostMunicipio: string;
  id: {
    cpostCodMuni: string;
    cpostCodPostal: string;
    cpostCodProv: string;
  };
}
export interface Entidad {
  id?: number;
  codidfiscal?: string;
  codmun?: string;
  codpro?: string;
  cp?: string;
  denomsocial?: string; //Razón Social
  dirCodmun?: string;
  dirCodpro?: string;
  dirCp?: string;
  dirDomicilio?: string;
  dirEmail?: string;
  dirFax?: string;
  dirTelefono?: string;
  domsocial?: string; //Domicilio Social
  email?: string;
  fax?: string;
  fbaja?: Date;
  feentrada?: Date;
  nifcif?: string; //cif
  numinscripcion?: string; // Nº Registro
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
