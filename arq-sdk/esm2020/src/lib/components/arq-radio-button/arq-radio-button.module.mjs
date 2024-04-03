import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { ArqRadioButtonComponent } from './arq-radio-button.component';
import { ArqFormControlErrorModule } from '../components';
import * as i0 from "@angular/core";
export class ArqRadioButtonModule {
}
ArqRadioButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRadioButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqRadioButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqRadioButtonModule, declarations: [ArqRadioButtonComponent], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatRadioModule,
        ArqFormControlErrorModule], exports: [ArqRadioButtonComponent] });
ArqRadioButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRadioButtonModule, providers: [
        {
            provide: MAT_RADIO_DEFAULT_OPTIONS,
            useValue: { color: 'primary' }
        }
    ], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatRadioModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqRadioButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqRadioButtonComponent],
                    exports: [ArqRadioButtonComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        MatRadioModule,
                        ArqFormControlErrorModule,
                    ],
                    providers: [
                        {
                            provide: MAT_RADIO_DEFAULT_OPTIONS,
                            useValue: { color: 'primary' }
                        }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXJhZGlvLWJ1dHRvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtcmFkaW8tYnV0dG9uL2FycS1yYWRpby1idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQW1CMUQsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGlCQWhCaEIsdUJBQXVCLGFBR3BDLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osV0FBVztRQUNYLGNBQWM7UUFDZCx5QkFBeUIsYUFOakIsdUJBQXVCO2tIQWV0QixvQkFBb0IsYUFQcEI7UUFDVDtZQUNFLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtTQUMvQjtLQUNGLFlBWEMsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixXQUFXO1FBQ1gsY0FBYztRQUNkLHlCQUF5QjsyRkFTaEIsb0JBQW9CO2tCQWpCaEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxjQUFjO3dCQUNkLHlCQUF5QjtxQkFDMUI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSx5QkFBeUI7NEJBQ2xDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7eUJBQy9CO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlLCBNQVRfUkFESU9fREVGQVVMVF9PUFRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xyXG5cclxuaW1wb3J0IHsgQXJxUmFkaW9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2FycS1yYWRpby1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJxRm9ybUNvbnRyb2xFcnJvck1vZHVsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtBcnFSYWRpb0J1dHRvbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0FycVJhZGlvQnV0dG9uQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRSYWRpb01vZHVsZSxcclxuICAgIEFycUZvcm1Db250cm9sRXJyb3JNb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTUFUX1JBRElPX0RFRkFVTFRfT1BUSU9OUyxcclxuICAgICAgdXNlVmFsdWU6IHsgY29sb3I6ICdwcmltYXJ5JyB9XHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJxUmFkaW9CdXR0b25Nb2R1bGUge31cclxuIl19