import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArqAutocompleteComponent } from './arq-autocomplete.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ArqFormControlErrorModule } from '../components';

@NgModule({
  declarations: [ArqAutocompleteComponent],
  exports: [ArqAutocompleteComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    ArqFormControlErrorModule
  ]
})
export class ArqAutocompleteModule {}
