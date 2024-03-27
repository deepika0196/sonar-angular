import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { ArqSliderDobleComponent } from './arq-slider-doble.component';

@NgModule({
  declarations: [ArqSliderDobleComponent],
  exports: [ArqSliderDobleComponent],
  imports: [ReactiveFormsModule, CommonModule, MatSliderModule]
})
export class ArqSliderDobleModule {}
