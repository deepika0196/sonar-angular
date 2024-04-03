import { formatNumber } from '@angular/common';
import { Directive, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import * as i0 from "@angular/core";
export class LocalizedNumericInputDirective {
    constructor(element) {
        this.element = element;
        this.locale = 'es';
        this.valorChange = new EventEmitter();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.formatValue(value);
    }
    set valor(valor) {
        if (!valor) {
            valor = '0';
        }
        this.formatValue(valor.toString());
    }
    input(value) {
        const re = /^[0-9]+([.])?([0-9]+)?$/;
        const test = re.test(value);
        if (test) {
            value = value.replace('.', ',');
        }
        //Find all numerics, decimal marker(, or .) and -
        //It will delete thousandSeparator cos it's always opposite to decimal marker
        const regExp = new RegExp(`[^\\d${this.decimalMarker}-]`, 'g');
        //Separate value on before and after decimal marker
        let [integer, decimal] = value.replace(regExp, '').split(this.decimalMarker);
        if (!integer) {
            integer = '0';
        }
        if (!decimal) {
            decimal = '00';
        }
        //Send non localized value, with dot as decimalMarker to API
        this._value = decimal ? integer.concat(',', decimal) : integer;
        // If decimal separator is last character don't update
        // because it will delete . || ,
        if (this.isLastCharacterDecimalSeparator(value)) {
            this._value = value;
        }
        // here to notify Angular Validators
        this._onChange(this._value);
    }
    _onBlur() {
        /**
         * Adding thousand separators
         */
        this.formatValue(this._value);
        this.valorChange.emit(this._value ? this._value : '');
    }
    onFocus() {
        this.unFormatValue();
    }
    _onChange(value) { }
    /**
     * @param value
     * apply formatting on value assignment
     */
    writeValue(value) {
        if (typeof value == 'number') {
            value = value.toString();
            if (value) {
                value = value.replace('.', ',');
            }
        }
        this._value = value;
        this.formatValue(this._value);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched() { }
    isLastCharacterDecimalSeparator(value) {
        return isNaN(value[value.length - 1]);
    }
    formatValue(value) {
        if (value === null) {
            this.element.nativeElement.value = '';
            return;
        }
        // if (this.isLastCharacterDecimalSeparator(value.toString())) {
        //   this.element.nativeElement.value = value;
        //   return;
        // }
        // Conclude the decimal and thousand separators from locale
        const [thousandSeparator, decimalMarker] = formatNumber(1000.99, this.locale).replace(/\d/g, '');
        this.decimalMarker = decimalMarker;
        //Here value should always come with . as decimal marker thus any other behavior is bug
        let [integer, decimal] = value.toString().split(',');
        // console.log(decimal);
        integer = integer ? integer.toString().replace(/[^0-9.]/g, '') : '';
        decimal = decimal ? decimal.toString().replace(/[^0-9.]/g, '') : '';
        // console.log(decimal);
        if (!integer) {
            integer = '0';
        }
        if (!decimal) {
            decimal = '00';
        }
        // console.log(decimal);
        if (!isNaN(Number(decimal))) {
            let numero;
            numero = Math.round(Number('0.' + decimal) * 100) / 100;
            if (numero == 0) {
                decimal = '0.00';
            }
            else if (numero == 1) {
                decimal = '0.00';
                integer = (!isNaN(Number(integer)) ? Number(integer) + 1 : 0).toLocaleString();
            }
            else {
                decimal = numero.toLocaleString();
            }
            decimal = decimal.substring(2, decimal.length);
        }
        //Group every three elements, and add thousandSeparator after them
        this.element.nativeElement.value = integer.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
        //Add decimals and decimalMarker if any
        if (decimal) {
            this.element.nativeElement.value = this.element.nativeElement.value.concat(decimalMarker, decimal);
        }
        this._value = this.element.nativeElement.value;
    }
    unFormatValue() {
        const value = this.element.nativeElement.value;
        if (this.isLastCharacterDecimalSeparator(value)) {
            return;
        }
        const regExp = new RegExp(`[^\\d${this.decimalMarker}-]`, 'g');
        let [integer, decimal] = value.replace(regExp, '').split(this.decimalMarker);
        if (!integer) {
            integer = '0';
        }
        if (!decimal) {
            decimal = '00';
        }
        this._value = integer.concat(',', decimal);
        if (value) {
            this.element.nativeElement.value = this._value;
        }
        else {
            this.element.nativeElement.value = '';
        }
    }
}
LocalizedNumericInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LocalizedNumericInputDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
LocalizedNumericInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: LocalizedNumericInputDirective, selector: "input[localizedNumericInput]", inputs: { value: "value", valor: ["localizedNumericInput", "valor"], objeto: "objeto", propiedad: "propiedad" }, outputs: { valorChange: "localizedNumericInputChange" }, host: { listeners: { "input": "input($event.target.value)", "blur": "_onBlur()", "focus": "onFocus()" } }, providers: [
        {
            provide: MAT_INPUT_VALUE_ACCESSOR,
            useExisting: LocalizedNumericInputDirective
        },
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LocalizedNumericInputDirective),
            multi: true
        }
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LocalizedNumericInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[localizedNumericInput]',
                    providers: [
                        {
                            provide: MAT_INPUT_VALUE_ACCESSOR,
                            useExisting: LocalizedNumericInputDirective
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => LocalizedNumericInputDirective),
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { value: [{
                type: Input,
                args: ['value']
            }], valor: [{
                type: Input,
                args: ['localizedNumericInput']
            }], valorChange: [{
                type: Output,
                args: ['localizedNumericInputChange']
            }], objeto: [{
                type: Input,
                args: ['objeto']
            }], propiedad: [{
                type: Input,
                args: ['propiedad']
            }], input: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }], _onBlur: [{
                type: HostListener,
                args: ['blur']
            }], onFocus: [{
                type: HostListener,
                args: ['focus']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYWxpemVkTnVtZXJpY0lucHV0RGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWlucHV0LW1vbmV5L2RpcmVjdGl2ZXMvTG9jYWxpemVkTnVtZXJpY0lucHV0RGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQWdCbkUsTUFBTSxPQUFPLDhCQUE4QjtJQUl6QyxZQUFvQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtRQUh6RCxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBd0J5QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFyQnBCLENBQUM7SUFJN0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUNJLEtBQUssQ0FBQyxLQUFvQjtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFvQyxLQUFLLENBQUMsS0FBYTtRQUNyRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUNiO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJ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RSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGO2lHQWNLLEtBQUs7c0JBRFIsS0FBSzt1QkFBQyxPQUFPO2dCQU1zQixLQUFLO3NCQUF4QyxLQUFLO3VCQUFDLHVCQUF1QjtnQkFPUyxXQUFXO3NCQUFqRCxNQUFNO3VCQUFDLDZCQUE2QjtnQkFFcEIsTUFBTTtzQkFBdEIsS0FBSzt1QkFBQyxRQUFRO2dCQUVmLFNBQVM7c0JBRFIsS0FBSzt1QkFBQyxXQUFXO2dCQUlsQixLQUFLO3NCQURKLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBb0M5QyxPQUFPO3NCQUROLFlBQVk7dUJBQUMsTUFBTTtnQkFXcEIsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTUFUX0lOUFVUX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFtsb2NhbGl6ZWROdW1lcmljSW5wdXRdJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTUFUX0lOUFVUX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogTG9jYWxpemVkTnVtZXJpY0lucHV0RGlyZWN0aXZlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTG9jYWxpemVkTnVtZXJpY0lucHV0RGlyZWN0aXZlKSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbGl6ZWROdW1lcmljSW5wdXREaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgbG9jYWxlID0gJ2VzJztcclxuICBkZWNpbWFsTWFya2VyITogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4pIHt9XHJcblxyXG4gIHByaXZhdGUgX3ZhbHVlITogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCd2YWx1ZScpXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2xvY2FsaXplZE51bWVyaWNJbnB1dCcpIHNldCB2YWxvcih2YWxvcjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXZhbG9yKSB7XHJcbiAgICAgIHZhbG9yID0gJzAnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZm9ybWF0VmFsdWUodmFsb3IudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG4gIEBPdXRwdXQoJ2xvY2FsaXplZE51bWVyaWNJbnB1dENoYW5nZScpIHZhbG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBJbnB1dCgnb2JqZXRvJykgb2JqZXRvOiBhbnk7XHJcbiAgQElucHV0KCdwcm9waWVkYWQnKVxyXG4gIHByb3BpZWRhZCE6IHN0cmluZztcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcclxuICBpbnB1dCh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCByZSA9IC9eWzAtOV0rKFsuXSk/KFswLTldKyk/JC87XHJcbiAgICBjb25zdCB0ZXN0ID0gcmUudGVzdCh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKHRlc3QpIHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCcuJywgJywnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0ZpbmQgYWxsIG51bWVyaWNzLCBkZWNpbWFsIG1hcmtlcigsIG9yIC4pIGFuZCAtXHJcbiAgICAvL0l0IHdpbGwgZGVsZXRlIHRob3VzYW5kU2VwYXJhdG9yIGNvcyBpdCdzIGFsd2F5cyBvcHBvc2l0ZSB0byBkZWNpbWFsIG1hcmtlclxyXG4gICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgW15cXFxcZCR7dGhpcy5kZWNpbWFsTWFya2VyfS1dYCwgJ2cnKTtcclxuICAgIC8vU2VwYXJhdGUgdmFsdWUgb24gYmVmb3JlIGFuZCBhZnRlciBkZWNpbWFsIG1hcmtlclxyXG4gICAgbGV0IFtpbnRlZ2VyLCBkZWNpbWFsXSA9IHZhbHVlLnJlcGxhY2UocmVnRXhwLCAnJykuc3BsaXQodGhpcy5kZWNpbWFsTWFya2VyKTtcclxuXHJcbiAgICBpZiAoIWludGVnZXIpIHtcclxuICAgICAgaW50ZWdlciA9ICcwJztcclxuICAgIH1cclxuICAgIGlmICghZGVjaW1hbCkge1xyXG4gICAgICBkZWNpbWFsID0gJzAwJztcclxuICAgIH1cclxuXHJcbiAgICAvL1NlbmQgbm9uIGxvY2FsaXplZCB2YWx1ZSwgd2l0aCBkb3QgYXMgZGVjaW1hbE1hcmtlciB0byBBUElcclxuICAgIHRoaXMuX3ZhbHVlID0gZGVjaW1hbCA/IGludGVnZXIuY29uY2F0KCcsJywgZGVjaW1hbCkgOiBpbnRlZ2VyO1xyXG5cclxuICAgIC8vIElmIGRlY2ltYWwgc2VwYXJhdG9yIGlzIGxhc3QgY2hhcmFjdGVyIGRvbid0IHVwZGF0ZVxyXG4gICAgLy8gYmVjYXVzZSBpdCB3aWxsIGRlbGV0ZSAuIHx8ICxcclxuICAgIGlmICh0aGlzLmlzTGFzdENoYXJhY3RlckRlY2ltYWxTZXBhcmF0b3IodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGVyZSB0byBub3RpZnkgQW5ndWxhciBWYWxpZGF0b3JzXHJcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICBfb25CbHVyKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRpbmcgdGhvdXNhbmQgc2VwYXJhdG9yc1xyXG4gICAgICovXHJcbiAgICB0aGlzLmZvcm1hdFZhbHVlKHRoaXMuX3ZhbHVlKTtcclxuXHJcbiAgICB0aGlzLnZhbG9yQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWUgPyB0aGlzLl92YWx1ZSA6ICcnKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcclxuICBvbkZvY3VzKCkge1xyXG4gICAgdGhpcy51bkZvcm1hdFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2UodmFsdWU6IGFueSk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHZhbHVlXHJcbiAgICogYXBwbHkgZm9ybWF0dGluZyBvbiB2YWx1ZSBhc3NpZ25tZW50XHJcbiAgICovXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCcuJywgJywnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuZm9ybWF0VmFsdWUodGhpcy5fdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZCgpIHt9XHJcblxyXG4gIGlzTGFzdENoYXJhY3RlckRlY2ltYWxTZXBhcmF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIGlzTmFOKHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgKHRoaXMuaXNMYXN0Q2hhcmFjdGVyRGVjaW1hbFNlcGFyYXRvcih2YWx1ZS50b1N0cmluZygpKSkge1xyXG4gICAgLy8gICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgLy8gICByZXR1cm47XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gQ29uY2x1ZGUgdGhlIGRlY2ltYWwgYW5kIHRob3VzYW5kIHNlcGFyYXRvcnMgZnJvbSBsb2NhbGVcclxuICAgIGNvbnN0IFt0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbE1hcmtlcl0gPSBmb3JtYXROdW1iZXIoMTAwMC45OSwgdGhpcy5sb2NhbGUpLnJlcGxhY2UoL1xcZC9nLCAnJyk7XHJcbiAgICB0aGlzLmRlY2ltYWxNYXJrZXIgPSBkZWNpbWFsTWFya2VyO1xyXG5cclxuICAgIC8vSGVyZSB2YWx1ZSBzaG91bGQgYWx3YXlzIGNvbWUgd2l0aCAuIGFzIGRlY2ltYWwgbWFya2VyIHRodXMgYW55IG90aGVyIGJlaGF2aW9yIGlzIGJ1Z1xyXG4gICAgbGV0IFtpbnRlZ2VyLCBkZWNpbWFsXSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJywnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRlY2ltYWwpO1xyXG4gICAgaW50ZWdlciA9IGludGVnZXIgPyBpbnRlZ2VyLnRvU3RyaW5nKCkucmVwbGFjZSgvW14wLTkuXS9nLCAnJykgOiAnJztcclxuICAgIGRlY2ltYWwgPSBkZWNpbWFsID8gZGVjaW1hbC50b1N0cmluZygpLnJlcGxhY2UoL1teMC05Ll0vZywgJycpIDogJyc7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkZWNpbWFsKTtcclxuICAgIGlmICghaW50ZWdlcikge1xyXG4gICAgICBpbnRlZ2VyID0gJzAnO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkZWNpbWFsKSB7XHJcbiAgICAgIGRlY2ltYWwgPSAnMDAnO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coZGVjaW1hbCk7XHJcbiAgICBpZiAoIWlzTmFOKE51bWJlcihkZWNpbWFsKSkpIHtcclxuICAgICAgbGV0IG51bWVybzogbnVtYmVyO1xyXG4gICAgICBudW1lcm8gPSBNYXRoLnJvdW5kKE51bWJlcignMC4nICsgZGVjaW1hbCkgKiAxMDApIC8gMTAwO1xyXG4gICAgICBpZiAobnVtZXJvID09IDApIHtcclxuICAgICAgICBkZWNpbWFsID0gJzAuMDAnO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWVybyA9PSAxKSB7XHJcbiAgICAgICAgZGVjaW1hbCA9ICcwLjAwJztcclxuICAgICAgICBpbnRlZ2VyID0gKCFpc05hTihOdW1iZXIoaW50ZWdlcikpID8gTnVtYmVyKGludGVnZXIpICsgMSA6IDApLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVjaW1hbCA9IG51bWVyby50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgICB9XHJcbiAgICAgIGRlY2ltYWwgPSBkZWNpbWFsLnN1YnN0cmluZygyLCBkZWNpbWFsLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Hcm91cCBldmVyeSB0aHJlZSBlbGVtZW50cywgYW5kIGFkZCB0aG91c2FuZFNlcGFyYXRvciBhZnRlciB0aGVtXHJcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGludGVnZXIucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgdGhvdXNhbmRTZXBhcmF0b3IpO1xyXG5cclxuICAgIC8vQWRkIGRlY2ltYWxzIGFuZCBkZWNpbWFsTWFya2VyIGlmIGFueVxyXG4gICAgaWYgKGRlY2ltYWwpIHtcclxuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZS5jb25jYXQoZGVjaW1hbE1hcmtlciwgZGVjaW1hbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdW5Gb3JtYXRWYWx1ZSgpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNMYXN0Q2hhcmFjdGVyRGVjaW1hbFNlcGFyYXRvcih2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYFteXFxcXGQke3RoaXMuZGVjaW1hbE1hcmtlcn0tXWAsICdnJyk7XHJcbiAgICBsZXQgW2ludGVnZXIsIGRlY2ltYWxdID0gdmFsdWUucmVwbGFjZShyZWdFeHAsICcnKS5zcGxpdCh0aGlzLmRlY2ltYWxNYXJrZXIpO1xyXG5cclxuICAgIGlmICghaW50ZWdlcikge1xyXG4gICAgICBpbnRlZ2VyID0gJzAnO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkZWNpbWFsKSB7XHJcbiAgICAgIGRlY2ltYWwgPSAnMDAnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3ZhbHVlID0gaW50ZWdlci5jb25jYXQoJywnLCBkZWNpbWFsKTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19