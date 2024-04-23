import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ActionButtons } from 'src/app/basic-maintenance/interfaces/action-buttons';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css'],
})
export class AlertDialogComponent implements OnInit {
  actionButtons: ActionButtons[] = [];
  inputFields: { label: string; required_msg: string; name: string }[] = [];
  alertMessage = '';
  headerStyle: any;
  headerExist = false;
  inputValues: any;

  constructor(private dialogConfig: DynamicDialogConfig) {}

  ngOnInit() {
    // Access data as follow
    console.log('~ this.dialogConfig.data:', this.dialogConfig.data);
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
