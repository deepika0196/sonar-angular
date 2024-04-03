import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/common/http";
import * as i4 from "@auth0/angular-jwt";
export declare function jwtOptionsFactory(): {
    tokenGetter: typeof tokenGetter;
};
export declare function tokenGetter(): string;
export declare class ArqGvLoginModule {
    static forRoot(): ModuleWithProviders<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqGvLoginModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ArqGvLoginModule, never, [typeof i1.ReactiveFormsModule, typeof i2.CommonModule, typeof i1.FormsModule, typeof i3.HttpClientModule, typeof i4.JwtModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ArqGvLoginModule>;
}
