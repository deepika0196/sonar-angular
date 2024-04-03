import { ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class LocalizedNumericInputDirective implements ControlValueAccessor {
    private element;
    locale: string;
    decimalMarker: string;
    constructor(element: ElementRef<HTMLInputElement>);
    private _value;
    get value(): string | null;
    set value(value: string | null);
    set valor(valor: string);
    valorChange: EventEmitter<string>;
    objeto: any;
    propiedad: string;
    input(value: any): void;
    _onBlur(): void;
    onFocus(): void;
    _onChange(value: any): void;
    /**
     * @param value
     * apply formatting on value assignment
     */
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(): void;
    isLastCharacterDecimalSeparator(value: any): boolean;
    private formatValue;
    private unFormatValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalizedNumericInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LocalizedNumericInputDirective, "input[localizedNumericInput]", never, { "value": "value"; "valor": "localizedNumericInput"; "objeto": "objeto"; "propiedad": "propiedad"; }, { "valorChange": "localizedNumericInputChange"; }, never, never, false, never>;
}
