import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '@app/prime-ng.module';
import { GenericTableComponent } from '@app/shared/components/generic-table/generic-table.component';
import { GvaButtonComponent } from '@app/shared/components/gva-button/gva-button.component';
import { TranslocoRootModule } from '@app/transloco-root.module';

const commonDeclarations = [GenericTableComponent, GvaButtonComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    TranslocoRootModule,
  ],
  declarations: [...commonDeclarations],
  exports: [
    ...commonDeclarations,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimeNgModule,
    TranslocoRootModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
