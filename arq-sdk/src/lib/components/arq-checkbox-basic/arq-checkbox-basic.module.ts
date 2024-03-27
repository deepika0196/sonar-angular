import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ArqCheckboxBasicComponent } from './arq-checkbox-basic.component';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
  declarations: [ArqCheckboxBasicComponent],
  exports: [ArqCheckboxBasicComponent],
  imports: [
    MatCheckboxModule,
    ReactiveFormsModule,
    CommonModule,
    ArqFormControlErrorModule,
  ]
})
export class ArqCheckboxBasicModule {}
