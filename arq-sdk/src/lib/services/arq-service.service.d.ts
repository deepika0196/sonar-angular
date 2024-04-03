import * as i0 from "@angular/core";
/**
 * Base service for every CRUD Service
 */
export declare abstract class Service {
    constructor();
    protected getURIEntityBase(host: string, params?: undefined): string;
    protected getURIEntityBasePublica(host: string, params?: undefined): string;
    abstract getURIEntity(params?: undefined): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<Service, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Service>;
}
