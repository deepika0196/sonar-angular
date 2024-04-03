import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoRootModule } from '../../../core/transloco-root.module';
import { ArqButtonModule } from '../components';
import { ArqDialogComponent } from './arq-dialog.component';
import { ArqPromptDialogComponent } from './dialogs/arq-dialog-prompt.component';
import { MatInputModule } from '@angular/material/input';
import * as i0 from "@angular/core";
export class ArqDialogModule {
}
ArqDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogModule, declarations: [ArqDialogComponent, ArqPromptDialogComponent], imports: [CommonModule,
        FormsModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        ArqButtonModule,
        TranslocoModule,
        TranslocoRootModule], exports: [ArqDialogComponent, ArqPromptDialogComponent] });
ArqDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogModule, imports: [CommonModule,
        FormsModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        ArqButtonModule,
        TranslocoModule,
        TranslocoRootModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatInputModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatIconModule,
                        MatFormFieldModule,
                        ArqButtonModule,
                        TranslocoModule,
                        TranslocoRootModule
                    ],
                    declarations: [ArqDialogComponent, ArqPromptDialogComponent],
                    exports: [ArqDialogComponent, ArqPromptDialogComponent],
                    entryComponents: [ArqDialogComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtZGlhbG9nL2FycS1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBc0J6RCxNQUFNLE9BQU8sZUFBZTs7NEdBQWYsZUFBZTs2R0FBZixlQUFlLGlCQUpYLGtCQUFrQixFQUFFLHdCQUF3QixhQWR6RCxZQUFZO1FBQ1osV0FBVztRQUVYLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLGFBQWE7UUFDYixrQkFBa0I7UUFFbEIsZUFBZTtRQUVmLGVBQWU7UUFDZixtQkFBbUIsYUFHWCxrQkFBa0IsRUFBRSx3QkFBd0I7NkdBRzNDLGVBQWUsWUFsQnhCLFlBQVk7UUFDWixXQUFXO1FBRVgsY0FBYztRQUNkLGVBQWU7UUFDZixlQUFlO1FBQ2YsYUFBYTtRQUNiLGtCQUFrQjtRQUVsQixlQUFlO1FBRWYsZUFBZTtRQUNmLG1CQUFtQjsyRkFNVixlQUFlO2tCQXBCM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUVYLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUVsQixlQUFlO3dCQUVmLGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx3QkFBd0IsQ0FBQztvQkFDNUQsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsd0JBQXdCLENBQUM7b0JBQ3ZELGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNsb2NvTW9kdWxlIH0gZnJvbSAnQG5nbmVhdC90cmFuc2xvY28nO1xyXG5pbXBvcnQgeyBUcmFuc2xvY29Sb290TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS90cmFuc2xvY28tcm9vdC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgQXJxQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBBcnFEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2FycS1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJxUHJvbXB0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2dzL2FycS1kaWFsb2ctcHJvbXB0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcblxyXG4gICAgQXJxQnV0dG9uTW9kdWxlLFxyXG5cclxuICAgIFRyYW5zbG9jb01vZHVsZSxcclxuICAgIFRyYW5zbG9jb1Jvb3RNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FycURpYWxvZ0NvbXBvbmVudCwgQXJxUHJvbXB0RGlhbG9nQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQXJxRGlhbG9nQ29tcG9uZW50LCBBcnFQcm9tcHREaWFsb2dDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0FycURpYWxvZ0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFycURpYWxvZ01vZHVsZSB7fVxyXG4iXX0=