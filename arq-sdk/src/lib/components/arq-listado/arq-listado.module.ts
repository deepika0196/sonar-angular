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

@NgModule({
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
})
export class ArqListadosModule {}
