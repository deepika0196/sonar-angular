import { Observable } from 'rxjs';
import { ArqList, ArqPageableRequest } from '../../interfaces/interfaces';
import { FormGroup } from '@angular/forms';
import { ArqDatatableComponent } from './arq-datatable.component';
import { SafeHtml } from '@angular/platform-browser';
export interface ArqDatatableConfig {
    filterType?: null | false | 'hide' | 'global' | 'column' | 'both';
    filterPlaceholder?: string;
    filterLabel?: string;
    noDataString?: string;
    footerTable?: ArqDatatableHeaderActions[];
    footerTableString?: string | SafeHtml;
    headerTable?: ArqDatatableHeaderActions[];
    headerTableString?: string | SafeHtml;
    actions?: ArqDatatableActions[];
    actionsInContextMenu?: boolean;
    actionColLabel?: string;
    newRowInActionsTH?: boolean;
    newRowInModal?: boolean;
    disablePagination?: boolean;
    disableSorting?: boolean;
    disabled?: boolean;
    pageSize?: number;
    selectColumn?: boolean;
    editCallback?: (row: any, form: FormGroup) => Observable<any> | void;
    eventRow?: (row: any) => void;
    eventNewRow?: (row: any) => void;
    prepareFormGroup?: (formGroup: FormGroup) => void;
}
export interface ArqDatatableColumnsSchema {
    key: string;
    subkey?: string;
    type?: 'text' | 'number' | 'date' | 'datetimepicker' | 'boolean' | 'select' | 'autocomplete' | 'image' | 'calc';
    label: string;
    format?: any;
    defaultValue?: any;
    data?: Array<ArqList>;
    dataFn?: Observable<Array<ArqList>>;
    dataFnReq?: (request: ArqPageableRequest, row?: any) => Observable<{
        content: ArqList[];
    }>;
    defaultSize?: number;
    isEditable?: boolean | ((row: any) => boolean);
    isCreable?: boolean;
    editInputSize?: string;
    fullObject?: boolean;
    panelWidth?: string | number | undefined;
    dependsOn?: any[];
    maxLength?: number;
    isSortable?: boolean;
    isFilterable?: boolean;
    isHidden?: boolean;
    isRequired?: boolean;
    isPk?: boolean;
    isDefaultFilter?: boolean;
    isOnlyFilter?: boolean;
    pattern?: string | RegExp;
    lang?: string;
    calculate?: (row: any) => string;
}
export interface ArqDatatableActions {
    icon?: string;
    label?: string;
    tooltip: string;
    color?: string;
    action: (row: any) => Observable<any> | void;
    inline?: boolean;
    displayCondition?: (row: any) => boolean;
    displayWhenDisabled?: boolean;
}
export interface ArqDatatableHeaderActions {
    label: string;
    action: (dataTable?: ArqDatatableComponent) => void;
    color?: string;
    icon?: string;
    tooltip?: string;
}
export interface ArqDatatableSelectEvent {
    selected: Array<any>;
    lastSelection: any;
}
