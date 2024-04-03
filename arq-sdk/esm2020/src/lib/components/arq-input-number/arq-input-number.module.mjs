import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ArqGenericInputModule } from '../../../core/arq-generic-input/arq-generic-input.module';
import { ArqInputNumberComponent } from './arq-input-number.component';
import { ArqFormControlErrorModule } from '../components';
import * as i0 from "@angular/core";
export class ArqInputNumberModule {
}
ArqInputNumberModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputNumberModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqInputNumberModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqInputNumberModule, declarations: [ArqInputNumberComponent], imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        ArqFormControlErrorModule], exports: [ArqInputNumberComponent] });
ArqInputNumberModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputNumberModule, imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputNumberModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqInputNumberComponent],
                    exports: [ArqInputNumberComponent],
                    imports: [
                        CommonModule,
                        ArqGenericInputModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        ArqFormControlErrorModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWlucHV0LW51bWJlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtaW5wdXQtbnVtYmVyL2FycS1pbnB1dC1udW1iZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFakcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWMxRCxNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBWGhCLHVCQUF1QixhQUdwQyxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHlCQUF5QixhQVBqQix1QkFBdUI7a0hBVXRCLG9CQUFvQixZQVI3QixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHlCQUF5QjsyRkFHaEIsb0JBQW9CO2tCQVpoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDbEMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYix5QkFBeUI7cUJBQzFCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuXHJcbmltcG9ydCB7IEFycUdlbmVyaWNJbnB1dE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXJxLWdlbmVyaWMtaW5wdXQvYXJxLWdlbmVyaWMtaW5wdXQubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEFycUlucHV0TnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcnEtaW5wdXQtbnVtYmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFycUZvcm1Db250cm9sRXJyb3JNb2R1bGUgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQXJxSW5wdXROdW1iZXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtBcnFJbnB1dE51bWJlckNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQXJxR2VuZXJpY0lucHV0TW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIEFycUZvcm1Db250cm9sRXJyb3JNb2R1bGUsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJxSW5wdXROdW1iZXJNb2R1bGUge31cclxuIl19