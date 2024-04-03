import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArqSelectComponent } from './arq-select.component';
import { ArqFormControlErrorModule } from '../components';
import * as i0 from "@angular/core";
export class ArqSelectModule {
}
ArqSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectModule, declarations: [ArqSelectComponent], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTooltipModule,
        ArqFormControlErrorModule], exports: [ArqSelectComponent] });
ArqSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectModule, imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTooltipModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqSelectComponent],
                    exports: [ArqSelectComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        MatTooltipModule,
                        ArqFormControlErrorModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtc2VsZWN0L2FycS1zZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWUxRCxNQUFNLE9BQU8sZUFBZTs7NEdBQWYsZUFBZTs2R0FBZixlQUFlLGlCQVpYLGtCQUFrQixhQUcvQixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQix5QkFBeUIsYUFSakIsa0JBQWtCOzZHQVdqQixlQUFlLFlBVHhCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLHlCQUF5QjsyRkFHaEIsZUFBZTtrQkFiM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQzdCLE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQix5QkFBeUI7cUJBQzFCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IEFycVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vYXJxLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcnFGb3JtQ29udHJvbEVycm9yTW9kdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FycVNlbGVjdENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0FycVNlbGVjdENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIEFycUZvcm1Db250cm9sRXJyb3JNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFTZWxlY3RNb2R1bGUge31cclxuIl19