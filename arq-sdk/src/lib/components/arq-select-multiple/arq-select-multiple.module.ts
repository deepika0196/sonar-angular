import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { ArqSelectMultipleComponent } from './arq-select-multiple.component';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
  declarations: [ArqSelectMultipleComponent],
  exports: [ArqSelectMultipleComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MtxSelectModule,
    ArqFormControlErrorModule,
  ]
})
export class ArqSelectMultipleModule {}
