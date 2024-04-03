import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class ArqUploadFilesDialogComponent {
    data: {
        cancelBtn: boolean;
        confirmBtn: boolean;
        textConfirm: string;
        textCancel: string;
        config: any;
        label: string;
    };
    private mdDialogRef;
    config: any;
    constructor(data: {
        cancelBtn: boolean;
        confirmBtn: boolean;
        textConfirm: string;
        textCancel: string;
        config: any;
        label: string;
    }, mdDialogRef: MatDialogRef<ArqUploadFilesDialogComponent>);
    cancel(): void;
    close(value: boolean): void;
    confirm(): void;
    onEsc(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqUploadFilesDialogComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqUploadFilesDialogComponent, "arq-upload-files-dialog", never, { "config": "config"; }, {}, never, never, false, never>;
}
