import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { ArqBadgeComponent } from './arq-badge.component';

@NgModule({
  declarations: [ArqBadgeComponent],
  exports: [ArqBadgeComponent],
  imports: [MatBadgeModule, MatIconModule, ReactiveFormsModule, CommonModule]
})
export class ArqBadgeModule {}
