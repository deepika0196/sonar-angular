import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatButtonModule } from '@angular/material/button';
import { ArqUploadFilesComponent } from './arq-upload-files.component';

@NgModule({
  declarations: [ArqUploadFilesComponent],
  exports: [ArqUploadFilesComponent],
  imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule]
})
export class ArqUploadFilesModule {}
