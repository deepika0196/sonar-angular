import { ArqDialogService } from './../../../services/arq-dialog.service';
import * as i0 from "@angular/core";
export declare class ArqPromptDialogComponent {
    data: any;
    private dialogService;
    fValue: string;
    constructor(data: any, dialogService: ArqDialogService);
    cancelDialog(): void;
    closeDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqPromptDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqPromptDialogComponent, "arq-dt-prompt-dialog", never, {}, {}, never, never, false, never>;
}
