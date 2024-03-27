// Interface for DynamicDTO
export interface ArqDynamic {
  formulario: ArqFormulario;
  campos: ArqCampo[];
}

export interface ArqCampo {
  cssClass: string;
  htmlLabel: string;
  htmlLabelVal: string;
  htmlRequerido: string;
  htmlTamanyoMax: number;
  htmlTipo: string;
  id: number;
  listaDependiente: string;
  nombreParametro: string;
  nombreParametroSql: string;
  orden: number;
  ordenParametro: number;
  origenDatos: string;
  tablaTemporal: string;
  value: string | any;
  idCampo: string;
  anchoColumna: string;
  grupo: string;
  disabled: boolean;
}

export interface ArqFormulario {
  ciAplicacion: string;
  denominacion: string;
  denominacionVal: string;
  formatoExport: string;
  idFormulario: number;
  idSForm: string;
  jasper: string;
  nombreArchivo: string;
  sqlExport: string;
  visible: string;
  numColumnas: string;
}
