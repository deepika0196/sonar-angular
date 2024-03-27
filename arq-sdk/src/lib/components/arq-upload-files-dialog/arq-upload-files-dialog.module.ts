import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatButtonModule } from '@angular/material/button';
import { ArqUploadFilesModule } from '../arq-upload-files/arq-upload-files.module';

import { ArqUploadFilesDialogComponent } from './arq-upload-files-dialog.component';

@NgModule({
  declarations: [ArqUploadFilesDialogComponent],
  exports: [ArqUploadFilesDialogComponent],
  imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule, ArqUploadFilesModule]
})
export class ArqUploadFilesDialogModule {}
