import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { ArqSliderComponent } from './arq-slider.component';

@NgModule({
  declarations: [ArqSliderComponent],
  exports: [ArqSliderComponent],
  imports: [ReactiveFormsModule, CommonModule, MatSliderModule]
})
export class ArqSliderModule {}
