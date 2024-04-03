import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArqDatepickerComponent, dateProviders } from './arq-datepicker.component';
import { ArqFormControlErrorModule } from '../components';
import * as i0 from "@angular/core";
export class ArqDatepickerModule {
}
ArqDatepickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqDatepickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerModule, declarations: [ArqDatepickerComponent], imports: [CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        ArqFormControlErrorModule], exports: [ArqDatepickerComponent] });
ArqDatepickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerModule, providers: [DatePipe, dateProviders, { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }], imports: [CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDatepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqDatepickerComponent],
                    exports: [ArqDatepickerComponent],
                    imports: [
                        CommonModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatTooltipModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatMomentDateModule,
                        ArqFormControlErrorModule
                    ],
                    providers: [DatePipe, dateProviders, { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWRhdGVwaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWRhdGVwaWNrZXIvYXJxLWRhdGVwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWlCMUQsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQWRmLHNCQUFzQixhQUduQyxZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIseUJBQXlCLGFBVGpCLHNCQUFzQjtpSEFhckIsbUJBQW1CLGFBRm5CLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsWUFUbEgsWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHlCQUF5QjsyRkFJaEIsbUJBQW1CO2tCQWYvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIseUJBQXlCO3FCQUMxQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQztpQkFDckgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUsIERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0TW9tZW50RGF0ZU1vZHVsZSwgTW9tZW50RGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XHJcbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNQVRfREFURV9MT0NBTEUsIE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5cclxuaW1wb3J0IHsgQXJxRGF0ZXBpY2tlckNvbXBvbmVudCwgZGF0ZVByb3ZpZGVycyB9IGZyb20gJy4vYXJxLWRhdGVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJxRm9ybUNvbnRyb2xFcnJvck1vZHVsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtBcnFEYXRlcGlja2VyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQXJxRGF0ZXBpY2tlckNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gICAgTWF0TW9tZW50RGF0ZU1vZHVsZSxcclxuICAgIEFycUZvcm1Db250cm9sRXJyb3JNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW0RhdGVQaXBlLCBkYXRlUHJvdmlkZXJzLCB7IHByb3ZpZGU6IERhdGVBZGFwdGVyLCB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsIGRlcHM6IFtNQVRfREFURV9MT0NBTEVdIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFEYXRlcGlja2VyTW9kdWxlIHt9XHJcbiJdfQ==