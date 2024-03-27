import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MtxMomentDatetimeModule } from '@ng-matero/extensions-moment-adapter';
import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';
import { ArqDateTimepickerComponent } from './arq-datetimepicker.component';
import { ArqFormControlErrorModule } from '../components';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [ArqDateTimepickerComponent],
  exports: [ArqDateTimepickerComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatTooltipModule,
    MtxMomentDatetimeModule,
    MtxDatetimepickerModule,
    ArqFormControlErrorModule
  ],
  providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }]
})
export class ArqDateTimepickerModule {}
