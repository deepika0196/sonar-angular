import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

import { ArqStepItemComponent, ArqStepItemContentComponent, ArqStepItemLabelComponent } from '../components';
import { ArqStepGroupComponent } from './arq-step-group/arq-step-group.component';

@NgModule({
  declarations: [ArqStepGroupComponent, ArqStepItemComponent, ArqStepItemLabelComponent, ArqStepItemContentComponent],
  exports: [ArqStepGroupComponent, ArqStepItemComponent, ArqStepItemLabelComponent, ArqStepItemContentComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatStepperModule, MatButtonModule]
})
export class ArqStepperModule {}
