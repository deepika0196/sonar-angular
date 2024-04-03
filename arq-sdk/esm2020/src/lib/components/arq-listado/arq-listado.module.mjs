import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ArqGenericInputModule } from '../../../core/arq-generic-input/arq-generic-input.module';
import { ArqApiService } from '../../services/arq-api.service';
import { ArqAutocompleteModule } from '../arq-autocomplete/arq-autocomplete.module';
import { ArqButtonModule } from '../arq-button/arq-button.module';
import { ArqCheckboxBasicModule } from '../arq-checkbox-basic/arq-checkbox-basic.module';
import { ArqDatepickerRangeModule } from '../arq-datepicker-range/arq-datepicker-range.module';
import { ArqInputMoneyModule } from '../arq-input-money/arq-input-money.module';
import { ArqSelectModule } from '../arq-select/arq-select.module';
import { ArqTextInputModule } from '../arq-text-input/arq-text-input.module';
import { ArqDatatableModule, ArqDatepickerModule, ArqFieldsetModule, ArqInputNumberModule } from '../components';
import { ArqListadoComponent, FilterByGrupoPipe } from './arq-listado.component';
import * as i0 from "@angular/core";
export class ArqListadosModule {
}
ArqListadosModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqListadosModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqListadosModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqListadosModule, declarations: [ArqListadoComponent, FilterByGrupoPipe], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ArqTextInputModule,
        ArqSelectModule,
        ArqGenericInputModule,
        MatInputModule,
        MatIconModule,
        ArqButtonModule,
        ArqDatepickerRangeModule,
        ArqDatepickerModule,
        ArqInputMoneyModule,
        ArqInputNumberModule,
        ArqCheckboxBasicModule,
        ArqAutocompleteModule,
        MatGridListModule,
        ArqDatatableModule,
        ArqFieldsetModule], exports: [ArqListadoComponent] });
ArqListadosModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqListadosModule, providers: [ArqApiService], imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        ArqTextInputModule,
        ArqSelectModule,
        ArqGenericInputModule,
        MatInputModule,
        MatIconModule,
        ArqButtonModule,
        ArqDatepickerRangeModule,
        ArqDatepickerModule,
        ArqInputMoneyModule,
        ArqInputNumberModule,
        ArqCheckboxBasicModule,
        ArqAutocompleteModule,
        MatGridListModule,
        ArqDatatableModule,
        ArqFieldsetModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqListadosModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqListadoComponent, FilterByGrupoPipe],
                    exports: [ArqListadoComponent],
                    providers: [ArqApiService],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        ArqTextInputModule,
                        ArqSelectModule,
                        ArqGenericInputModule,
                        MatInputModule,
                        MatIconModule,
                        ArqButtonModule,
                        ArqDatepickerRangeModule,
                        ArqDatepickerModule,
                        ArqInputMoneyModule,
                        ArqInputNumberModule,
                        ArqCheckboxBasicModule,
                        ArqAutocompleteModule,
                        MatGridListModule,
                        ArqDatatableModule,
                        ArqFieldsetModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWxpc3RhZG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWxpc3RhZG8vYXJxLWxpc3RhZG8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUEyQmpGLE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkF4QmIsbUJBQW1CLEVBQUUsaUJBQWlCLGFBSW5ELG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTtRQUNmLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsaUJBQWlCLGFBcEJULG1CQUFtQjsrR0F1QmxCLGlCQUFpQixhQXRCakIsQ0FBQyxhQUFhLENBQUMsWUFFeEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsY0FBYztRQUNkLGFBQWE7UUFDYixlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixpQkFBaUI7MkZBR1IsaUJBQWlCO2tCQXpCN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQztvQkFDdEQsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQzlCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDMUIsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixlQUFlO3dCQUNmLHdCQUF3Qjt3QkFDeEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixpQkFBaUI7cUJBQ2xCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuXHJcbmltcG9ydCB7IEFycUdlbmVyaWNJbnB1dE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXJxLWdlbmVyaWMtaW5wdXQvYXJxLWdlbmVyaWMtaW5wdXQubW9kdWxlJztcclxuaW1wb3J0IHsgQXJxQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FycS1hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEFycUF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJy4uL2FycS1hdXRvY29tcGxldGUvYXJxLWF1dG9jb21wbGV0ZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBcnFCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9hcnEtYnV0dG9uL2FycS1idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgQXJxQ2hlY2tib3hCYXNpY01vZHVsZSB9IGZyb20gJy4uL2FycS1jaGVja2JveC1iYXNpYy9hcnEtY2hlY2tib3gtYmFzaWMubW9kdWxlJztcclxuaW1wb3J0IHsgQXJxRGF0ZXBpY2tlclJhbmdlTW9kdWxlIH0gZnJvbSAnLi4vYXJxLWRhdGVwaWNrZXItcmFuZ2UvYXJxLWRhdGVwaWNrZXItcmFuZ2UubW9kdWxlJztcclxuaW1wb3J0IHsgQXJxSW5wdXRNb25leU1vZHVsZSB9IGZyb20gJy4uL2FycS1pbnB1dC1tb25leS9hcnEtaW5wdXQtbW9uZXkubW9kdWxlJztcclxuaW1wb3J0IHsgQXJxU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vYXJxLXNlbGVjdC9hcnEtc2VsZWN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IEFycVRleHRJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2FycS10ZXh0LWlucHV0L2FycS10ZXh0LWlucHV0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IEFycURhdGF0YWJsZU1vZHVsZSwgQXJxRGF0ZXBpY2tlck1vZHVsZSwgQXJxRmllbGRzZXRNb2R1bGUsIEFycUlucHV0TnVtYmVyTW9kdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEFycUxpc3RhZG9Db21wb25lbnQsIEZpbHRlckJ5R3J1cG9QaXBlIH0gZnJvbSAnLi9hcnEtbGlzdGFkby5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtBcnFMaXN0YWRvQ29tcG9uZW50LCBGaWx0ZXJCeUdydXBvUGlwZV0sXHJcbiAgZXhwb3J0czogW0FycUxpc3RhZG9Db21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW0FycUFwaVNlcnZpY2VdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIEFycVRleHRJbnB1dE1vZHVsZSxcclxuICAgIEFycVNlbGVjdE1vZHVsZSxcclxuICAgIEFycUdlbmVyaWNJbnB1dE1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIEFycUJ1dHRvbk1vZHVsZSxcclxuICAgIEFycURhdGVwaWNrZXJSYW5nZU1vZHVsZSxcclxuICAgIEFycURhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICBBcnFJbnB1dE1vbmV5TW9kdWxlLFxyXG4gICAgQXJxSW5wdXROdW1iZXJNb2R1bGUsXHJcbiAgICBBcnFDaGVja2JveEJhc2ljTW9kdWxlLFxyXG4gICAgQXJxQXV0b2NvbXBsZXRlTW9kdWxlLFxyXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXHJcbiAgICBBcnFEYXRhdGFibGVNb2R1bGUsXHJcbiAgICBBcnFGaWVsZHNldE1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFycUxpc3RhZG9zTW9kdWxlIHt9XHJcbiJdfQ==