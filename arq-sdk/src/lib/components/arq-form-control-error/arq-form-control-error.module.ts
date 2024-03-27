import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArqFormControlErrorComponent } from './arq-form-control-error.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ArqFormControlErrorComponent,
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  exports: [
    ArqFormControlErrorComponent,
  ],
})
export class ArqFormControlErrorModule { }
