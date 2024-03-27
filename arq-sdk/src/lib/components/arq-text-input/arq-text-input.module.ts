import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ArqGenericInputModule } from '../../../core/arq-generic-input/arq-generic-input.module';

import { ArqTextInputComponent } from './arq-text-input.component';
import { ArqFormControlErrorModule } from '../arq-form-control-error/arq-form-control-error.module';

@NgModule({
  declarations: [ArqTextInputComponent],
  exports: [ArqTextInputComponent],
  imports: [
    CommonModule,
    ArqGenericInputModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    ArqFormControlErrorModule,
  ]
})
export class ArqTextInputModule {}
