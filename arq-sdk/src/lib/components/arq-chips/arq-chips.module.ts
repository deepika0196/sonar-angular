import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { ArqChipsComponent } from './arq-chips.component';
import { CommonModule } from '@angular/common';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
  declarations: [ArqChipsComponent],
  exports: [ArqChipsComponent],
  imports: [
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    ArqFormControlErrorModule,
  ]
})
export class ArqChipsModule {}
