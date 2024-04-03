import { ValidatorFn } from '@angular/forms';
export declare class customValidators {
    static arrayMinItems(min: number, type: string): ValidatorFn;
    static arrayMaxItems(max: number, type: string): ValidatorFn;
    static arrayUniqueItems(unique: boolean, type: string): ValidatorFn;
    static numberExclusiveMaximum(max: number, type: string): ValidatorFn;
    static numberExclusiveMinimum(min: number, type: string): ValidatorFn;
    static numberMinimum(min: number, type: string): ValidatorFn;
    static numberMaximum(max: number, type: string): any;
    static numberMultipleOf(multiplo: number, type: string): ValidatorFn;
}
