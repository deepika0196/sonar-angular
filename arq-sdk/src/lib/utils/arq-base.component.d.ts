import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ArqBaseComponent implements OnDestroy {
    unsubscribe$: Subject<void>;
    constructor();
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqBaseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqBaseComponent, "arq-base-component", never, {}, {}, never, never, false, never>;
}
