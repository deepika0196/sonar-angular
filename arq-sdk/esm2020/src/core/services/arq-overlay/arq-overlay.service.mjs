import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class ArqOverlayService {
    constructor(overlay) {
        this.overlay = overlay;
    }
    createOverlay(config) {
        return this.overlay.create(config);
    }
    attachTemplatePortal(overlayRef, templateRef, vcRef) {
        let templatePortal = new TemplatePortal(templateRef, vcRef);
        // console.log(templatePortal);
        overlayRef.attach(templatePortal);
    }
    positionGloballyCenter() {
        return this.overlay.position().global().centerHorizontally().centerVertically();
    }
}
ArqOverlayService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqOverlayService, deps: [{ token: i1.Overlay }], target: i0.ɵɵFactoryTarget.Injectable });
ArqOverlayService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqOverlayService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqOverlayService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLW92ZXJsYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2NvcmUvc2VydmljZXMvYXJxLW92ZXJsYXkvYXJxLW92ZXJsYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBaUMsTUFBTSxlQUFlLENBQUM7OztBQUcxRSxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFBRyxDQUFDO0lBQ3hDLGFBQWEsQ0FBQyxNQUFxQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvQkFBb0IsQ0FBQyxVQUFzQixFQUFFLFdBQTZCLEVBQUUsS0FBdUI7UUFDakcsSUFBSSxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVELCtCQUErQjtRQUMvQixVQUFVLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNsRixDQUFDOzs4R0FaVSxpQkFBaUI7a0hBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiwgUG9zaXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFycU92ZXJsYXlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XHJcbiAgY3JlYXRlT3ZlcmxheShjb25maWc6IE92ZXJsYXlDb25maWcpOiBPdmVybGF5UmVmIHtcclxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgfVxyXG4gIGF0dGFjaFRlbXBsYXRlUG9ydGFsKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgbGV0IHRlbXBsYXRlUG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRlbXBsYXRlUmVmLCB2Y1JlZik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0ZW1wbGF0ZVBvcnRhbCk7XHJcbiAgICBvdmVybGF5UmVmLmF0dGFjaCh0ZW1wbGF0ZVBvcnRhbCk7XHJcbiAgfVxyXG4gIHBvc2l0aW9uR2xvYmFsbHlDZW50ZXIoKTogUG9zaXRpb25TdHJhdGVneSB7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCkuY2VudGVySG9yaXpvbnRhbGx5KCkuY2VudGVyVmVydGljYWxseSgpO1xyXG4gIH1cclxufVxyXG4iXX0=