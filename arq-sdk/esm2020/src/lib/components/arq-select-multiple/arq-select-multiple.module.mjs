import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { ArqSelectMultipleComponent } from './arq-select-multiple.component';
import { ArqFormControlErrorModule } from '../components';
import * as i0 from "@angular/core";
export class ArqSelectMultipleModule {
}
ArqSelectMultipleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectMultipleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqSelectMultipleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectMultipleModule, declarations: [ArqSelectMultipleComponent], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MtxSelectModule,
        ArqFormControlErrorModule], exports: [ArqSelectMultipleComponent] });
ArqSelectMultipleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectMultipleModule, imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MtxSelectModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSelectMultipleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqSelectMultipleComponent],
                    exports: [ArqSelectMultipleComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        MatFormFieldModule,
                        MtxSelectModule,
                        ArqFormControlErrorModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXNlbGVjdC1tdWx0aXBsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtc2VsZWN0LW11bHRpcGxlL2FycS1zZWxlY3QtbXVsdGlwbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWMxRCxNQUFNLE9BQU8sdUJBQXVCOztvSEFBdkIsdUJBQXVCO3FIQUF2Qix1QkFBdUIsaUJBWG5CLDBCQUEwQixhQUd2QyxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLHlCQUF5QixhQVBqQiwwQkFBMEI7cUhBVXpCLHVCQUF1QixZQVJoQyxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLHlCQUF5QjsyRkFHaEIsdUJBQXVCO2tCQVpuQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUMxQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztvQkFDckMsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZix5QkFBeUI7cUJBQzFCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNdHhTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctbWF0ZXJvL2V4dGVuc2lvbnMvc2VsZWN0JztcclxuaW1wb3J0IHsgQXJxU2VsZWN0TXVsdGlwbGVDb21wb25lbnQgfSBmcm9tICcuL2FycS1zZWxlY3QtbXVsdGlwbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJxRm9ybUNvbnRyb2xFcnJvck1vZHVsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtBcnFTZWxlY3RNdWx0aXBsZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0FycVNlbGVjdE11bHRpcGxlQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNdHhTZWxlY3RNb2R1bGUsXHJcbiAgICBBcnFGb3JtQ29udHJvbEVycm9yTW9kdWxlLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFycVNlbGVjdE11bHRpcGxlTW9kdWxlIHt9XHJcbiJdfQ==