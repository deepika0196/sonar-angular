import { EventEmitter } from '@angular/core';
import { ContextMenuModel } from './models/contextmenu.model';
import { MenuPositions } from './models/menupositions.model';
import * as i0 from "@angular/core";
export declare class ArqContextMenuComponent {
    contextMenuItems: Array<ContextMenuModel>;
    menuPositions: MenuPositions;
    onContextMenuItemClick: EventEmitter<any>;
    onContextMenuClick(event: any, data: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqContextMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqContextMenuComponent, "arq-context-menu", never, { "contextMenuItems": "contextMenuItems"; "menuPositions": "menuPositions"; }, { "onContextMenuItemClick": "onContextMenuItemClick"; }, never, never, false, never>;
}
