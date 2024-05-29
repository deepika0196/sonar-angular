import { Component, OnInit, TemplateRef } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import {
  ActionButtons,
  InputField,
} from '@app/shared/components/alert-dialog/alert-dialog.config';
import { CampoDeActuacion } from '@app/basic-maintenance/interfaces/campoDeActuacion';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css'],
})
export class AlertDialogComponent implements OnInit {
  actionButtons: ActionButtons[] = [];
  inputFields: InputField[] = [];
  alertMessage = '';
  headerStyle: {
    icon: string;
    dialogType: string;
    title: string;
  };
  headerExist = false;
  inputValues: CampoDeActuacion | undefined;
  template: TemplateRef<void>;

  constructor(private dialogConfig: DynamicDialogConfig) {}

  ngOnInit() {
    this.template = this.dialogConfig.data.template;
    this.actionButtons = this.dialogConfig.data?.actionButtons;
    this.inputFields = this.dialogConfig.data.inputFields;
    this.alertMessage = this.dialogConfig.data.alertMessage;
    this.headerStyle = this.dialogConfig.data.headerStyle;
    this.headerExist =
      this.headerStyle && Object.keys(this.headerStyle).length > 0
        ? true
        : false;
    this.inputValues = this.dialogConfig.data.inputValues;
  }
}
