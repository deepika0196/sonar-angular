import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'arq-upload-files',
  templateUrl: './arq-upload-files.component.html',
  styleUrls: ['./arq-upload-files.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqUploadFilesComponent implements OnInit {
  @Input()
  config!: any;

  @Input()
  label!: string;

  @Input()
  multiple: boolean = true;

  public selectedFiles: File[] = [];

  public txtLabel!: string;
  public response: any;
  public showProgress: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  selectFiles(event: any) {
    this.selectedFiles = event.target.files;
    this.txtLabel = this.customLabel(this.selectedFiles?.length);
  }

  cancelUpload() {
    this.selectedFiles = [];
    this.showProgress = false;
    this.config.cancelUpload();
  }

  uploadFiles() {
    this.showProgress = true;

    if (this.selectedFiles) {
      const formData = new FormData();
      for (var i = 0; i < this.selectedFiles.length; i++) {
        formData.append('file', this.selectedFiles[i]);
      }

      this.upload(formData);
    }
  }

  upload(files: FormData): void {
    if (files) {
      this.config.uploadFile(files).subscribe((resp: any) => {
        this.response = resp;
        this.selectedFiles = [];
        this.showProgress = false;
      });
    }
  }

  customLabel(num: any) {
    const str = num > 1 ? ' archivos' : ' archivo';
    const label = num + str;
    return label;
  }
}
