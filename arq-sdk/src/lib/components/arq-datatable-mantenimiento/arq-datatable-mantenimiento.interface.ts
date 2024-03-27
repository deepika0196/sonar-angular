import { ArqDatatableColumnsSchema } from '../components';

export interface ArqDatatableMantenimientoTable {
  description: string;
  value: string;
  controller: { nombre: string; controller: string; metodo: string };
  columnsSchema: ArqDatatableColumnsSchema[];
}
