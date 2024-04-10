import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicMaintenanceComponent } from './basic-maintenance.component';

const routes: Routes = [{ path: '', component: BasicMaintenanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicMaintenanceRoutingModule { }
