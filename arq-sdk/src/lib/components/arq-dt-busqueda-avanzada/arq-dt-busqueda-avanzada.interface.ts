import { ArqList } from '../../interfaces/interfaces';
import { ArqDatatableConfig } from '../components';

export interface ArqDTBusquedaAvanzadaColumns {
  idColumn: string;
  idDatatable: string;
  type: 'text' | 'number' | 'date' | 'datetimepicker' | 'boolean' | 'select' | 'autocomplete' | 'image';
  format?: string;
  order: number;
  label: string;
  sizeCol?: string;

  comboStatic?: any;
  comboDynamic?: any;
  comboItemList?: ArqList[];

  pkColumn?: any; // De momento, solo define si la columna es usable/visible (tambien, en teoria es la pk de la tabla)
  showDefault?: boolean; // Define si la columna esta mostrada
  showHeader?: boolean; // Define si la columna es filtrable

  declaredColumn?: boolean;

  isDefaultFilter?: boolean; // Si viene true se carga en el popup de prefiltros
  isOnlyFilter?: boolean;
  dependsOn?: string;
}

export interface ArqDTBusquedaAvanzadaFilters {
  idDatatable: string;
  idColumn: string;
  type: string;
  option: string;
  formatColumn?: string | null;

  baseFilterText?: string;
  baseFilterNumber?: number;
  baseFilterDate?: Date;
  baseFilterCombo?: Array<any>;
  fromNumber?: number;
  untilNumber?: number;
  fromDate?: Date;
  untilDate?: Date;

  hidden?: boolean;
  dependsOn?: string[];
}

export interface ArqDTBusquedaAvanzadaConfig {
  datatable: ArqDatatableConfig; // Configuraciones relativas al datatable, revisar interfaz ArqDatatableConfig
  headerButtons?: Array<ArqDTBusquedaAvanzadaHeaderBtn>; // Array con botones para header
  headerToolbarsPos?: 'inverted' | 'hidden' | 'onlyFilters' | 'onlyButtons' | 'normal';
  cleanFiltersButton?: boolean; // Si false, se oculta el btn clean filters
}

export interface ArqDTBusquedaAvanzadaHeaderBtn {
  id: string;
  label: string;
  value?: any;
  color?: string;
  tooltip?: string;
}

export interface ArqDTBusquedaAvanzadaSavedFilter {
  idDatatableFilter?: number;
  idDatatable: string;
  nombre: string;
  isPublico?: boolean;
  propietario?: string;
  isPredeterminado?: boolean;
  columns: [{ idColumn: string; idDatatableFilter: number; isShowDefault: boolean }] | any;
  filters: ArqDTBusquedaAvanzadaFilters[];
}

export interface ArqDTBusquedaAvanzadaComboDynam {
  idColumn: string;
  idDatatable: string;
  queryParams?: { [key: string]: string };
}
