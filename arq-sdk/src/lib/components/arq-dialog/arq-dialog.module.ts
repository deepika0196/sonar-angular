import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { ArqButtonModule } from '../components';
import { ArqDialogComponent } from './arq-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, ArqButtonModule],
  declarations: [ArqDialogComponent],
  exports: [ArqDialogComponent],
  entryComponents: [ArqDialogComponent]
})
export class ArqDialogModule {}
