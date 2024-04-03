import * as i0 from "@angular/core";
export declare class ArqSchemaService {
    constructor();
    /**
     * Generate Form Group with schema validations.
     */
    _parseSchema(schemaObject: any, customValidations: any): any;
    _isListAngularDto(property: any): boolean;
    private _collect;
    private _createValidation;
    /**
     * @param schema
     * @param property
     */
    private _isPropertyRequired;
    fillModelWithDefaultValues(model: any, schema: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqSchemaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArqSchemaService>;
}
