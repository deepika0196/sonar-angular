import { AbstractControl, ValidatorFn } from '@angular/forms';

export class customValidators {  

    static arrayMinItems(min: number, type: string): ValidatorFn {  
        return (control: AbstractControl):  { [key: string]: any }  | null => {
            
            if (type == 'array' && control.value !== undefined && (isNaN(control.value) || control.value.length < min)) {
                return { 'minItems': true };
            }
            return null;
        };
    }  

    static arrayMaxItems(max: number, type: string): ValidatorFn {
        return (control: AbstractControl):  { [key: string]: any }  | null => {
            
            if (type == 'array' && control.value !== undefined && (isNaN(control.value) || control.value.length > max)) {
                return { 'maxItems': true };
            }
            return null;
        };
    }

    static arrayUniqueItems(unique: boolean, type: string): ValidatorFn {
        return (control: AbstractControl):  { [key: string]: any }  | null => {
            if (control.value !== undefined && unique && (checkIfDuplicateExists(control.value))) {
                return { 'maxItems': true };
            }
            return null;
        };
    }

    static numberExclusiveMaximum(max: number, type: string): ValidatorFn {    
        return (control: AbstractControl):  { [key: string]: any }  | null => {
            if (type == 'number' && control.value !== undefined && (isNaN(control.value) || control.value >= max)) {
                return { 'exclusiveMaximum': true };
            }
            return null;
        };
    } 

    static numberExclusiveMinimum(min: number, type: string): ValidatorFn {    
        return (control: AbstractControl):  { [key: string]: any }  | null => {
            if (type == 'number' && control.value !== undefined && (isNaN(control.value) || control.value <= min)) {
                return { 'exclusiveMinimum': true };
            }
            return null;
        };
    }

    static numberMinimum(min: number, type: string): ValidatorFn {    
        return (control: AbstractControl):  { [key: string]: any } | null => {
            console.log(isNaN(control.value) || control.value >= min);
            
            if (type == 'number' && control.value !== undefined && (isNaN(control.value) || control.value < min)) {
                return { 'minimum': true };
            }
            return null;
        };
    } 

    static numberMaximum(max: number, type: string): any {    
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (type == 'number' && control.value !== undefined && (isNaN(control.value) || control.value > max)) {
                return { 'maximum': true };
            }
            return null;
        };
    }

    static numberMultipleOf(multiplo: number, type: string): ValidatorFn {    
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (type == 'number' && control.value !== undefined && (isNaN(control.value) || control.value % multiplo != 0)) {
                return { 'multipleOf': true };
            }
            return null;
        };
    } 

}

function checkIfDuplicateExists(arr:any) {
    return new Set(arr).size != arr.length;
}