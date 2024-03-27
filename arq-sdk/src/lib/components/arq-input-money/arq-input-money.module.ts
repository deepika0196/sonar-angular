import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { ArqGenericInputModule } from '../../../core/arq-generic-input/arq-generic-input.module';
import { LocalizedNumericInputDirective } from './directives/LocalizedNumericInputDirective';

import { MatIconModule } from '@angular/material/icon';
import { ArqInputMoneyComponent } from './arq-input-money.component';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
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
})
export class ArqInputMoneyModule {}
