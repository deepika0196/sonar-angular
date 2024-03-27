import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ArqButtonToggleMultipleComponent } from './arq-button-toggle-multiple.component';

@NgModule({
  declarations: [ArqButtonToggleMultipleComponent],
  exports: [ArqButtonToggleMultipleComponent],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MatButtonToggleModule]
})
export class ArqButtonToggleMultipleModule {}
