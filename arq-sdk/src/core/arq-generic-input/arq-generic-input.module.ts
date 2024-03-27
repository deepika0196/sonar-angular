import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  exports: [MatTooltipModule, ReactiveFormsModule],
  imports: [MatTooltipModule, ReactiveFormsModule]
})
export class ArqGenericInputModule {}
