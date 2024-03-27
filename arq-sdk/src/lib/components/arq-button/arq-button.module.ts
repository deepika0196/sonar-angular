import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ArqButtonComponent } from './arq-button.component';

@NgModule({
  declarations: [ArqButtonComponent],
  exports: [ArqButtonComponent],
  imports: [MatButtonModule, MatIconModule, CommonModule]
})
export class ArqButtonModule { }
