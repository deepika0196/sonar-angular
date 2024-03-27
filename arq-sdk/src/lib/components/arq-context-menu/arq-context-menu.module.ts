import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ArqContextMenuComponent } from './arq-context-menu.component';

@NgModule({
  declarations: [ArqContextMenuComponent],
  exports: [ArqContextMenuComponent],
  imports: [ReactiveFormsModule, CommonModule]
})
export class ArqContextMenuModule {}
