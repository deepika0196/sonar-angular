import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ArqSnackBoxOptions } from '../interfaces/arq-snackbar-options.interface';
import { ArqSnackbarEmitedMessage } from '../utils/arq-snackbar-emited-message';

@Injectable({
  providedIn: 'root'
})
export class ArqSnackBarService {
  optionsDefault: ArqSnackBoxOptions = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-bottom-right'
  };

  lastSuccess: ArqSnackbarEmitedMessage = new ArqSnackbarEmitedMessage(undefined, undefined);
  lastError: ArqSnackbarEmitedMessage = new ArqSnackbarEmitedMessage(undefined, undefined);
  lastInfo: ArqSnackbarEmitedMessage = new ArqSnackbarEmitedMessage(undefined, undefined);
  lastWarning: ArqSnackbarEmitedMessage = new ArqSnackbarEmitedMessage(undefined, undefined);

  constructor(private toastr: ToastrService) {}

  showSuccess(message: string | undefined, title: string | undefined, options?: ArqSnackBoxOptions | undefined) {
    if (this.lastSuccess.shouldEmit(message, title)) {
      this.toastr.success(message, title, options ? options : this.optionsDefault);
    }
  }

  showError(message: string | undefined, title: string | undefined, options?: ArqSnackBoxOptions | undefined) {
    if (this.lastError.shouldEmit(message, title)) {
      this.toastr.error(message, title, options ? options : this.optionsDefault);
    }
  }

  showInfo(message: string | undefined, title: string | undefined, options?: ArqSnackBoxOptions | undefined) {
    if (this.lastInfo.shouldEmit(message, title)) {
      this.toastr.info(message, title, options ? options : this.optionsDefault);
    }
  }

  showWarning(message: string | undefined, title: string | undefined, options?: ArqSnackBoxOptions | undefined) {
    if (this.lastWarning.shouldEmit(message, title)) {
      this.toastr.warning(message, title, options ? options : this.optionsDefault);
    }
  }
}
