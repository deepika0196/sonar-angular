import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ArqAutocompleteModule, ArqSelectModule } from '../components';
import { ArqDependentInputsComponent } from './arq-dependent-inputs.component';

@NgModule({
  declarations: [ArqDependentInputsComponent],
  exports: [ArqDependentInputsComponent],
  imports: [CommonModule, ReactiveFormsModule, ArqSelectModule, ArqAutocompleteModule]
})
export class ArqDependentInputsModule {}
