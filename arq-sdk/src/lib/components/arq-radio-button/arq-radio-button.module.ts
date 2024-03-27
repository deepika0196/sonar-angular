import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

import { ArqRadioButtonComponent } from './arq-radio-button.component';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
  declarations: [ArqRadioButtonComponent],
  exports: [ArqRadioButtonComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatRadioModule,
    ArqFormControlErrorModule,
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' }
    }
  ]
})
export class ArqRadioButtonModule {}
