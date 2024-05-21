import { Component, Inject, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import {
  ActionButtons,
  InputField,
} from '@app/shared/components/alert-dialog/alert-dialog.config';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css'],
})
export class AlertDialogComponent implements OnInit {
  actionButtons: ActionButtons[] = [];
  inputFields: InputField[] = [];
  alertMessage = '';
  headerStyle: any;
  headerExist = false;
  inputValues: any;
  data: any;

  constructor(
    private dialogConfig: DynamicDialogConfig // @Inject('data') public data: any // @Inject(DynamicDialogConfig) public data: any
  ) {}

  ngOnInit() {
    this.data = this.dialogConfig.data;
    console.log(this.data);
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
