import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { pairwise, startWith, Subscription } from 'rxjs';

@Component({
  template: '',
  encapsulation: ViewEncapsulation.None
})
export abstract class ArqGenericInputComponent implements OnInit {
  public readonly LANG_ES = 'es';

  //#region Variables
  @Input()
  public layout = 'h';

  @Input()
  public label: string | undefined;

  @Input()
  public columns = 12;

  @Input()
  public labelColumns: any;

  @Input()
  public value: string = '';

  @Input()
  public required = false;

  @Input()
  public readonly: boolean = false;

  @Input()
  public placeholder = '';

  @Input()
  public sizeInput: string = 'small';

  //propiedades Tooltip
  @Input()
  hideDelay!: number;

  @Input()
  message!: string;

  @Input()
  positionTooltip!: TooltipPosition;

  @Input()
  msgError!: string;

  @Input()
  public prefix!: string;

  @Input()
  public suffix!: string;

  @Input()
  public iconPrefix: boolean = false;

  @Input()
  public iconSuffix: boolean = false;

  @Input()
  public fGroup!: FormGroup;

  @Input()
  lang: string | undefined = this.LANG_ES;

  @Input()
  showValue: boolean = false;

  @Output()
  protected changeEvent!: EventEmitter<any>;

  public subscription: Subscription | undefined;
  public idioma: string | undefined;

  public labelClass = '';

  public inputClass = 'form-group';
  //#endregion

  //#region  Constructor
  public constructor() {
    this.changeEvent = new EventEmitter<any>();
  }
  //#endregion

  //#region  Angular lifecycle
  public ngOnInit(): void {
    this.initcialitzarForm();
    this.comprobarEntradas();
  }
  //#endregion

  protected abstract comprobarEntradas(): any;

  //#region Initcialitzacio
  protected initcialitzarForm(): void {}

  public vaciaInput() {
    this.fGroup?.controls[this.value].setValue('');
  }

  public ngChanges(evt?: any, elem?: any) {
    this.changeEvent.emit(this.fGroup?.controls[this.value].value);
  }

  public validateValue(): void {
    this.fGroup?.controls[this.value].updateValueAndValidity();
    this.fGroup?.controls[this.value].clearAsyncValidators();
  }

  public ngSetChanges() {
    if (this.fGroup?.controls[this.value]) {
      if (this.fGroup?.controls[this.value].value == true) this.fGroup?.controls[this.value].setValue('S');
      if (this.fGroup?.controls[this.value].value == false) this.fGroup?.controls[this.value].setValue('N');
    }
    this.changeEvent.emit(this.fGroup?.controls[this.value].value);
  }

  protected getValue(): FormControl {
    if (!this.fGroup?.controls[this.value]) {
      console.error(`ERROR: El FormControl ${this.value} no existe!!`);
    }

    return this.fGroup?.controls[this.value] as FormControl;
  }

  protected setValueCheckbox(): void {
    if (this.fGroup?.controls[this.value]) {
      if (this.fGroup?.controls[this.value].value == 'S') this.fGroup?.controls[this.value].setValue(true);
      if (this.fGroup?.controls[this.value].value == 'N') this.fGroup?.controls[this.value].setValue(false);
    }
  }

  protected setValue(value: any): void {
    if (this.fGroup?.controls[this.value]) {
      this.fGroup?.controls[this.value].setValue(value);
    }
  }

  protected setValueDate() {
    this.fGroup.controls[this.value].valueChanges.subscribe(x => {
      this.validateDate();
    });
  }

  public validateDate() {
    const value = this.fGroup?.controls[this.value].value;
    if (this.fGroup?.controls[this.value].value) {
      if (typeof value == 'number') {
        this.fGroup.controls[this.value].setValue(new Date(value));
      } else if (typeof value == 'string') {
        const regEx = /^\d{4}-\d{2}-\d{2}$/;

        if (value?.toString()?.match(regEx) == null) {
          this.fGroup.controls[this.value].setValue(new Date(Number(value)));
        }
      }
    }
  }

  public setFG(control: any) {
    this.fGroup.addControl(control, new FormControl(''));
  }

  public getValidations() {
    if (!this.fGroup?.controls[this.value]) {
      console.error(`ERROR: El FormControl ${this.value} no existe!!`);
    }
    return this.fGroup.controls[this.value].hasValidator(Validators.required);
  }

  public onFocusOutEvent(event: any): void {
    //console.log(event.target.value);
    this.getValue()?.markAsDirty();
  }
}
