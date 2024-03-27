import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import {
  ArqAutocompleteModule,
  ArqButtonModule,
  ArqCheckboxBasicModule,
  ArqContextMenuModule,
  ArqDateTimepickerModule,
  ArqDatepickerModule,
  ArqInputNumberModule,
  ArqSelectModule,
  ArqTextInputModule
} from '../components';
import { ArqDatatableComponent } from './arq-datatable.component';

@NgModule({
  declarations: [ArqDatatableComponent],
  exports: [ArqDatatableComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,

    ArqButtonModule,
    ArqContextMenuModule,
    ArqDatepickerModule,
    ArqTextInputModule,
    ArqCheckboxBasicModule,
    ArqSelectModule,
    ArqAutocompleteModule,
    ArqDateTimepickerModule,
    ArqInputNumberModule,

    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatInputModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSortModule,
    MatButtonModule
  ],
  providers: [MatDialogModule, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} }]
  // entryComponents: [DialogContent]
})
export class ArqDatatableModule {}
