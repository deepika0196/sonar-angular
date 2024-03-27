import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ArqSubMenuComponent } from './arq-submenu/arq-submenu.component';
import { ArqToolbarComponent } from './arq-toolbar.component';

@NgModule({
  declarations: [ArqToolbarComponent, ArqSubMenuComponent],
  exports: [ArqToolbarComponent, ArqSubMenuComponent],
  imports: [ReactiveFormsModule, CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule]
})
export class ArqToolbarModule {}
