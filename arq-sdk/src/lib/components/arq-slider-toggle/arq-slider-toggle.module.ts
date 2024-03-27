import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ArqSliderToggleComponent } from './arq-slider-toggle.component';

@NgModule({
  declarations: [ArqSliderToggleComponent],
  exports: [ArqSliderToggleComponent],
  imports: [ReactiveFormsModule, CommonModule, MatSlideToggleModule]
})
export class ArqSliderToggleModule {}
