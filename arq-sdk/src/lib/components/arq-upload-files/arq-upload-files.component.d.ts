import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ArqUploadFilesComponent implements OnInit {
    config: any;
    label: string;
    multiple: boolean;
    selectedFiles: File[];
    txtLabel: string;
    response: any;
    showProgress: boolean;
    constructor();
    ngOnInit(): void;
    selectFiles(event: any): void;
    cancelUpload(): void;
    uploadFiles(): void;
    upload(files: FormData): void;
    customLabel(num: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqUploadFilesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqUploadFilesComponent, "arq-upload-files", never, { "config": "config"; "label": "label"; "multiple": "multiple"; }, {}, never, never, false, never>;
}
