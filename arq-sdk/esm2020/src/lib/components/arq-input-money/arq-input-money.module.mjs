import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ArqGenericInputModule } from '../../../core/arq-generic-input/arq-generic-input.module';
import { LocalizedNumericInputDirective } from './directives/LocalizedNumericInputDirective';
import { MatIconModule } from '@angular/material/icon';
import { ArqInputMoneyComponent } from './arq-input-money.component';
import { ArqFormControlErrorModule } from '../components';
import * as i0 from "@angular/core";
export class ArqInputMoneyModule {
}
ArqInputMoneyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputMoneyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqInputMoneyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqInputMoneyModule, declarations: [ArqInputMoneyComponent, LocalizedNumericInputDirective], imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        ArqFormControlErrorModule], exports: [ArqInputMoneyComponent, LocalizedNumericInputDirective] });
ArqInputMoneyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputMoneyModule, providers: [DecimalPipe], imports: [CommonModule,
        ArqGenericInputModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        ArqFormControlErrorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqInputMoneyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqInputMoneyComponent, LocalizedNumericInputDirective],
                    exports: [ArqInputMoneyComponent, LocalizedNumericInputDirective],
                    imports: [
                        CommonModule,
                        ArqGenericInputModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        ArqFormControlErrorModule,
                    ],
                    providers: [DecimalPipe]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWlucHV0LW1vbmV5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS1pbnB1dC1tb25leS9hcnEtaW5wdXQtbW9uZXkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFN0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFlMUQsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQVpmLHNCQUFzQixFQUFFLDhCQUE4QixhQUduRSxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHlCQUF5QixhQVBqQixzQkFBc0IsRUFBRSw4QkFBOEI7aUhBV3JELG1CQUFtQixhQUZuQixDQUFDLFdBQVcsQ0FBQyxZQVB0QixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHlCQUF5QjsyRkFJaEIsbUJBQW1CO2tCQWIvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLDhCQUE4QixDQUFDO29CQUN0RSxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSw4QkFBOEIsQ0FBQztvQkFDakUsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYix5QkFBeUI7cUJBQzFCO29CQUNELFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpQkFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUsIERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcblxyXG5pbXBvcnQgeyBBcnFHZW5lcmljSW5wdXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FycS1nZW5lcmljLWlucHV0L2FycS1nZW5lcmljLWlucHV0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IExvY2FsaXplZE51bWVyaWNJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9Mb2NhbGl6ZWROdW1lcmljSW5wdXREaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBBcnFJbnB1dE1vbmV5Q29tcG9uZW50IH0gZnJvbSAnLi9hcnEtaW5wdXQtbW9uZXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJxRm9ybUNvbnRyb2xFcnJvck1vZHVsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtBcnFJbnB1dE1vbmV5Q29tcG9uZW50LCBMb2NhbGl6ZWROdW1lcmljSW5wdXREaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtBcnFJbnB1dE1vbmV5Q29tcG9uZW50LCBMb2NhbGl6ZWROdW1lcmljSW5wdXREaXJlY3RpdmVdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEFycUdlbmVyaWNJbnB1dE1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBBcnFGb3JtQ29udHJvbEVycm9yTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbRGVjaW1hbFBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFJbnB1dE1vbmV5TW9kdWxlIHt9XHJcbiJdfQ==