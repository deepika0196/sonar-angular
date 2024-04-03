import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class ArqDialogComponent {
    data: {
        cancelBtn: boolean;
        confirmBtn: boolean;
        message: string;
        title: string;
        type: string;
        icon: string;
        color: string;
        textConfirm: string;
        textCancel: string;
        content?: any;
    };
    private mdDialogRef;
    constructor(data: {
        cancelBtn: boolean;
        confirmBtn: boolean;
        message: string;
        title: string;
        type: string;
        icon: string;
        color: string;
        textConfirm: string;
        textCancel: string;
        content?: any;
    }, mdDialogRef: MatDialogRef<ArqDialogComponent>);
    cancel(): void;
    close(value: boolean): void;
    confirm(): void;
    onEsc(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqDialogComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqDialogComponent, "arq-dialog", never, {}, {}, never, never, false, never>;
}
