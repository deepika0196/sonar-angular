import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ArqDatatableModule } from '../arq-datatable/arq-datatable.module';
import { ArqSelectModule } from '../arq-select/arq-select.module';
import { ArqDatatableMantenimientoComponent } from './arq-datatable-mantenimiento.component';

@NgModule({
  declarations: [ArqDatatableMantenimientoComponent],
  exports: [ArqDatatableMantenimientoComponent],
  imports: [ReactiveFormsModule, CommonModule, ArqDatatableModule, ArqSelectModule, MatSelectModule]
})
export class ArqDatatableMantenimientoModule {}
