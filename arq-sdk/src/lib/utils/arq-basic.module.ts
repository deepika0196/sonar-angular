import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ArqBasicComponent } from './arq-basic.component';
import { ArqBasicComplejoComponent } from './arq-basic-complejo.component';
@NgModule({
  declarations: [ArqBasicComponent,ArqBasicComplejoComponent],
  exports: [ArqBasicComponent,ArqBasicComplejoComponent],
  imports: [ReactiveFormsModule, CommonModule]
})
export class ArqBasicModule {}
