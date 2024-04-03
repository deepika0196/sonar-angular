import { Injectable } from '@angular/core';
import { Subject, distinctUntilChanged } from 'rxjs';
import * as i0 from "@angular/core";
export class ArqSpinnerService {
    constructor() {
        this.loading = new Subject();
    }
    show() {
        this.loading.next(true);
    }
    hide() {
        setTimeout(() => {
            this.loading.next(false);
        }, 500);
    }
    state() {
        return this.loading.asObservable().pipe(distinctUntilChanged());
    }
}
ArqSpinnerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ArqSpinnerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSpinnerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXNwaW5uZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9zZXJ2aWNlcy9hcnEtc3Bpbm5lci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHakUsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QjtRQUZRLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO0lBRTFCLENBQUM7SUFFaEIsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJO1FBQ0YsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7OEdBakJVLGlCQUFpQjtrSEFBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcnFTcGlubmVyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBsb2FkaW5nID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy5sb2FkaW5nLm5leHQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZy5uZXh0KGZhbHNlKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG5cclxuICBzdGF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLmxvYWRpbmcuYXNPYnNlcnZhYmxlKCkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcclxuICB9XHJcbn1cclxuIl19