import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ArqSnackBarComponent } from './arq-snackbar.component';

@NgModule({
  declarations: [ArqSnackBarComponent],
  exports: [ArqSnackBarComponent],
  imports: [CommonModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  entryComponents: [ArqSnackBarComponent]
})
export class ArqSnackBarModule {}
