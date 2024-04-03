import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import * as i0 from "@angular/core";
export declare class ArqToolbarComponent {
    private router;
    private translocoService;
    menuItems: any[];
    languages: any;
    title: string;
    titleAlign: 'left' | 'center' | 'right';
    user: any;
    reloadOnLangChange: boolean;
    selectedEvent: EventEmitter<any>;
    constructor(router: Router, translocoService: TranslocoService);
    setSelectedItem(item: any): void;
    changeLang(lang: any): void;
    ngLogout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqToolbarComponent, "arq-toolbar", never, { "menuItems": "menuItems"; "languages": "languages"; "title": "title"; "titleAlign": "titleAlign"; "user": "user"; "reloadOnLangChange": "reloadOnLangChange"; }, { "selectedEvent": "selectedEvent"; }, never, never, false, never>;
}
