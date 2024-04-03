import { Component, ContentChildren, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { timer } from 'rxjs';
import { ArqTabItemComponent } from '../arq-tab-item/arq-tab-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tabs";
export class ArqTabGroupComponent {
    constructor() {
        this.selectedTabChangeOutput = new EventEmitter();
        this.selectedIndexChange = new EventEmitter();
    }
    ngAfterContentInit() {
        timer(0).subscribe(() => {
            this.appItems = this.contentItems;
        });
    }
    changeTab(tabIdx) {
        this.tabGroup.selectedIndex = tabIdx;
    }
    getSelectedIndex() {
        return this.tabGroup?.selectedIndex || 0;
    }
    selectedTabChange($event) {
        this.selectedTabChangeOutput.emit($event.index);
        if (this._selectedTabChange) {
            this._selectedTabChange($event.index);
        }
    }
}
ArqTabGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ArqTabGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqTabGroupComponent, selector: "arq-tab-group", inputs: { _selectedTabChange: ["selectedTabChange", "_selectedTabChange"] }, outputs: { selectedTabChangeOutput: "selectedTabChangeOutput", selectedIndexChange: "selectedIndexChange" }, queries: [{ propertyName: "contentItems", predicate: ArqTabItemComponent }], viewQueries: [{ propertyName: "tabGroup", first: true, predicate: MatTabGroup, descendants: true }], ngImport: i0, template: "<mat-tab-group\r\n  (selectedTabChange)=\"this.selectedTabChange($event)\"\r\n  (selectedIndexChange)=\"selectedIndexChange.next($event)\">\r\n  <mat-tab *ngFor=\"let item of appItems\">\r\n    <ng-template mat-tab-label>\r\n      <ng-container *ngTemplateOutlet=\"item.itemHeader.headerTemplate\"></ng-container>\r\n    </ng-template>\r\n    <ng-container *ngTemplateOutlet=\"item.contentTemplate\"></ng-container>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".mdc-tab-indicator--active>.mdc-tab-indicator{border:1px #11799b solid}.mat-mdc-tab-body{border-top:1px #11799b solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:0}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border:none}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i2.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i2.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqTabGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-tab-group', encapsulation: ViewEncapsulation.None, template: "<mat-tab-group\r\n  (selectedTabChange)=\"this.selectedTabChange($event)\"\r\n  (selectedIndexChange)=\"selectedIndexChange.next($event)\">\r\n  <mat-tab *ngFor=\"let item of appItems\">\r\n    <ng-template mat-tab-label>\r\n      <ng-container *ngTemplateOutlet=\"item.itemHeader.headerTemplate\"></ng-container>\r\n    </ng-template>\r\n    <ng-container *ngTemplateOutlet=\"item.contentTemplate\"></ng-container>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n", styles: [".mdc-tab-indicator--active>.mdc-tab-indicator{border:1px #11799b solid}.mat-mdc-tab-body{border-top:1px #11799b solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:0}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border:none}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { contentItems: [{
                type: ContentChildren,
                args: [ArqTabItemComponent]
            }], _selectedTabChange: [{
                type: Input,
                args: ['selectedTabChange']
            }], selectedTabChangeOutput: [{
                type: Output,
                args: ['selectedTabChangeOutput']
            }], selectedIndexChange: [{
                type: Output,
                args: ['selectedIndexChange']
            }], tabGroup: [{
                type: ViewChild,
                args: [MatTabGroup]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXRhYi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtdGFiL2FycS10YWItZ3JvdXAvYXJxLXRhYi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvY29tcG9uZW50cy9hcnEtdGFiL2FycS10YWItZ3JvdXAvYXJxLXRhYi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBcUIsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEUsT0FBTyxFQUFtQixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7QUFRN0UsTUFBTSxPQUFPLG9CQUFvQjtJQVUvQjtRQUxtQyw0QkFBdUIsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMvRSx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUl2RixDQUFDO0lBRWhCLGtCQUFrQjtRQUNoQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBeUI7UUFDekMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7O2lIQS9CVSxvQkFBb0I7cUdBQXBCLG9CQUFvQiw0UUFDZCxtQkFBbUIsdUVBT3pCLFdBQVcsZ0RDN0J4Qix5Y0FVQTsyRkRXYSxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0UsZUFBZSxpQkFHVixpQkFBaUIsQ0FBQyxJQUFJOzBFQUdTLFlBQVk7c0JBQXpELGVBQWU7dUJBQUMsbUJBQW1CO2dCQUdSLGtCQUFrQjtzQkFBN0MsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBQ1MsdUJBQXVCO3NCQUF6RCxNQUFNO3VCQUFDLHlCQUF5QjtnQkFDRixtQkFBbUI7c0JBQWpELE1BQU07dUJBQUMscUJBQXFCO2dCQUVMLFFBQVE7c0JBQS9CLFNBQVM7dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRUYWJDaGFuZ2VFdmVudCwgTWF0VGFiR3JvdXAgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCB0aW1lciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcnFUYWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vYXJxLXRhYi1pdGVtL2FycS10YWItaXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcnEtdGFiLWdyb3VwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXJxLXRhYi1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXJxLXRhYi1ncm91cC5jb21wb25lbnQuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJxVGFiR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKEFycVRhYkl0ZW1Db21wb25lbnQpIHByaXZhdGUgY29udGVudEl0ZW1zPzogUXVlcnlMaXN0PEFycVRhYkl0ZW1Db21wb25lbnQ+O1xyXG4gIHB1YmxpYyBhcHBJdGVtcz86IFF1ZXJ5TGlzdDxBcnFUYWJJdGVtQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCdzZWxlY3RlZFRhYkNoYW5nZScpIF9zZWxlY3RlZFRhYkNoYW5nZSE6IChfdGFiOiBudW1iZXIpID0+IGFueTtcclxuICBAT3V0cHV0KCdzZWxlY3RlZFRhYkNoYW5nZU91dHB1dCcpIHNlbGVjdGVkVGFiQ2hhbmdlT3V0cHV0OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoJ3NlbGVjdGVkSW5kZXhDaGFuZ2UnKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBAVmlld0NoaWxkKE1hdFRhYkdyb3VwKSB0YWJHcm91cCE6IE1hdFRhYkdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRpbWVyKDApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBwSXRlbXMgPSB0aGlzLmNvbnRlbnRJdGVtcztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVGFiKHRhYklkeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnRhYkdyb3VwLnNlbGVjdGVkSW5kZXggPSB0YWJJZHg7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJHcm91cD8uc2VsZWN0ZWRJbmRleCB8fCAwO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0ZWRUYWJDaGFuZ2UoJGV2ZW50OiBNYXRUYWJDaGFuZ2VFdmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFRhYkNoYW5nZU91dHB1dC5lbWl0KCRldmVudC5pbmRleCk7XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRUYWJDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWJDaGFuZ2UoJGV2ZW50LmluZGV4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG1hdC10YWItZ3JvdXBcclxuICAoc2VsZWN0ZWRUYWJDaGFuZ2UpPVwidGhpcy5zZWxlY3RlZFRhYkNoYW5nZSgkZXZlbnQpXCJcclxuICAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XCJzZWxlY3RlZEluZGV4Q2hhbmdlLm5leHQoJGV2ZW50KVwiPlxyXG4gIDxtYXQtdGFiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGFwcEl0ZW1zXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0uaXRlbUhlYWRlci5oZWFkZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLmNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gIDwvbWF0LXRhYj5cclxuPC9tYXQtdGFiLWdyb3VwPlxyXG4iXX0=