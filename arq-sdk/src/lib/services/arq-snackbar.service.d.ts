import { ToastrService } from 'ngx-toastr';
import { ArqSnackBoxOptions } from '../interfaces/arq-snackbar-options.interface';
import { ArqSnackbarEmitedMessage } from '../utils/arq-snackbar-emited-message';
import * as i0 from "@angular/core";
export declare class ArqSnackBarService {
    private toastr;
    optionsDefault: ArqSnackBoxOptions;
    lastSuccess: ArqSnackbarEmitedMessage;
    lastError: ArqSnackbarEmitedMessage;
    lastInfo: ArqSnackbarEmitedMessage;
    lastWarning: ArqSnackbarEmitedMessage;
    constructor(toastr: ToastrService);
    showSuccess(message: string | undefined, title: string | undefined, options?: ArqSnackBoxOptions | undefined): void;
    showError(message: string | undefined, title: string | undefined, options?: ArqSnackBoxOptions | undefined): void;
    showInfo(message: string | undefined, title: string | undefined, options?: ArqSnackBoxOptions | undefined): void;
    showWarning(message: string | undefined, title: string | undefined, options?: ArqSnackBoxOptions | undefined): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqSnackBarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArqSnackBarService>;
}
