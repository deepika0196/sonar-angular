import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ArqBaseComponent, ArqDatatableComponent } from '../../../../public-api';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "../arq-datatable/arq-datatable.component";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/material/core";
export class ArqDatatableMantenimientoComponent extends ArqBaseComponent {
    constructor(_changeDetector, fb) {
        super();
        this._changeDetector = _changeDetector;
        this.fb = fb;
        this.tableConfig = {};
        this.loadDataEvent$ = new EventEmitter();
        this.dataRequest = { page: 0, size: this.tableConfig.pageSize || 5 };
        this.tableLoaded = false;
    }
    ngOnInit() {
        this.$tableList.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
            this.tableList = res;
            this.selectedTable = res[0];
            this.generateForm();
            this.tableLoaded = true;
        });
        this.tableConfig?.actions?.forEach((element) => {
            if (element.inline) {
                element.action = this.action();
            }
        });
    }
    changeTable(_table) {
        this.tableLoaded = false;
        this.editing = false;
        this.selectedTable = this.tableList.find(_ => _.value === _table);
        this.generateForm();
        setTimeout(() => {
            this.tableLoaded = true;
            // Al ejecutar el change detector se provoca el loadData en el datatable
            this._changeDetector.detectChanges();
            if (this._selectedTableChange) {
                this._selectedTableChange(_table);
            }
        }, 1);
    }
    requireData(request) {
        this.loadDataEvent$.emit({ request, table: this.selectedTable?.value || '' });
    }
    action() {
        return (row) => {
            row.isEdit = !row.isEdit;
            for (const key in row) {
                if (Object.prototype.hasOwnProperty.call(row, key)) {
                    this.fGroup?.controls[key]?.setValue(row[key]);
                }
            }
            this.editing = true;
            row.newRow = false;
        };
    }
    generateForm() {
        this.fGroup = new FormGroup({});
        this.selectedTable?.columnsSchema.forEach(fg => {
            this.fGroup.addControl(fg.key, new FormControl(''));
        });
        if (this.datatable) {
            //TODO: Si cambian fg y fgCopy a privado se produce un error.
            this.datatable.fg = this.fGroup;
            this.datatable.fgCopy = this.fGroup;
        }
    }
    loadDataMantFn() {
        let loadDataMantFnInherited = this._loadDataMantFn;
        let table = this.selectedTable?.value;
        return (request) => {
            return loadDataMantFnInherited(request, table);
        };
    }
}
ArqDatatableMantenimientoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableMantenimientoComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
ArqDatatableMantenimientoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqDatatableMantenimientoComponent, selector: "arq-datatable-mantenimiento", inputs: { $tableList: ["tableList", "$tableList"], tableConfig: "tableConfig", _selectedTableChange: ["selectedTableChange", "_selectedTableChange"], _loadDataMantFn: ["loadDataMantFn", "_loadDataMantFn"] }, outputs: { loadDataEvent$: "loadDataEvent" }, viewQueries: [{ propertyName: "datatable", first: true, predicate: ArqDatatableComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<div *ngIf=\"tableList\">\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-label>Select table</mat-label>\r\n    <mat-select placeholder=\"Select table\" (selectionChange)=\"changeTable($event.value)\" [value]=\"selectedTable?.value\">\r\n      <mat-option *ngFor=\"let table of tableList\" [value]=\"table.value\">\r\n        {{ table.description }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <arq-datatable\r\n    *ngIf=\"selectedTable && tableLoaded\"\r\n    [loadDataMantFn]=\"loadDataMantFn()\"\r\n    [columnsSchema]=\"selectedTable.columnsSchema\"\r\n    [tableConfig]=\"tableConfig\"\r\n    [isEditing]=\"editing\"\r\n    [form]=\"fGroup\">\r\n  </arq-datatable>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.ArqDatatableComponent, selector: "arq-datatable", inputs: ["columnsSchema", "tableConfig", "loadedData", "loadDataFn", "refreshData", "form", "isEditing", "itemsPerPageLabel", "nextPageLabel", "firstPageLabel", "lastPageLabel", "previousPageLabel", "range", "loadDataMantFn"], outputs: ["loadDataEvent", "selectEvent"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "component", type: i5.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableMantenimientoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-datatable-mantenimiento', encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"tableList\">\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-label>Select table</mat-label>\r\n    <mat-select placeholder=\"Select table\" (selectionChange)=\"changeTable($event.value)\" [value]=\"selectedTable?.value\">\r\n      <mat-option *ngFor=\"let table of tableList\" [value]=\"table.value\">\r\n        {{ table.description }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <arq-datatable\r\n    *ngIf=\"selectedTable && tableLoaded\"\r\n    [loadDataMantFn]=\"loadDataMantFn()\"\r\n    [columnsSchema]=\"selectedTable.columnsSchema\"\r\n    [tableConfig]=\"tableConfig\"\r\n    [isEditing]=\"editing\"\r\n    [form]=\"fGroup\">\r\n  </arq-datatable>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.FormBuilder }]; }, propDecorators: { $tableList: [{
                type: Input,
                args: ['tableList']
            }], tableConfig: [{
                type: Input
            }], _selectedTableChange: [{
                type: Input,
                args: ['selectedTableChange']
            }], _loadDataMantFn: [{
                type: Input,
                args: ['loadDataMantFn']
            }], loadDataEvent$: [{
                type: Output,
                args: ['loadDataEvent']
            }], datatable: [{
                type: ViewChild,
                args: [ArqDatatableComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWRhdGF0YWJsZS1tYW50ZW5pbWllbnRvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS1kYXRhdGFibGUtbWFudGVuaW1pZW50by9hcnEtZGF0YXRhYmxlLW1hbnRlbmltaWVudG8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWRhdGF0YWJsZS1tYW50ZW5pbWllbnRvL2FycS1kYXRhdGFibGUtbWFudGVuaW1pZW50by5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU3QyxPQUFPLEVBS0wsZ0JBQWdCLEVBRWhCLHFCQUFxQixFQUN0QixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBZSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBUXJFLE1BQU0sT0FBTyxrQ0FBbUMsU0FBUSxnQkFBZ0I7SUF1QnRFLFlBQTJCLGVBQWtDLEVBQVUsRUFBZTtRQUNwRixLQUFLLEVBQUUsQ0FBQztRQURpQixvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBckJ0RSxnQkFBVyxHQUF1QixFQUFFLENBQUM7UUFRckIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBa0QsQ0FBQztRQUk3RyxnQkFBVyxHQUF1QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLENBQUMs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UyxFQUFFO1lBQ2xCLDZEQUE2RDtZQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRU0sY0FBYztRQUNuQixJQUFJLHVCQUF1QixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDbkQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7UUFDdEMsT0FBTyxDQUFDLE9BQTJCLEVBQW1DLEVBQUU7WUFDdEUsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7K0hBOUZVLGtDQUFrQzttSEFBbEMsa0NBQWtDLDRXQVlsQyxxQkFBcUIsdUVDekNsQyxvdEJBbUJBOzJGRFVhLGtDQUFrQztrQkFOOUMsU0FBUzsrQkFDRSw2QkFBNkIsaUJBR3hCLGlCQUFpQixDQUFDLElBQUk7a0lBR1YsVUFBVTtzQkFBcEMsS0FBSzt1QkFBQyxXQUFXO2dCQUNGLFdBQVc7c0JBQTFCLEtBQUs7Z0JBQytCLG9CQUFvQjtzQkFBeEQsS0FBSzt1QkFBQyxxQkFBcUI7Z0JBRUksZUFBZTtzQkFBOUMsS0FBSzt1QkFBQyxnQkFBZ0I7Z0JBS1MsY0FBYztzQkFBN0MsTUFBTTt1QkFBQyxlQUFlO2dCQUVrQixTQUFTO3NCQUFqRCxTQUFTO3VCQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQXJxUGFnZWFibGVSZXF1ZXN0LFxyXG4gIEFycVBhZ2VhYmxlUmVzcG9uc2UsXHJcbiAgQXJxRGF0YXRhYmxlQ29uZmlnLFxyXG4gIEFycURhdGF0YWJsZU1hbnRlbmltaWVudG9UYWJsZSxcclxuICBBcnFCYXNlQ29tcG9uZW50LFxyXG4gIEFycURhdGF0YWJsZUFjdGlvbnMsXHJcbiAgQXJxRGF0YXRhYmxlQ29tcG9uZW50XHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljLWFwaSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcnEtZGF0YXRhYmxlLW1hbnRlbmltaWVudG8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnEtZGF0YXRhYmxlLW1hbnRlbmltaWVudG8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FycS1kYXRhdGFibGUtbWFudGVuaW1pZW50by5jb21wb25lbnQuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJxRGF0YXRhYmxlTWFudGVuaW1pZW50b0NvbXBvbmVudCBleHRlbmRzIEFycUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgndGFibGVMaXN0JykgcHVibGljICR0YWJsZUxpc3QhOiBPYnNlcnZhYmxlPEFycURhdGF0YWJsZU1hbnRlbmltaWVudG9UYWJsZVtdPjtcclxuICBASW5wdXQoKSBwdWJsaWMgdGFibGVDb25maWc6IEFycURhdGF0YWJsZUNvbmZpZyA9IHt9O1xyXG4gIEBJbnB1dCgnc2VsZWN0ZWRUYWJsZUNoYW5nZScpIHB1YmxpYyBfc2VsZWN0ZWRUYWJsZUNoYW5nZSE6IChfdGFibGU6IHN0cmluZykgPT4gYW55O1xyXG5cclxuICBASW5wdXQoJ2xvYWREYXRhTWFudEZuJykgcHVibGljIF9sb2FkRGF0YU1hbnRGbiE6IChcclxuICAgIHJlcXVlc3Q6IEFycVBhZ2VhYmxlUmVxdWVzdCxcclxuICAgIHRhYmxlPzogc3RyaW5nXHJcbiAgKSA9PiBPYnNlcnZhYmxlPEFycVBhZ2VhYmxlUmVzcG9uc2U+O1xyXG5cclxuICBAT3V0cHV0KCdsb2FkRGF0YUV2ZW50JykgcHVibGljIGxvYWREYXRhRXZlbnQkID0gbmV3IEV2ZW50RW1pdHRlcjx7IHJlcXVlc3Q6IEFycVBhZ2VhYmxlUmVxdWVzdDsgdGFibGU6IHN0cmluZyB9PigpO1xyXG5cclxuICBAVmlld0NoaWxkKEFycURhdGF0YWJsZUNvbXBvbmVudCkgcHVibGljIGRhdGF0YWJsZSE6IEFycURhdGF0YWJsZUNvbXBvbmVudDtcclxuXHJcbiAgcHVibGljIGRhdGFSZXF1ZXN0OiBBcnFQYWdlYWJsZVJlcXVlc3QgPSB7IHBhZ2U6IDAsIHNpemU6IHRoaXMudGFibGVDb25maWcucGFnZVNpemUgfHwgNSB9O1xyXG5cclxuICBwdWJsaWMgc2VsZWN0ZWRUYWJsZSE6IEFycURhdGF0YWJsZU1hbnRlbmltaWVudG9UYWJsZSB8IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgdGFibGVMaXN0ITogQXJxRGF0YXRhYmxlTWFudGVuaW1pZW50b1RhYmxlW107XHJcbiAgcHVibGljIHRhYmxlTG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBmR3JvdXAhOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIGVkaXRpbmchOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuJHRhYmxlTGlzdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLnRhYmxlTGlzdCA9IHJlcztcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYmxlID0gcmVzWzBdO1xyXG4gICAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xyXG5cclxuICAgICAgdGhpcy50YWJsZUxvYWRlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRhYmxlQ29uZmlnPy5hY3Rpb25zPy5mb3JFYWNoKChlbGVtZW50OiBBcnFEYXRhdGFibGVBY3Rpb25zKSA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50LmlubGluZSkge1xyXG4gICAgICAgIGVsZW1lbnQuYWN0aW9uID0gdGhpcy5hY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlVGFibGUoX3RhYmxlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGFibGVMb2FkZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWxlY3RlZFRhYmxlID0gdGhpcy50YWJsZUxpc3QuZmluZChfID0+IF8udmFsdWUgPT09IF90YWJsZSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlRm9ybSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudGFibGVMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAvLyBBbCBlamVjdXRhciBlbCBjaGFuZ2UgZGV0ZWN0b3Igc2UgcHJvdm9jYSBlbCBsb2FkRGF0YSBlbiBlbCBkYXRhdGFibGVcclxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUYWJsZUNoYW5nZSkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVGFibGVDaGFuZ2UoX3RhYmxlKTtcclxuICAgICAgfVxyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVxdWlyZURhdGEocmVxdWVzdDogQXJxUGFnZWFibGVSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWREYXRhRXZlbnQkLmVtaXQoeyByZXF1ZXN0LCB0YWJsZTogdGhpcy5zZWxlY3RlZFRhYmxlPy52YWx1ZSB8fCAnJyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKHJvdzogYW55KTogYW55ID0+IHtcclxuICAgICAgcm93LmlzRWRpdCA9ICFyb3cuaXNFZGl0O1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiByb3cpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJvdywga2V5KSkge1xyXG4gICAgICAgICAgdGhpcy5mR3JvdXA/LmNvbnRyb2xzW2tleV0/LnNldFZhbHVlKHJvd1trZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcclxuICAgICAgcm93Lm5ld1JvdyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZUZvcm0oKSB7XHJcbiAgICB0aGlzLmZHcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xyXG4gICAgdGhpcy5zZWxlY3RlZFRhYmxlPy5jb2x1bW5zU2NoZW1hLmZvckVhY2goZmcgPT4ge1xyXG4gICAgICB0aGlzLmZHcm91cC5hZGRDb250cm9sKGZnLmtleSwgbmV3IEZvcm1Db250cm9sKCcnKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5kYXRhdGFibGUpIHtcclxuICAgICAgLy9UT0RPOiBTaSBjYW1iaWFuIGZnIHkgZmdDb3B5IGEgcHJpdmFkbyBzZSBwcm9kdWNlIHVuIGVycm9yLlxyXG4gICAgICB0aGlzLmRhdGF0YWJsZS5mZyA9IHRoaXMuZkdyb3VwO1xyXG4gICAgICB0aGlzLmRhdGF0YWJsZS5mZ0NvcHkgPSB0aGlzLmZHcm91cDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkRGF0YU1hbnRGbigpIHtcclxuICAgIGxldCBsb2FkRGF0YU1hbnRGbkluaGVyaXRlZCA9IHRoaXMuX2xvYWREYXRhTWFudEZuO1xyXG4gICAgbGV0IHRhYmxlID0gdGhpcy5zZWxlY3RlZFRhYmxlPy52YWx1ZTtcclxuICAgIHJldHVybiAocmVxdWVzdDogQXJxUGFnZWFibGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxBcnFQYWdlYWJsZVJlc3BvbnNlPiA9PiB7XHJcbiAgICAgIHJldHVybiBsb2FkRGF0YU1hbnRGbkluaGVyaXRlZChyZXF1ZXN0LCB0YWJsZSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwidGFibGVMaXN0XCI+XHJcbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XHJcbiAgICA8bWF0LWxhYmVsPlNlbGVjdCB0YWJsZTwvbWF0LWxhYmVsPlxyXG4gICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY3QgdGFibGVcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cImNoYW5nZVRhYmxlKCRldmVudC52YWx1ZSlcIiBbdmFsdWVdPVwic2VsZWN0ZWRUYWJsZT8udmFsdWVcIj5cclxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHRhYmxlIG9mIHRhYmxlTGlzdFwiIFt2YWx1ZV09XCJ0YWJsZS52YWx1ZVwiPlxyXG4gICAgICAgIHt7IHRhYmxlLmRlc2NyaXB0aW9uIH19XHJcbiAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgIDwvbWF0LXNlbGVjdD5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICA8YXJxLWRhdGF0YWJsZVxyXG4gICAgKm5nSWY9XCJzZWxlY3RlZFRhYmxlICYmIHRhYmxlTG9hZGVkXCJcclxuICAgIFtsb2FkRGF0YU1hbnRGbl09XCJsb2FkRGF0YU1hbnRGbigpXCJcclxuICAgIFtjb2x1bW5zU2NoZW1hXT1cInNlbGVjdGVkVGFibGUuY29sdW1uc1NjaGVtYVwiXHJcbiAgICBbdGFibGVDb25maWddPVwidGFibGVDb25maWdcIlxyXG4gICAgW2lzRWRpdGluZ109XCJlZGl0aW5nXCJcclxuICAgIFtmb3JtXT1cImZHcm91cFwiPlxyXG4gIDwvYXJxLWRhdGF0YWJsZT5cclxuPC9kaXY+XHJcbiJdfQ==