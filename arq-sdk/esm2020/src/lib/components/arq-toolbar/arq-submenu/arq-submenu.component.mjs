import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/menu";
export class ArqSubMenuComponent {
    constructor() {
        this.SelectedMenu = new EventEmitter();
    }
    ngOnInit() { }
    clickeventhandler(menu) {
        this.SelectedMenu.emit(menu);
    }
}
ArqSubMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSubMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqSubMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqSubMenuComponent, selector: "arq-submenu", inputs: { SubMenuItems: "SubMenuItems" }, outputs: { SelectedMenu: "SelectedMenu" }, viewQueries: [{ propertyName: "Submenuitem", first: true, predicate: ["Submenuitem"], descendants: true }], ngImport: i0, template: "<mat-menu #Submenuitem=\"matMenu\" [overlapTrigger]=\"false\" class=\"customize-mat-menu\">\r\n  <div *ngFor=\"let submenu of SubMenuItems\">\r\n    <span *ngIf=\"submenu.subItems && submenu.subItems.length > 0\">\r\n      <button class=\"btn-marte-menu\" mat-menu-item [matMenuTriggerFor]=\"secondsubmenu.Submenuitem\">\r\n        <mat-icon *ngIf=\"submenu.icon\">{{ submenu.icon }}</mat-icon>\r\n        <span>{{ submenu.label }}</span>\r\n      </button>\r\n      <arq-submenu (SelectedMenu)=\"clickeventhandler($event)\" #secondsubmenu [SubMenuItems]=\"submenu.subItems\">\r\n      </arq-submenu>\r\n    </span>\r\n    <span *ngIf=\"!submenu.subItems || submenu.subItems.length === 0\">\r\n      <button class=\"btn-marte-menu\" mat-menu-item (click)=\"clickeventhandler(submenu)\">\r\n        <mat-icon *ngIf=\"submenu.icon\">{{ submenu.icon }}</mat-icon>\r\n        <span>{{ submenu.label }}</span>\r\n      </button>\r\n    </span>\r\n  </div>\r\n</mat-menu>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i3.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i3.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "component", type: ArqSubMenuComponent, selector: "arq-submenu", inputs: ["SubMenuItems"], outputs: ["SelectedMenu"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSubMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-submenu', template: "<mat-menu #Submenuitem=\"matMenu\" [overlapTrigger]=\"false\" class=\"customize-mat-menu\">\r\n  <div *ngFor=\"let submenu of SubMenuItems\">\r\n    <span *ngIf=\"submenu.subItems && submenu.subItems.length > 0\">\r\n      <button class=\"btn-marte-menu\" mat-menu-item [matMenuTriggerFor]=\"secondsubmenu.Submenuitem\">\r\n        <mat-icon *ngIf=\"submenu.icon\">{{ submenu.icon }}</mat-icon>\r\n        <span>{{ submenu.label }}</span>\r\n      </button>\r\n      <arq-submenu (SelectedMenu)=\"clickeventhandler($event)\" #secondsubmenu [SubMenuItems]=\"submenu.subItems\">\r\n      </arq-submenu>\r\n    </span>\r\n    <span *ngIf=\"!submenu.subItems || submenu.subItems.length === 0\">\r\n      <button class=\"btn-marte-menu\" mat-menu-item (click)=\"clickeventhandler(submenu)\">\r\n        <mat-icon *ngIf=\"submenu.icon\">{{ submenu.icon }}</mat-icon>\r\n        <span>{{ submenu.label }}</span>\r\n      </button>\r\n    </span>\r\n  </div>\r\n</mat-menu>\r\n" }]
        }], propDecorators: { SubMenuItems: [{
                type: Input
            }], Submenuitem: [{
                type: ViewChild,
                args: ['Submenuitem']
            }], SelectedMenu: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXN1Ym1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLXRvb2xiYXIvYXJxLXN1Ym1lbnUvYXJxLXN1Ym1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLXRvb2xiYXIvYXJxLXN1Ym1lbnUvYXJxLXN1Ym1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTzFGLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFXWSxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBT2hFO0lBTEMsUUFBUSxLQUFVLENBQUM7SUFFbkIsaUJBQWlCLENBQUMsSUFBUztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOztnSEFaVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixvUENQaEMsMjhCQWtCQSxpeUJEWGEsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsYUFBYTs4QkFNdkIsWUFBWTtzQkFEWCxLQUFLO2dCQUcyQixXQUFXO3NCQUEzQyxTQUFTO3VCQUFDLGFBQWE7Z0JBRWQsWUFBWTtzQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcnEtc3VibWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcnEtc3VibWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXJxLXN1Ym1lbnUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIFN1Yk1lbnVJdGVtcyE6IGFueTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnU3VibWVudWl0ZW0nKSBwdWJsaWMgU3VibWVudWl0ZW06IGFueTtcclxuXHJcbiAgQE91dHB1dCgpIFNlbGVjdGVkTWVudTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgY2xpY2tldmVudGhhbmRsZXIobWVudTogYW55KSB7XHJcbiAgICB0aGlzLlNlbGVjdGVkTWVudS5lbWl0KG1lbnUpO1xyXG4gIH1cclxufVxyXG4iLCI8bWF0LW1lbnUgI1N1Ym1lbnVpdGVtPVwibWF0TWVudVwiIFtvdmVybGFwVHJpZ2dlcl09XCJmYWxzZVwiIGNsYXNzPVwiY3VzdG9taXplLW1hdC1tZW51XCI+XHJcbiAgPGRpdiAqbmdGb3I9XCJsZXQgc3VibWVudSBvZiBTdWJNZW51SXRlbXNcIj5cclxuICAgIDxzcGFuICpuZ0lmPVwic3VibWVudS5zdWJJdGVtcyAmJiBzdWJtZW51LnN1Ykl0ZW1zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1tYXJ0ZS1tZW51XCIgbWF0LW1lbnUtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVwic2Vjb25kc3VibWVudS5TdWJtZW51aXRlbVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cInN1Ym1lbnUuaWNvblwiPnt7IHN1Ym1lbnUuaWNvbiB9fTwvbWF0LWljb24+XHJcbiAgICAgICAgPHNwYW4+e3sgc3VibWVudS5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxhcnEtc3VibWVudSAoU2VsZWN0ZWRNZW51KT1cImNsaWNrZXZlbnRoYW5kbGVyKCRldmVudClcIiAjc2Vjb25kc3VibWVudSBbU3ViTWVudUl0ZW1zXT1cInN1Ym1lbnUuc3ViSXRlbXNcIj5cclxuICAgICAgPC9hcnEtc3VibWVudT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICpuZ0lmPVwiIXN1Ym1lbnUuc3ViSXRlbXMgfHwgc3VibWVudS5zdWJJdGVtcy5sZW5ndGggPT09IDBcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1tYXJ0ZS1tZW51XCIgbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2tldmVudGhhbmRsZXIoc3VibWVudSlcIj5cclxuICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJzdWJtZW51Lmljb25cIj57eyBzdWJtZW51Lmljb24gfX08L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPnt7IHN1Ym1lbnUubGFiZWwgfX08L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L21hdC1tZW51PlxyXG4iXX0=