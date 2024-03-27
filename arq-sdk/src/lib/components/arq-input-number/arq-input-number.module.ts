import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ArqGenericInputModule } from '../../../core/arq-generic-input/arq-generic-input.module';

import { ArqInputNumberComponent } from './arq-input-number.component';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
  declarations: [ArqInputNumberComponent],
  exports: [ArqInputNumberComponent],
  imports: [
    CommonModule,
    ArqGenericInputModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    ArqFormControlErrorModule,
  ]
})
export class ArqInputNumberModule {}
