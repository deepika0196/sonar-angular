import { AfterViewInit, Component, Input } from '@angular/core';
import { FormControl, FormControlStatus } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';

export const errorMapMessagesDefault: Map<string, string> = new Map([
  ['required', 'arq.form-control-error.default-error-message.required'],
  ['readOnly', 'arq.form-control-error.default-error-message.readOnly'],
  ['minlength', 'arq.form-control-error.default-error-message.minlength'],
  ['maxlength', 'arq.form-control-error.default-error-message.maxlength'],
  ['pattern', 'arq.form-control-error.default-error-message.pattern'],
  ['min', 'arq.form-control-error.default-error-message.min'],
  ['max', 'arq.form-control-error.default-error-message.max'],
  ['format', 'arq.form-control-error.default-error-message.format'],
  ['matDatepickerParse', 'arq.form-control-error.default-error-message.matDatepickerParse'],
  ['matStartDateInvalid', 'arq.form-control-error.default-error-message.matStartDateInvalid'],
  ['mtxDatetimepickerParse', 'arq.form-control-error.default-error-message.mtxDatetimepickerParse']
]);

@Component({
  selector: '[arq-form-control-error]',
  templateUrl: './arq-form-control-error.component.html',
  styleUrls: ['./arq-form-control-error.component.css']
})
export class ArqFormControlErrorComponent implements AfterViewInit {
  @Input()
  public labelControl: string | undefined = '';

  @Input()
  public errorMapMessages: Map<string, string> = errorMapMessagesDefault;

  private _errorMessage: string = '';

  @Input()
  public formControlSibling?: FormControl;

  constructor(private _translocoService: TranslocoService) {}

  // hacemos todo esto despues del init cuando existan los elementos en el DOM
  ngAfterViewInit(): void {
    this.formControlSibling!.statusChanges!.subscribe(this.updateErrors);
  }

  private updateErrors = (state: FormControlStatus): void => {
    if (state === 'INVALID') {
      this._errorMessage = '';
      // recuperamos el mapa de errores
      const controlErrors = this.formControlSibling!.errors!;
      Object.keys(controlErrors).forEach(keyError => {
        let params: Record<string, string> = {
          labelControl: this.labelControl!
        };

        switch (keyError) {
          case 'min':
            params = {
              ...params,
              min: controlErrors[keyError].min
            };
            this.concatLabel(keyError, params);
            break;
          case 'max':
            params = {
              ...params,
              max: controlErrors[keyError].max
            };
            this.concatLabel(keyError, params);
            break;
          case 'minlength':
          case 'maxlength':
            params = {
              ...params,
              length: controlErrors[keyError].requiredLength
            };
            this.concatLabel(keyError, params);
            break;
          case 'readOnly':
          case 'format':
          case 'pattern':
          case 'required':
            this.concatLabel(keyError, params);
            break;
          case 'matDatepickerParse':
          case 'matStartDateInvalid':
          case 'mtxDatetimepickerParse':
            params = {
              ...params,
              format: controlErrors[keyError]
            };

            this.concatLabel(keyError, params);
            break;
          default:
            this._errorMessage += this.getCustomLabel(controlErrors[keyError]);
            break;
        }
      });
    }
  };

  private getCustomLabel(keyLabel: string): string {
    return this._translocoService.translate(keyLabel) + ' ';
  }

  private concatLabel(keyError: string, params: Record<string, string> = {}): void {
    const valueError = this.errorMapMessages.get(keyError) as string;
    this._errorMessage += this._translocoService.translate(valueError, params) + ' ';
  }

  public get errorMessage() {
    return this._errorMessage;
  }
}
