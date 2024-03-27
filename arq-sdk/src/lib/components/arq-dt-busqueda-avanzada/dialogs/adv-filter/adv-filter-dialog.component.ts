import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, of } from 'rxjs';

import { ArqDatatableColumnsSchema } from '../../../arq-datatable/arq-datatable.interface';
import { ArqList } from './../../../../interfaces/arq-list.interface';

@Component({
  selector: 'arq-adv-filter-dialog',
  templateUrl: 'adv-filter-dialog.component.html',
  styleUrls: ['adv-filter-dialog.component.scss']
})
export class ArqAdvFilterDialogComponent {
  public filter: { type: any; data: Array<string | ArqList> } = { type: null, data: [] };
  public filterData?: string | ArqList;

  public filterTypes: any = FILTER_TYPES['text'];

  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  @ViewChild('chipInput') public chipInput?: ElementRef<HTMLInputElement>;

  public constructor(
    public dialogRef: MatDialogRef<ArqAdvFilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.selectedCol) this.colChanged(data.selectedCol);
  }

  public colChanged(col: any): void {
    this.filterTypes = FILTER_TYPES[col.type];
    if (col.type === 'autocomplete') {
      col.dataFn = of(col.data);
    }
  }

  public generateFilter(): {
    column: ArqDatatableColumnsSchema | null;
    data: Array<string>;
    type: string;
  } {
    let _type: string = this.filter.type;
    let _data: any[] = this.filter.data;

    if (['null', 'notnull'].includes(this.filter.type)) {
      _type = 'informed';
      _data = this.filter.type === 'null' ? ['false'] : ['true'];
    }

    if (this.filter.type === 'autocompletemultiple') {
      _data = this.filter.data.map(data => (data as any).value);
    }

    return {
      column: this.data.selectedCol,
      type: _type,
      data: _data
    };
  }

  public addTx(event: any): void {
    if (event.value) this.filter.data.push(event.value.trim());
    event.chipInput!.clear();
  }

  public removeTx(tx: any): void {
    const index = this.filter.data.indexOf(tx);
    if (index >= 0) this.filter.data.splice(index, 1);
  }

  public doFilter(): void {
    if (!this.filterData) return;
    if (this.filterData.hasOwnProperty('value')) {
      this.filter.data.push(this.filterData);
      this.filterData = '';
      this.chipInput!.nativeElement.value = '';
    }
    this.data.selectedCol.dataFn = this.data.selectedCol.dataFn!.pipe(
      map((val: ArqList[]) => this.filterVal(val, this.filterData!))
    );
  }

  private filterVal(val: ArqList[], data: string | ArqList): ArqList[] {
    if (!val) return [];
    return val.filter(
      item =>
        item.description.toLowerCase().includes(this.getValue(data).toLowerCase()) && !this.filter.data.includes(item)
    );
  }

  private getValue(data: string | ArqList): string {
    return typeof data === 'string' ? data : data.value;
  }
}

const FILTER_TYPES: any = {
  text: [
    ['notnull', 'Informado'],
    ['null', 'No informado'],
    ['textmultiple', 'Multiple']
  ],
  number: [
    ['notnull', 'Informado'],
    ['null', 'No informado'],
    ['numberrange', 'Rango']
  ],
  date: [
    ['notnull', 'Informado'],
    ['null', 'No informado'],
    ['daterange', 'Rango']
  ],
  datetimepicker: [
    ['notnull', 'Informado'],
    ['null', 'No informado']
  ],
  boolean: [
    ['notnull', 'Informado'],
    ['null', 'No informado']
  ],
  select: [
    ['notnull', 'Informado'],
    ['null', 'No informado'],
    ['selectmultiple', 'Multiple']
  ],
  autocomplete: [
    ['notnull', 'Informado'],
    ['null', 'No informado'],
    ['autocompletemultiple', 'Multiple']
  ],
  image: [
    ['notnull', 'Informado'],
    ['null', 'No informado']
  ]
};
