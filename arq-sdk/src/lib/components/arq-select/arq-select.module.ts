import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArqSelectComponent } from './arq-select.component';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
  declarations: [ArqSelectComponent],
  exports: [ArqSelectComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule,
    ArqFormControlErrorModule
  ]
})
export class ArqSelectModule {}
