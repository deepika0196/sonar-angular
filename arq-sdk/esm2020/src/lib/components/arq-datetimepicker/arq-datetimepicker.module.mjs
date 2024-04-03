import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MtxMomentDatetimeModule } from '@ng-matero/extensions-moment-adapter';
import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';
import { ArqDateTimepickerComponent } from './arq-datetimepicker.component';
import { ArqFormControlErrorModule } from '../components';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as i0 from "@angular/core";
export class ArqDateTimepickerModule {
}
ArqDateTimepickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDateTimepickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerModule, declarations: [ArqDateTimepickerComponent], imports: [ReactiveFormsModule,
        CommonModule,
        MatDatepickerModule,
        MatInputModule,
        MatTooltipModule,
        MtxMomentDatetimeModule,
        MtxDatetimepickerModule,
        ArqFormControlErrorModule], exports: [ArqDateTimepickerComponent] });
ArqDateTimepickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerModule, providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }], imports: [ReactiveFormsModule,
        CommonModule,
        MatDatepickerModule,
        MatInputModule,
        MatTooltipModule,
        MtxMomentDatetimeModule,
        MtxDatetimepickerModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDateTimepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqDateTimepickerComponent],
                    exports: [ArqDateTimepickerComponent],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        MatDatepickerModule,
                        MatInputModule,
                        MatTooltipModule,
                        MtxMomentDatetimeModule,
                        MtxDatetimepickerModule,
                        ArqFormControlErrorModule
                    ],
                    providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWRhdGV0aW1lcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS1kYXRldGltZXBpY2tlci9hcnEtZGF0ZXRpbWVwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFpQnJFLE1BQU0sT0FBTyx1QkFBdUI7O29IQUF2Qix1QkFBdUI7cUhBQXZCLHVCQUF1QixpQkFkbkIsMEJBQTBCLGFBR3ZDLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix5QkFBeUIsYUFUakIsMEJBQTBCO3FIQWF6Qix1QkFBdUIsYUFGdkIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsWUFUekYsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjsyRkFJaEIsdUJBQXVCO2tCQWZuQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUMxQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztvQkFDckMsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQix1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3FCQUMxQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7aUJBQzVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBNdHhNb21lbnREYXRldGltZU1vZHVsZSB9IGZyb20gJ0BuZy1tYXRlcm8vZXh0ZW5zaW9ucy1tb21lbnQtYWRhcHRlcic7XHJcbmltcG9ydCB7IE10eERhdGV0aW1lcGlja2VyTW9kdWxlIH0gZnJvbSAnQG5nLW1hdGVyby9leHRlbnNpb25zL2RhdGV0aW1lcGlja2VyJztcclxuaW1wb3J0IHsgQXJxRGF0ZVRpbWVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2FycS1kYXRldGltZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcnFGb3JtQ29udHJvbEVycm9yTW9kdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTW9tZW50RGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FycURhdGVUaW1lcGlja2VyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQXJxRGF0ZVRpbWVwaWNrZXJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gICAgTXR4TW9tZW50RGF0ZXRpbWVNb2R1bGUsXHJcbiAgICBNdHhEYXRldGltZXBpY2tlck1vZHVsZSxcclxuICAgIEFycUZvcm1Db250cm9sRXJyb3JNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlciwgZGVwczogW01BVF9EQVRFX0xPQ0FMRV0gfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFycURhdGVUaW1lcGlja2VyTW9kdWxlIHt9XHJcbiJdfQ==