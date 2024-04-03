import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ArqAutocompleteModule, ArqButtonModule, ArqCheckboxBasicModule, ArqContextMenuModule, ArqDateTimepickerModule, ArqDatepickerModule, ArqInputNumberModule, ArqSelectModule, ArqTextInputModule } from '../components';
import { ArqDatatableComponent } from './arq-datatable.component';
import * as i0 from "@angular/core";
export class ArqDatatableModule {
}
ArqDatatableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDatatableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableModule, declarations: [ArqDatatableComponent], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ArqButtonModule,
        ArqContextMenuModule,
        ArqDatepickerModule,
        ArqTextInputModule,
        ArqCheckboxBasicModule,
        ArqSelectModule,
        ArqAutocompleteModule,
        ArqDateTimepickerModule,
        ArqInputNumberModule,
        MatTableModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatInputModule,
        MatNativeDateModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatSortModule,
        MatButtonModule], exports: [ArqDatatableComponent] });
ArqDatatableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableModule, providers: [MatDialogModule, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} }], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ArqButtonModule,
        ArqContextMenuModule,
        ArqDatepickerModule,
        ArqTextInputModule,
        ArqCheckboxBasicModule,
        ArqSelectModule,
        ArqAutocompleteModule,
        ArqDateTimepickerModule,
        ArqInputNumberModule,
        MatTableModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatInputModule,
        MatNativeDateModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatSortModule,
        MatButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatatableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqDatatableComponent],
                    exports: [ArqDatatableComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        ArqButtonModule,
                        ArqContextMenuModule,
                        ArqDatepickerModule,
                        ArqTextInputModule,
                        ArqCheckboxBasicModule,
                        ArqSelectModule,
                        ArqAutocompleteModule,
                        ArqDateTimepickerModule,
                        ArqInputNumberModule,
                        MatTableModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatFormFieldModule,
                        MatDatepickerModule,
                        MatCardModule,
                        MatSelectModule,
                        MatProgressSpinnerModule,
                        MatPaginatorModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatTooltipModule,
                        MatAutocompleteModule,
                        MatSortModule,
                        MatButtonModule
                    ],
                    providers: [MatDialogModule, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} }]
                    // entryComponents: [DialogContent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWRhdGF0YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtZGF0YXRhYmxlL2FycS1kYXRhdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2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bUM7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcblxyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBNYXRTb3J0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcblxyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQXJxQXV0b2NvbXBsZXRlTW9kdWxlLFxyXG4gIEFycUJ1dHRvbk1vZHVsZSxcclxuICBBcnFDaGVja2JveEJhc2ljTW9kdWxlLFxyXG4gIEFycUNvbnRleHRNZW51TW9kdWxlLFxyXG4gIEFycURhdGVUaW1lcGlja2VyTW9kdWxlLFxyXG4gIEFycURhdGVwaWNrZXJNb2R1bGUsXHJcbiAgQXJxSW5wdXROdW1iZXJNb2R1bGUsXHJcbiAgQXJxU2VsZWN0TW9kdWxlLFxyXG4gIEFycVRleHRJbnB1dE1vZHVsZVxyXG59IGZyb20gJy4uL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBBcnFEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICcuL2FycS1kYXRhdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQXJxRGF0YXRhYmxlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQXJxRGF0YXRhYmxlQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcblxyXG4gICAgQXJxQnV0dG9uTW9kdWxlLFxyXG4gICAgQXJxQ29udGV4dE1lbnVNb2R1bGUsXHJcbiAgICBBcnFEYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgQXJxVGV4dElucHV0TW9kdWxlLFxyXG4gICAgQXJxQ2hlY2tib3hCYXNpY01vZHVsZSxcclxuICAgIEFycVNlbGVjdE1vZHVsZSxcclxuICAgIEFycUF1dG9jb21wbGV0ZU1vZHVsZSxcclxuICAgIEFycURhdGVUaW1lcGlja2VyTW9kdWxlLFxyXG4gICAgQXJxSW5wdXROdW1iZXJNb2R1bGUsXHJcblxyXG4gICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgTWF0Q2FyZE1vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXHJcbiAgICBNYXRTb3J0TW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtNYXREaWFsb2dNb2R1bGUsIHsgcHJvdmlkZTogTUFUX0RJQUxPR19EQVRBLCB1c2VWYWx1ZToge30gfSwgeyBwcm92aWRlOiBNYXREaWFsb2dSZWYsIHVzZVZhbHVlOiB7fSB9XVxyXG4gIC8vIGVudHJ5Q29tcG9uZW50czogW0RpYWxvZ0NvbnRlbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFEYXRhdGFibGVNb2R1bGUge31cclxuIl19