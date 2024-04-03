import { HttpClient } from '@angular/common/http';
import { TranslocoLoader } from '@ngneat/transloco';
import * as i0 from "@angular/core";
import * as i1 from "@ngneat/transloco";
export declare class TranslocoHttpLoader implements TranslocoLoader {
    private http;
    constructor(http: HttpClient);
    getTranslation(lang: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslocoHttpLoader, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslocoHttpLoader>;
}
export declare class TranslocoRootModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslocoRootModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TranslocoRootModule, never, never, [typeof i1.TranslocoModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TranslocoRootModule>;
}
