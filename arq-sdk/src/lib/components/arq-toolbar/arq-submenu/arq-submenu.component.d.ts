import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ArqSubMenuComponent implements OnInit {
    SubMenuItems: any;
    Submenuitem: any;
    SelectedMenu: EventEmitter<any>;
    ngOnInit(): void;
    clickeventhandler(menu: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqSubMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqSubMenuComponent, "arq-submenu", never, { "SubMenuItems": "SubMenuItems"; }, { "SelectedMenu": "SelectedMenu"; }, never, never, false, never>;
}
