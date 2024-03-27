import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ArqExpansionPanelComponent } from './arq-expansion-panel.component';

@NgModule({
  declarations: [ArqExpansionPanelComponent],
  exports: [ArqExpansionPanelComponent],
  imports: [CommonModule, MatExpansionModule]
})
export class ArqExpansionPanelModule {}
