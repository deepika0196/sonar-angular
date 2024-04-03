import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ArqGenericInputModule } from '../../../core/arq-generic-input/arq-generic-input.module';
import { CommonModule } from '@angular/common';
import { ArqTextareaComponent } from './arq-textarea.component';
import { ArqFormControlErrorModule } from '../components';
import * as i0 from "@angular/core";
export class ArqTextareaModule {
}
ArqTextareaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextareaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqTextareaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqTextareaModule, declarations: [ArqTextareaComponent], imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        ArqFormControlErrorModule], exports: [ArqTextareaComponent] });
ArqTextareaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextareaModule, imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTextareaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqTextareaComponent],
                    exports: [ArqTextareaComponent],
                    imports: [
                        CommonModule,
                        ArqGenericInputModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        ArqFormControlErrorModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXRleHRhcmVhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS10ZXh0YXJlYS9hcnEtdGV4dGFyZWEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRWpHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBYTFELE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFWYixvQkFBb0IsYUFHakMsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLHlCQUF5QixhQU5qQixvQkFBb0I7K0dBU25CLGlCQUFpQixZQVAxQixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIseUJBQXlCOzJGQUdoQixpQkFBaUI7a0JBWDdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMvQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQix5QkFBeUI7cUJBQzFCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcblxyXG5pbXBvcnQgeyBBcnFHZW5lcmljSW5wdXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FycS1nZW5lcmljLWlucHV0L2FycS1nZW5lcmljLWlucHV0Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBcnFUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vYXJxLXRleHRhcmVhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFycUZvcm1Db250cm9sRXJyb3JNb2R1bGUgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQXJxVGV4dGFyZWFDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtBcnFUZXh0YXJlYUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQXJxR2VuZXJpY0lucHV0TW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgQXJxRm9ybUNvbnRyb2xFcnJvck1vZHVsZSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFUZXh0YXJlYU1vZHVsZSB7fVxyXG4iXX0=