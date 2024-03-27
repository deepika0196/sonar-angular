import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArqFieldsetComponent } from './arq-fieldset.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ArqFieldsetComponent,
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  exports: [
    ArqFieldsetComponent,
  ]
})
export class ArqFieldsetModule { }
