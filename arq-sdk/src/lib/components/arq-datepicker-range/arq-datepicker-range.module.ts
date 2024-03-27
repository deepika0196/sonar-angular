import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArqDatepickerRangeComponent } from './arq-datepicker-range.component';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
  declarations: [ArqDatepickerRangeComponent],
  exports: [ArqDatepickerRangeComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatMomentDateModule,
    ArqFormControlErrorModule
  ],
  providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }]
})
export class ArqDatepickerRangeModule {}
