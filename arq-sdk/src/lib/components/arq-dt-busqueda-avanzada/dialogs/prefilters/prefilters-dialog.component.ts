import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { map, of } from 'rxjs';

import { ArqDatatableColumnsSchema } from '../../../arq-datatable/arq-datatable.interface';
import { ArqDTBusquedaAvanzadaComboDynam } from '../../arq-dt-busqueda-avanzada.interface';
import { ArqList } from '../../../../interfaces/arq-list.interface';

@Component({
  selector: 'arq-prefilters-dialog',
  templateUrl: 'prefilters-dialog.component.html',
  styleUrls: ['prefilters-dialog.component.scss']
})
export class ArqPrefiltersDialogComponent {
  public idDatatable: string = this.data.idDatatable || '';
  public prefilters: ArqDatatableColumnsSchema[] = this.data.prefilters || [];
  public addFilterForm: { data: Array<string>; column: ArqDatatableColumnsSchema | null }[] = [];
  public refreshComboFn: Function = this.data.refreshComboFn || function (): void {};

  public constructor(
    public dialogRef: MatDialogRef<ArqPrefiltersDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      idDatatable: string;
      prefilters: ArqDatatableColumnsSchema[];
      refreshComboFn: Function;
    }
  ) {
    this.prefilters.forEach((prefilter: ArqDatatableColumnsSchema) => {
      if (prefilter.type === 'autocomplete') prefilter.dataFn = of(prefilter.data!);
      this.addFilterForm.push({ data: [''], column: prefilter });
    });
  }

  public fixedCol = (colId: string): ArqDatatableColumnsSchema[] =>
    this.prefilters.filter((prefilter: ArqDatatableColumnsSchema) => prefilter.key === colId) || this.prefilters[0];

  public displayFn(option: any): string {
    return option?.description || '';
  }

  public doFilter(filter: { data: any; column: ArqDatatableColumnsSchema | null }): void {
    if (filter.column?.type === 'select' || filter.data[0].hasOwnProperty('value')) {
      this.checkDependent(filter);
    } else {
      filter.column!.dataFn = filter.column!.dataFn!.pipe(map(val => this.filter(val, this.getValue(filter.data[0]))));
    }
  }

  private filter(val: ArqList[], data: any): ArqList[] {
    if (!val) return [];
    return val.filter(item => item.description.toLowerCase().includes(this.getValue(data).toLowerCase()));
  }

  private checkDependent(filter: { data: any; column: ArqDatatableColumnsSchema | null }): void {
    const dependentCols: ArqDatatableColumnsSchema[] = this.prefilters.filter(
      prefilter => prefilter.dependsOn && prefilter.dependsOn[0] === filter.column!.key
    );
    dependentCols.forEach(col => {
      const columnSchema = this.prefilters.find(colSchema => colSchema.key === col.key);
      if (!columnSchema) return;
      const filterForm: { data: Array<any>; column: ArqDatatableColumnsSchema | null } | undefined =
        this.addFilterForm.find(filter => filter.column?.key === columnSchema.key);
      if (filterForm) filterForm.data[0] = null;
      this.refrescarCombo(
        {
          idColumn: col.key,
          idDatatable: this.idDatatable,
          queryParams: { [filter.column!.key]: this.getValue(filter.data[0]) }
        },
        columnSchema
      );
    });
  }

  private refrescarCombo(
    filterComboDynam: ArqDTBusquedaAvanzadaComboDynam,
    columnSchema: ArqDatatableColumnsSchema
  ): void {
    this.refreshComboFn(filterComboDynam).subscribe((data: ArqList[]) => {
      switch (columnSchema?.type?.toLowerCase()) {
        case 'select':
        case 'image':
          columnSchema!.data = data;
          break;
        case 'autocomplete':
          columnSchema!.data = data;
          columnSchema!.dataFn = of(data);
          break;
      }
    });
  }

  private getValue(data: any): string {
    return data.value || data;
  }
}
