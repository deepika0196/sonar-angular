import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoRootModule } from '../../../core/transloco-root.module';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { ArqButtonModule, ArqDatatableModule, ArqDatepickerRangeModule } from '../components';
import { ArqDTBANameFilterDialogComponent, ArqDTBusquedaAvanzadaComponent } from './arq-dt-busqueda-avanzada.component';

import { ArqAdvFilterDialogComponent } from './dialogs/adv-filter/adv-filter-dialog.component';
import { ArqPrefiltersDialogComponent } from './dialogs/prefilters/prefilters-dialog.component';

@NgModule({
  declarations: [
    ArqDTBusquedaAvanzadaComponent,
    ArqAdvFilterDialogComponent,
    ArqPrefiltersDialogComponent,
    ArqDTBANameFilterDialogComponent
  ],
  exports: [
    ArqDTBusquedaAvanzadaComponent,
    ArqAdvFilterDialogComponent,
    ArqPrefiltersDialogComponent,
    ArqDTBANameFilterDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoModule,
    TranslocoRootModule,

    ArqDatatableModule,
    ArqButtonModule,

    MatDatepickerModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTooltipModule,
    MatDialogModule
  ]
})
export class ArqDTBusquedaAvanzadaModule {}
