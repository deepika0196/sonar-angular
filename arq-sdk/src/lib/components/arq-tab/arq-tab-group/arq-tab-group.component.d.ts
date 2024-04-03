import { AfterContentInit, EventEmitter, QueryList } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { ArqTabItemComponent } from '../arq-tab-item/arq-tab-item.component';
import * as i0 from "@angular/core";
export declare class ArqTabGroupComponent implements AfterContentInit {
    private contentItems?;
    appItems?: QueryList<ArqTabItemComponent>;
    _selectedTabChange: (_tab: number) => any;
    selectedTabChangeOutput: EventEmitter<number>;
    selectedIndexChange: EventEmitter<number>;
    tabGroup: MatTabGroup;
    constructor();
    ngAfterContentInit(): void;
    changeTab(tabIdx: number): void;
    getSelectedIndex(): number;
    selectedTabChange($event: MatTabChangeEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqTabGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArqTabGroupComponent, "arq-tab-group", never, { "_selectedTabChange": "selectedTabChange"; }, { "selectedTabChangeOutput": "selectedTabChangeOutput"; "selectedIndexChange": "selectedIndexChange"; }, ["contentItems"], never, false, never>;
}
