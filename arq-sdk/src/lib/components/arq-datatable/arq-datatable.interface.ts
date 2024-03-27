import { Observable } from 'rxjs';

import { ArqList, ArqPageableRequest } from '../../interfaces/interfaces';
import { FormGroup } from '@angular/forms';

export interface ArqDatatableConfig {
  filterType?: null | false | 'hide' | 'global' | 'column' | 'both';
  filterPlaceholder?: string;
  filterLabel?: string;
  noDataString?: string;

  footerTable?: ArqDatatableHeaderActions[];
  footerTableString?: string;
  headerTable?: ArqDatatableHeaderActions[];
  headerTableString?: string;

  actions?: ArqDatatableActions[];
  actionsInContextMenu?: boolean;
  actionColLabel?: string;
  newRowInActionsTH?: boolean;
  newRowInModal?: boolean;

  disablePagination?: boolean;
  disableSorting?: boolean;
  pageSize?: number;

  selectColumn?: boolean;

  editCallback?: (row: any, form: FormGroup) => Observable<any> | void; // Función que se ejecuta cuando se edita el valor de la celda
  eventRow?: (row: any) => void; // Función que se ejecuta cuando se le hace click al row
  eventNewRow?: (row: any) => void; // Función que se ejecuta cuando se le hace click al botón de agregar row

  prepareFormGroup?: (formGroup: FormGroup) => void; // Función que se ejecuta cuando se crea el formGroup
}

export interface ArqDatatableColumnsSchema {
  // Define la estructura de la columna, el orden, etc
  key: string;
  subkey?: string; // Si el valor de la columna está anidado en un objeto, se puede especificar el subkey, pero no se puede editar
  type?: 'text' | 'number' | 'date' | 'datetimepicker' | 'boolean' | 'select' | 'autocomplete' | 'image'; // Define el tipo de input que se mostrará en el modal de edición
  label: string;
  format?: any;
  defaultValue?: any; // Valor por defecto al crear un nuevo registro
  data?: Array<ArqList>; // Si type es select array de objetos con los valores posibles
  dataFn?: Observable<Array<ArqList>>; // Cuando la data es un response
  dataFnReq?: (request: ArqPageableRequest, row?: any) => Observable<{ content: ArqList[] }>; // Si type es autocomplete, función que recibe un request y devuelve un observable
  defaultSize?: number; // cantidad a mostrar en el autocomplete
  isEditable?: boolean | ((row: any) => boolean); // Define si la columna es editable
  isCreable?: boolean; // Define si la columna es creable
  editInputSize?: string;
  fullObject?: boolean; // Define si el valor de la columna es un objeto o un valor primitivo (solo para type select)
  panelWidth?: string | number | undefined; // Define el ancho del panel del autocomplete
  dependsOn?: any[]; // Listado de dependientes para el autocomplete
  maxLength?: number; // Define la cantidad máxima de caracteres que puede tener el input

  isSortable?: boolean; // Define si la columna es ordenable
  isFilterable?: boolean; // Define si la columna es filtrable
  isHidden?: boolean; // Define si la columna esta oculta

  isRequired?: boolean;
  isPk?: boolean;
  isDefaultFilter?: boolean;
  isOnlyFilter?: boolean;
  pattern?: string | RegExp;

  lang?: string;
}

export interface ArqDatatableActions {
  icon: string;
  tooltip: string;
  color?: string;
  action: (row: any) => Observable<any> | void;
  inline?: boolean;
}

export interface ArqDatatableHeaderActions {
  label: string;
  action: () => void;
  color?: string;
  icon?: string;
  tooltip?: string;
}

export interface ArqDatatableSelectEvent {
  selected: Array<any>;
  lastSelection: any;
}
