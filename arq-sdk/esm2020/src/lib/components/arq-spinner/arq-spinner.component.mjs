import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/arq-overlay/arq-overlay.service";
import * as i2 from "../../services/arq-spinner.service";
import * as i3 from "@angular/material/progress-spinner";
export class ArqSpinnerComponent {
    constructor(vcRef, overlayService, spinnerService, _changeDetector) {
        this.vcRef = vcRef;
        this.overlayService = overlayService;
        this.spinnerService = spinnerService;
        this._changeDetector = _changeDetector;
        this.diameter = 100;
        this.mode = 'determinate';
        this.backdropEnabled = true;
        this.positionGloballyCenter = true;
        this.displayProgressSpinner = false;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        // Config for Overlay Service
        this.progressSpinnerOverlayConfig = {
            hasBackdrop: this.backdropEnabled
        };
        if (this.positionGloballyCenter) {
            this.progressSpinnerOverlayConfig['positionStrategy'] = this.overlayService.positionGloballyCenter();
        }
        // Create Overlay for progress spinner
        this.overlayRef = this.overlayService.createOverlay(this.progressSpinnerOverlayConfig);
        // console.log(this.overlayRef);
        this.spinnerService.state().subscribe((observer) => {
            // console.log(observer);
            // this.displayProgressSpinner = observer;
            // this._changeDetector.detectChanges();
            this.spinnerShow(observer);
        });
    }
    ngDoCheck() {
        // Based on status of displayProgressSpinner attach/detach overlay to progress spinner template
        // this.spinnerShow();
    }
    spinnerShow(val) {
        this.overlayRef?.detach();
        if (val && this.progressSpinnerRef) {
            this.overlayService.attachTemplatePortal(this.overlayRef, this.progressSpinnerRef, this.vcRef);
        }
    }
}
ArqSpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerComponent, deps: [{ token: i0.ViewContainerRef }, { token: i1.ArqOverlayService }, { token: i2.ArqSpinnerService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
ArqSpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ArqSpinnerComponent, selector: "arq-spinner", inputs: { color: "color", diameter: "diameter", mode: "mode", value: "value", backdropEnabled: "backdropEnabled", positionGloballyCenter: "positionGloballyCenter", displayProgressSpinner: "displayProgressSpinner" }, viewQueries: [{ propertyName: "progressSpinnerRef", first: true, predicate: ["progressSpinnerRef"], descendants: true }], ngImport: i0, template: "<ng-template #progressSpinnerRef>\r\n  <mat-progress-spinner [color]=\"color\" [diameter]=\"diameter\" [mode]=\"mode\" [value]=\"value\"> </mat-progress-spinner>\r\n</ng-template>\r\n", dependencies: [{ kind: "component", type: i3.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'arq-spinner', encapsulation: ViewEncapsulation.None, template: "<ng-template #progressSpinnerRef>\r\n  <mat-progress-spinner [color]=\"color\" [diameter]=\"diameter\" [mode]=\"mode\" [value]=\"value\"> </mat-progress-spinner>\r\n</ng-template>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i1.ArqOverlayService }, { type: i2.ArqSpinnerService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { color: [{
                type: Input
            }], diameter: [{
                type: Input
            }], mode: [{
                type: Input
            }], value: [{
                type: Input
            }], backdropEnabled: [{
                type: Input
            }], positionGloballyCenter: [{
                type: Input
            }], displayProgressSpinner: [{
                type: Input
            }], progressSpinnerRef: [{
                type: ViewChild,
                args: ['progressSpinnerRef']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLXNwaW5uZXIvYXJxLXNwaW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLXNwaW5uZXIvYXJxLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFxQixTQUFTLEVBQUUsS0FBSyxFQUF1QixTQUFTLEVBQW9CLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVl6SSxNQUFNLE9BQU8sbUJBQW1CO0lBZTlCLFlBQ1UsS0FBdUIsRUFDdkIsY0FBaUMsRUFDakMsY0FBaUMsRUFDakMsZUFBa0M7UUFIbEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFqQm5DLGFBQVEsR0FBWSxHQUFHLENBQUM7UUFDeEIsU0FBSSxHQUF3QixhQUFhLENBQUM7UUFFMUMsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLDJCQUFzQixHQUFZLEtBQUssQ0FBQztJQWE5QyxDQUFDO0lBRUosUUFBUSxLQUFVLENBQUM7SUFFbkIsZUFBZTtRQUNiLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsNEJBQTRCLEdBQUc7WUFDbEMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ2xDLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsNEJBQTRCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDdEc7UUFDRCxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN2RixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFpQixFQUFFLEVBQUU7WUFDMUQseUJBQXlCO1lBQ3pCLDBDQUEwQztZQUMxQyx3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxTQUFTO1FBQ1AsK0ZBQStGO1FBQy9GLHNCQUFzQjtJQUN4QixDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQWE7UUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEc7SUFDSCxDQUFDOztnSEFwRFUsbUJBQW1CO29HQUFuQixtQkFBbUIscVlDYmhDLHlMQUdBOzJGRFVhLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxhQUFhLGlCQUVSLGlCQUFpQixDQUFDLElBQUk7dU1BRzVCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxzQkFBc0I7c0JBQTlCLEtBQUs7Z0JBQ0csc0JBQXNCO3NCQUE5QixLQUFLO2dCQUdFLGtCQUFrQjtzQkFEekIsU0FBUzt1QkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NTcGlubmVyTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xyXG5cclxuaW1wb3J0IHsgQXJxT3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2FycS1vdmVybGF5L2FycS1vdmVybGF5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcnFTcGlubmVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FycS1zcGlubmVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcnEtc3Bpbm5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FycS1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjb2xvcj86IFRoZW1lUGFsZXR0ZTtcclxuICBASW5wdXQoKSBkaWFtZXRlcj86IG51bWJlciA9IDEwMDtcclxuICBASW5wdXQoKSBtb2RlOiBQcm9ncmVzc1NwaW5uZXJNb2RlID0gJ2RldGVybWluYXRlJztcclxuICBASW5wdXQoKSB2YWx1ZT86IG51bWJlcjtcclxuICBASW5wdXQoKSBiYWNrZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uR2xvYmFsbHlDZW50ZXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGRpc3BsYXlQcm9ncmVzc1NwaW5uZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncHJvZ3Jlc3NTcGlubmVyUmVmJylcclxuICBwcml2YXRlIHByb2dyZXNzU3Bpbm5lclJlZjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBwcm9ncmVzc1NwaW5uZXJPdmVybGF5Q29uZmlnITogT3ZlcmxheUNvbmZpZztcclxuICBwcml2YXRlIG92ZXJsYXlSZWYhOiBPdmVybGF5UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG92ZXJsYXlTZXJ2aWNlOiBBcnFPdmVybGF5U2VydmljZSxcclxuICAgIHByaXZhdGUgc3Bpbm5lclNlcnZpY2U6IEFycVNwaW5uZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIENvbmZpZyBmb3IgT3ZlcmxheSBTZXJ2aWNlXHJcbiAgICB0aGlzLnByb2dyZXNzU3Bpbm5lck92ZXJsYXlDb25maWcgPSB7XHJcbiAgICAgIGhhc0JhY2tkcm9wOiB0aGlzLmJhY2tkcm9wRW5hYmxlZFxyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnBvc2l0aW9uR2xvYmFsbHlDZW50ZXIpIHtcclxuICAgICAgdGhpcy5wcm9ncmVzc1NwaW5uZXJPdmVybGF5Q29uZmlnWydwb3NpdGlvblN0cmF0ZWd5J10gPSB0aGlzLm92ZXJsYXlTZXJ2aWNlLnBvc2l0aW9uR2xvYmFsbHlDZW50ZXIoKTtcclxuICAgIH1cclxuICAgIC8vIENyZWF0ZSBPdmVybGF5IGZvciBwcm9ncmVzcyBzcGlubmVyXHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXlTZXJ2aWNlLmNyZWF0ZU92ZXJsYXkodGhpcy5wcm9ncmVzc1NwaW5uZXJPdmVybGF5Q29uZmlnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub3ZlcmxheVJlZik7XHJcbiAgICB0aGlzLnNwaW5uZXJTZXJ2aWNlLnN0YXRlKCkuc3Vic2NyaWJlKChvYnNlcnZlcjogYm9vbGVhbikgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhvYnNlcnZlcik7XHJcbiAgICAgIC8vIHRoaXMuZGlzcGxheVByb2dyZXNzU3Bpbm5lciA9IG9ic2VydmVyO1xyXG4gICAgICAvLyB0aGlzLl9jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMuc3Bpbm5lclNob3cob2JzZXJ2ZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIC8vIEJhc2VkIG9uIHN0YXR1cyBvZiBkaXNwbGF5UHJvZ3Jlc3NTcGlubmVyIGF0dGFjaC9kZXRhY2ggb3ZlcmxheSB0byBwcm9ncmVzcyBzcGlubmVyIHRlbXBsYXRlXHJcbiAgICAvLyB0aGlzLnNwaW5uZXJTaG93KCk7XHJcbiAgfVxyXG5cclxuICBzcGlubmVyU2hvdyh2YWwgOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWY/LmRldGFjaCgpO1xyXG4gICAgaWYgKHZhbCAmJiB0aGlzLnByb2dyZXNzU3Bpbm5lclJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlTZXJ2aWNlLmF0dGFjaFRlbXBsYXRlUG9ydGFsKHRoaXMub3ZlcmxheVJlZiwgdGhpcy5wcm9ncmVzc1NwaW5uZXJSZWYsIHRoaXMudmNSZWYpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI3Byb2dyZXNzU3Bpbm5lclJlZj5cclxuICA8bWF0LXByb2dyZXNzLXNwaW5uZXIgW2NvbG9yXT1cImNvbG9yXCIgW2RpYW1ldGVyXT1cImRpYW1ldGVyXCIgW21vZGVdPVwibW9kZVwiIFt2YWx1ZV09XCJ2YWx1ZVwiPiA8L21hdC1wcm9ncmVzcy1zcGlubmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=