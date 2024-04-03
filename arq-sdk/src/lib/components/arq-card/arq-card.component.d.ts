import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ArqCardComponent implements OnInit {
    title?: string;
    subtitle?: string;
    content?: string;
    src?: string;
    image?: string;
    alt?: string;
    buttonsSchema?: any[];
    extraClass?: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqCardComponent, "arq-card", never, { "title": "title"; "subtitle": "subtitle"; "content": "content"; "src": "src"; "image": "image"; "alt": "alt"; "buttonsSchema": "buttonsSchema"; "extraClass": "extraClass"; }, {}, never, ["*"], false, never>;
}
