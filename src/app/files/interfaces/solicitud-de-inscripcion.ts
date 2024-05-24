export interface Provincia {
  muniDenominacion: string;
  provCodProvincia: string;
  provDenominacion: string;
  provCapital: string;
  provCodCcaa: string;
  provCodLetra: string;
}
export interface Municipio {
  muniCodMunicipio: string;
  muniCodProvincia: string;
  muniDenominacion: string;
}

export interface postalCode {
  cpostMunicipio: string;
  cpostCodMuni: string;
  cpostCodPostal: string;
  cpostCodProv: string;
}
export interface Entidad {
  id?: number;
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
  representantesDTO: {
    apellidos: string;
    codmun: string;
    codpro: string;
    cp: string;
    domicilio: string;
    email: string;
    entidadId: number;
    fax: string;
    id: number;
    nifcif: string;
    nombre: string;
    telefono: string;
  };
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

export interface State {
  cif: string;
  action: string;
  navigationId: number;
}
export interface RepresentantesLegal {
  apellidos: string;
  codmun: string;
  codpro: string;
  cp: string;
  domicilio: string;
  email: string;
  fax: string;
  id: number;
  nifcif: string;
  nombre: string;
  telefono: string;
}
