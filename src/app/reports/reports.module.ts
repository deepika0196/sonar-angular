import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { GeneracionDeInformesComponent } from './components/generacion-de-informes/generacion-de-informes.component';

@NgModule({
  declarations: [ReportsComponent, GeneracionDeInformesComponent],
  imports: [CommonModule, ReportsRoutingModule],
})
export class ReportsModule {}
