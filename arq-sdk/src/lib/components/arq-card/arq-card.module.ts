import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ArqCardComponent } from './arq-card.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ArqCardComponent],
  exports: [ArqCardComponent],
  imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatButtonModule]
})
export class ArqCardModule {}
