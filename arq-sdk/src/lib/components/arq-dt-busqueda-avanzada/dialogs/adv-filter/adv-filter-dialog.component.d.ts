import { ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ArqDatatableColumnsSchema } from '../../../arq-datatable/arq-datatable.interface';
import { ArqList } from './../../../../interfaces/arq-list.interface';
import * as i0 from "@angular/core";
export declare class ArqAdvFilterDialogComponent {
    dialogRef: MatDialogRef<ArqAdvFilterDialogComponent>;
    data: any;
    filter: {
        type: any;
        data: Array<string | ArqList>;
    };
    filterData?: string | ArqList;
    filterTypes: any;
    readonly separatorKeysCodes: readonly [13, 188];
    chipInput?: ElementRef<HTMLInputElement>;
    constructor(dialogRef: MatDialogRef<ArqAdvFilterDialogComponent>, data: any);
    colChanged(col: any): void;
    generateFilter(): {
        column: ArqDatatableColumnsSchema | null;
        data: Array<string>;
        type: string;
    };
    addTx(event: any): void;
    removeTx(tx: any): void;
    doFilter(): void;
    private filterVal;
    private getValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqAdvFilterDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqAdvFilterDialogComponent, "arq-adv-filter-dialog", never, {}, {}, never, never, false, never>;
}
