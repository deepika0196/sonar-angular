import { OnInit, TemplateRef } from '@angular/core';
import { ArqTabItemHeaderComponent } from '../arq-tab-item-header/arq-tab-item-header.component';
import * as i0 from "@angular/core";
export declare class ArqTabItemComponent implements OnInit {
    contentTemplate: TemplateRef<any>;
    itemHeader: ArqTabItemHeaderComponent;
    title: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqTabItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqTabItemComponent, "arq-tab-item", never, { "title": "title"; }, {}, ["itemHeader"], ["arq-tab-item-content"], false, never>;
}
