import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { ArqGenericInputModule } from '../../../core/arq-generic-input/arq-generic-input.module';

import { CommonModule } from '@angular/common';
import { ArqTextareaComponent } from './arq-textarea.component';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
  declarations: [ArqTextareaComponent],
  exports: [ArqTextareaComponent],
  imports: [
    CommonModule,
    ArqGenericInputModule,
    MatInputModule,
    ReactiveFormsModule,
    ArqFormControlErrorModule,
  ]
})
export class ArqTextareaModule {}
