import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploUsoComponent } from './ejemplo-uso/ejemplo-uso.component';
import {
  ArqDatatableModule,
  ArqInputNumberModule,
  ArqTextInputModule,
  ArqInputMoneyModule,
  ArqSelectModule,
  ArqTextareaModule,
  ArqTabModule,
  ArqAutocompleteModule,
  ArqDateTimepickerModule,
  ArqDialogModule,
  ArqToolbarModule,
  ArqSchemaService,
  ArqDependentInputsModule,
} from 'arq-sdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoRootModule } from '../transloco-root.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TableModule } from 'primeng/table';
// import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { ItemExampleComponent } from './item-example/item-example.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ItemExampleEditComponent } from './item-example-edit/item-example-edit.component';

@NgModule({
  declarations: [EjemploUsoComponent, ItemExampleComponent, ItemExampleEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArqDatatableModule,
    ArqTextInputModule,
    ArqInputNumberModule,
    ArqInputMoneyModule,
    ArqSelectModule,
    ArqTextareaModule,
    ArqTabModule,
    ArqAutocompleteModule,
    ArqDateTimepickerModule,
    ButtonModule,
    ArqDialogModule,
    ArqToolbarModule,
    ArqDependentInputsModule,
    TranslocoRootModule,
    ToastrModule.forRoot(),
    TableModule,
    ToastModule,
    // MatIconModule,
    // MatInputModule,
    // MatFormFieldModule, 
  ],
  exports: [EjemploUsoComponent,  ItemExampleComponent],
  providers: [ArqSchemaService, ToastrService],
})
export class AppComponentsModule {}
