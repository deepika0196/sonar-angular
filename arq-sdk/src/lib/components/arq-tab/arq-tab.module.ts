import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ArqTabGroupComponent } from './arq-tab-group/arq-tab-group.component';
import { ArqTabItemContentComponent } from './arq-tab-item-content/arq-tab-item-content.component';
import { ArqTabItemHeaderComponent } from './arq-tab-item-header/arq-tab-item-header.component';
import { ArqTabItemComponent } from './arq-tab-item/arq-tab-item.component';

@NgModule({
  declarations: [ArqTabItemComponent, ArqTabItemContentComponent, ArqTabItemHeaderComponent, ArqTabGroupComponent],
  exports: [ArqTabItemComponent, ArqTabItemContentComponent, ArqTabItemHeaderComponent, ArqTabGroupComponent],
  imports: [ReactiveFormsModule, CommonModule, MatTabsModule]
})
export class ArqTabModule {}
