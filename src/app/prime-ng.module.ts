import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CardModule,
    InputTextModule,
    InputNumberModule,
    TabMenuModule,
    BreadcrumbModule,
    CalendarModule,
    MultiSelectModule,
    ButtonModule,
    RippleModule,
    TableModule,
    DropdownModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextModule,
    ProgressSpinnerModule,
    DialogModule,
    AccordionModule,
    MenuModule,
    PaginatorModule,
    ProgressBarModule,
    MenubarModule,
    CheckboxModule,
    InputSwitchModule,
    DividerModule,
    BadgeModule,
    SelectButtonModule,
    DividerModule,
    VirtualScrollerModule,
    StepsModule,
    PasswordModule,
    InputTextareaModule,
    TooltipModule,
    RadioButtonModule,
    DynamicDialogModule
  ],
})
export class PrimeNgModule {}
