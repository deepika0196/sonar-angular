import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoRootModule } from '../../../core/transloco-root.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ArqButtonModule, ArqDatatableModule } from '../components';
import { ArqDTBANameFilterDialogComponent, ArqDTBusquedaAvanzadaComponent } from './arq-dt-busqueda-avanzada.component';
import { ArqAdvFilterDialogComponent } from './dialogs/adv-filter/adv-filter-dialog.component';
import { ArqPrefiltersDialogComponent } from './dialogs/prefilters/prefilters-dialog.component';
import * as i0 from "@angular/core";
export class ArqDTBusquedaAvanzadaModule {
}
ArqDTBusquedaAvanzadaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDTBusquedaAvanzadaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaModule, declarations: [ArqDTBusquedaAvanzadaComponent,
        ArqAdvFilterDialogComponent,
        ArqPrefiltersDialogComponent,
        ArqDTBANameFilterDialogComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslocoModule,
        TranslocoRootModule,
        ArqDatatableModule,
        ArqButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatTooltipModule,
        MatDialogModule], exports: [ArqDTBusquedaAvanzadaComponent,
        ArqAdvFilterDialogComponent,
        ArqPrefiltersDialogComponent,
        ArqDTBANameFilterDialogComponent] });
ArqDTBusquedaAvanzadaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaModule, imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslocoModule,
        TranslocoRootModule,
        ArqDatatableModule,
        ArqButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatTooltipModule,
        MatDialogModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDTBusquedaAvanzadaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ArqDTBusquedaAvanzadaComponent,
                        ArqAdvFilterDialogComponent,
                        ArqPrefiltersDialogComponent,
                        ArqDTBANameFilterDialogComponent
                    ],
                    exports: [
                        ArqDTBusquedaAvanzadaComponent,
                        ArqAdvFilterDialogComponent,
                        ArqPrefiltersDialogComponent,
                        ArqDTBANameFilterDialogComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TranslocoModule,
                        TranslocoRootModule,
                        ArqDatatableModule,
                        ArqButtonModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatTableModule,
                        MatButtonModule,
                        MatIconModule,
                        MatInputModule,
                        MatSelectModule,
                        MatMenuModule,
                        MatToolbarModule,
                        MatAutocompleteModule,
                        MatChipsModule,
                        MatTooltipModule,
                        MatDialogModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWR0LWJ1c3F1ZWRhLWF2YW56YWRhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS1kdC1idXNxdWVkYS1hdmFuemFkYS9hcnEtZHQtYnVzcXVlZGEtYXZhbnphZGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV4SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7QUF3Q2hHLE1BQU0sT0FBTywyQkFBMkI7O3dIQUEzQiwyQkFBMkI7eUhBQTNCLDJCQUEyQixpQkFwQ3BDLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLGdDQUFnQyxhQVNoQyxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBRW5CLGtCQUFrQjtRQUNsQixlQUFlO1FBRWYsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsZUFBZSxhQTNCZiw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QixnQ0FBZ0M7eUhBMkJ2QiwyQkFBMkIsWUF4QnBDLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixtQkFBbUI7UUFFbkIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFFZixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWM7UUFDZCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixlQUFlOzJGQUdOLDJCQUEyQjtrQkF0Q3ZDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLDhCQUE4Qjt3QkFDOUIsMkJBQTJCO3dCQUMzQiw0QkFBNEI7d0JBQzVCLGdDQUFnQztxQkFDakM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDhCQUE4Qjt3QkFDOUIsMkJBQTJCO3dCQUMzQiw0QkFBNEI7d0JBQzVCLGdDQUFnQztxQkFDakM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUVuQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBRWYsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIscUJBQXFCO3dCQUNyQixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDaEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFRyYW5zbG9jb01vZHVsZSB9IGZyb20gJ0BuZ25lYXQvdHJhbnNsb2NvJztcclxuaW1wb3J0IHsgVHJhbnNsb2NvUm9vdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdHJhbnNsb2NvLXJvb3QubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XHJcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcbmltcG9ydCB7IEFycUJ1dHRvbk1vZHVsZSwgQXJxRGF0YXRhYmxlTW9kdWxlLCBBcnFEYXRlcGlja2VyUmFuZ2VNb2R1bGUgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQXJxRFRCQU5hbWVGaWx0ZXJEaWFsb2dDb21wb25lbnQsIEFycURUQnVzcXVlZGFBdmFuemFkYUNvbXBvbmVudCB9IGZyb20gJy4vYXJxLWR0LWJ1c3F1ZWRhLWF2YW56YWRhLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBBcnFBZHZGaWx0ZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZ3MvYWR2LWZpbHRlci9hZHYtZmlsdGVyLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcnFQcmVmaWx0ZXJzRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2dzL3ByZWZpbHRlcnMvcHJlZmlsdGVycy1kaWFsb2cuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFDb21wb25lbnQsXHJcbiAgICBBcnFBZHZGaWx0ZXJEaWFsb2dDb21wb25lbnQsXHJcbiAgICBBcnFQcmVmaWx0ZXJzRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgQXJxRFRCQU5hbWVGaWx0ZXJEaWFsb2dDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFycURUQnVzcXVlZGFBdmFuemFkYUNvbXBvbmVudCxcclxuICAgIEFycUFkdkZpbHRlckRpYWxvZ0NvbXBvbmVudCxcclxuICAgIEFycVByZWZpbHRlcnNEaWFsb2dDb21wb25lbnQsXHJcbiAgICBBcnFEVEJBTmFtZUZpbHRlckRpYWxvZ0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgVHJhbnNsb2NvTW9kdWxlLFxyXG4gICAgVHJhbnNsb2NvUm9vdE1vZHVsZSxcclxuXHJcbiAgICBBcnFEYXRhdGFibGVNb2R1bGUsXHJcbiAgICBBcnFCdXR0b25Nb2R1bGUsXHJcblxyXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxyXG4gICAgTWF0TWVudU1vZHVsZSxcclxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXHJcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXHJcbiAgICBNYXRDaGlwc01vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFEVEJ1c3F1ZWRhQXZhbnphZGFNb2R1bGUge31cclxuIl19