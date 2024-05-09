export interface Provincia {
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

export interface Entidad {
  id?: number;
  codidfiscal?: 'string';
  codmun?: 'string';
  codpro?: 'string';
  cp?: 'string';
  denomsocial?: 'string'; //Razón Social
  dirCodmun?: 'string';
  dirCodpro?: 'string';
  dirCp?: 'string';
  dirDomicilio?: 'string';
  dirEmail?: 'string';
  dirFax?: 'string';
  dirTelefono?: 'string';
  domsocial?: 'string'; //Domicilio Social
  email?: 'string';
  fax?: 'string';
  fbaja?: '2024-05-08T11:11:55.747Z';
  feentrada?: '2024-05-08T11:11:55.747Z';
  nifcif?: 'string'; //cif
  numinscripcion?: 'string'; // Nº Registro
  observaciones?: 'string';
  publicaWeb?: 'string';
  telefono?: 'string';
  web?: 'string';
}
