import { MatDialogRef } from '@angular/material/dialog';
import { ArqDatatableColumnsSchema } from '../../../arq-datatable/arq-datatable.interface';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ArqPrefiltersDialogComponent {
    dialogRef: MatDialogRef<ArqPrefiltersDialogComponent>;
    data: {
        idDatatable: string;
        prefilters: ArqDatatableColumnsSchema[];
        refreshComboFn: Function;
    };
    idDatatable: string;
    prefilters: ArqDatatableColumnsSchema[];
    formGroup: FormGroup;
    refreshComboFn: Function;
    constructor(dialogRef: MatDialogRef<ArqPrefiltersDialogComponent>, data: {
        idDatatable: string;
        prefilters: ArqDatatableColumnsSchema[];
        refreshComboFn: Function;
    });
    fixedCol: (colId: string) => ArqDatatableColumnsSchema[];
    displayFn(option: any): string;
    doFilter(evt: any, column: ArqDatatableColumnsSchema): void;
    optionSelected(column: ArqDatatableColumnsSchema): void;
    private filter;
    private checkDependent;
    private refrescarCombo;
    private getValue;
    onSubmit(): void;
    private checkAutocompleteValue;
    private refreshClientValidations;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqPrefiltersDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqPrefiltersDialogComponent, "arq-prefilters-dialog", never, {}, {}, never, never, false, never>;
}
