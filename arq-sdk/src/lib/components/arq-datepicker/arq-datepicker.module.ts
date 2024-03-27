import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ArqDatepickerComponent, dateProviders } from './arq-datepicker.component';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
  declarations: [ArqDatepickerComponent],
  exports: [ArqDatepickerComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    ArqFormControlErrorModule
  ],
  providers: [DatePipe, dateProviders, { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }]
})
export class ArqDatepickerModule {}
