import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ArqCheckboxComponent } from './arq-checkbox.component';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
  declarations: [ArqCheckboxComponent],
  exports: [ArqCheckboxComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    ArqFormControlErrorModule,
  ]
})
export class ArqCheckboxModule {}
