import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ArqUploadFilesDialogComponent } from '../components/arq-upload-files-dialog/arq-upload-files-dialog.component';
import * as i0 from "@angular/core";
export declare class ArqUploadFilesDialogService {
    private dialog;
    constructor(dialog: MatDialog);
    dialogRef: MatDialogRef<ArqUploadFilesDialogComponent>;
    open(options: {
        cancelBtn: boolean;
        confirmBtn: boolean;
        textCancel: string;
        textConfirm: string;
        config: any;
        label: string;
    }): void;
    confirmed(): Observable<any>;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqUploadFilesDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArqUploadFilesDialogService>;
}
