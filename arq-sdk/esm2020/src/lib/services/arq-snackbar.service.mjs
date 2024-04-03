import { Injectable } from '@angular/core';
import { ArqSnackbarEmitedMessage } from '../utils/arq-snackbar-emited-message';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export class ArqSnackBarService {
    constructor(toastr) {
        this.toastr = toastr;
        this.optionsDefault = {
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-bottom-right'
        };
        this.lastSuccess = new ArqSnackbarEmitedMessage(undefined, undefined);
        this.lastError = new ArqSnackbarEmitedMessage(undefined, undefined);
        this.lastInfo = new ArqSnackbarEmitedMessage(undefined, undefined);
        this.lastWarning = new ArqSnackbarEmitedMessage(undefined, undefined);
    }
    showSuccess(message, title, options) {
        if (this.lastSuccess.shouldEmit(message, title)) {
            this.toastr.success(message, title, options ? options : this.optionsDefault);
        }
    }
    showError(message, title, options) {
        if (this.lastError.shouldEmit(message, title)) {
            this.toastr.error(message, title, options ? options : this.optionsDefault);
        }
    }
    showInfo(message, title, options) {
        if (this.lastInfo.shouldEmit(message, title)) {
            this.toastr.info(message, title, options ? options : this.optionsDefault);
        }
    }
    showWarning(message, title, options) {
        if (this.lastWarning.shouldEmit(message, title)) {
            this.toastr.warning(message, title, options ? options : this.optionsDefault);
        }
    }
}
ArqSnackBarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarService, deps: [{ token: i1.ToastrService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqSnackBarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ToastrService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXNuYWNrYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcnEtc2RrL3NyYy9saWIvc2VydmljZXMvYXJxLXNuYWNrYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7O0FBS2hGLE1BQU0sT0FBTyxrQkFBa0I7SUFZN0IsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQVh6QyxtQkFBYyxHQUF1QjtZQUNuQyxXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixhQUFhLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7UUFFRixnQkFBVyxHQUE2QixJQUFJLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzRixjQUFTLEdBQTZCLElBQUksd0JBQXdCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pGLGFBQVEsR0FBNkIsSUFBSSx3QkFBd0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeEYsZ0JBQVcsR0FBNkIsSUFBSSx3QkFBd0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUU3QyxXQUFXLENBQUMsT0FBMkIsRUFBRSxLQUF5QixFQUFFLE9BQXdDO1FBQzFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7SUFFRCxTQUFTLENBQUMsT0FBMkIsRUFBRSxLQUF5QixFQUFFLE9BQXdDO1FBQ3hHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM1RTtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsT0FBMkIsRUFBRSxLQUF5QixFQUFFLE9BQXdDO1FBQ3ZHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBMkIsRUFBRSxLQUF5QixFQUFFLE9BQXdDO1FBQzFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7OytHQXBDVSxrQkFBa0I7bUhBQWxCLGtCQUFrQixjQUZqQixNQUFNOzJGQUVQLGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcclxuaW1wb3J0IHsgQXJxU25hY2tCb3hPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hcnEtc25hY2tiYXItb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBBcnFTbmFja2JhckVtaXRlZE1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9hcnEtc25hY2tiYXItZW1pdGVkLW1lc3NhZ2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJxU25hY2tCYXJTZXJ2aWNlIHtcclxuICBvcHRpb25zRGVmYXVsdDogQXJxU25hY2tCb3hPcHRpb25zID0ge1xyXG4gICAgY2xvc2VCdXR0b246IHRydWUsXHJcbiAgICBwcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIHBvc2l0aW9uQ2xhc3M6ICd0b2FzdC1ib3R0b20tcmlnaHQnXHJcbiAgfTtcclxuXHJcbiAgbGFzdFN1Y2Nlc3M6IEFycVNuYWNrYmFyRW1pdGVkTWVzc2FnZSA9IG5ldyBBcnFTbmFja2JhckVtaXRlZE1lc3NhZ2UodW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gIGxhc3RFcnJvcjogQXJxU25hY2tiYXJFbWl0ZWRNZXNzYWdlID0gbmV3IEFycVNuYWNrYmFyRW1pdGVkTWVzc2FnZSh1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgbGFzdEluZm86IEFycVNuYWNrYmFyRW1pdGVkTWVzc2FnZSA9IG5ldyBBcnFTbmFja2JhckVtaXRlZE1lc3NhZ2UodW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gIGxhc3RXYXJuaW5nOiBBcnFTbmFja2JhckVtaXRlZE1lc3NhZ2UgPSBuZXcgQXJxU25hY2tiYXJFbWl0ZWRNZXNzYWdlKHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdHI6IFRvYXN0clNlcnZpY2UpIHt9XHJcblxyXG4gIHNob3dTdWNjZXNzKG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCwgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCwgb3B0aW9ucz86IEFycVNuYWNrQm94T3B0aW9ucyB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHRoaXMubGFzdFN1Y2Nlc3Muc2hvdWxkRW1pdChtZXNzYWdlLCB0aXRsZSkpIHtcclxuICAgICAgdGhpcy50b2FzdHIuc3VjY2VzcyhtZXNzYWdlLCB0aXRsZSwgb3B0aW9ucyA/IG9wdGlvbnMgOiB0aGlzLm9wdGlvbnNEZWZhdWx0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dFcnJvcihtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQsIHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQsIG9wdGlvbnM/OiBBcnFTbmFja0JveE9wdGlvbnMgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh0aGlzLmxhc3RFcnJvci5zaG91bGRFbWl0KG1lc3NhZ2UsIHRpdGxlKSkge1xyXG4gICAgICB0aGlzLnRvYXN0ci5lcnJvcihtZXNzYWdlLCB0aXRsZSwgb3B0aW9ucyA/IG9wdGlvbnMgOiB0aGlzLm9wdGlvbnNEZWZhdWx0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dJbmZvKG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCwgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCwgb3B0aW9ucz86IEFycVNuYWNrQm94T3B0aW9ucyB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHRoaXMubGFzdEluZm8uc2hvdWxkRW1pdChtZXNzYWdlLCB0aXRsZSkpIHtcclxuICAgICAgdGhpcy50b2FzdHIuaW5mbyhtZXNzYWdlLCB0aXRsZSwgb3B0aW9ucyA/IG9wdGlvbnMgOiB0aGlzLm9wdGlvbnNEZWZhdWx0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dXYXJuaW5nKG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCwgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCwgb3B0aW9ucz86IEFycVNuYWNrQm94T3B0aW9ucyB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHRoaXMubGFzdFdhcm5pbmcuc2hvdWxkRW1pdChtZXNzYWdlLCB0aXRsZSkpIHtcclxuICAgICAgdGhpcy50b2FzdHIud2FybmluZyhtZXNzYWdlLCB0aXRsZSwgb3B0aW9ucyA/IG9wdGlvbnMgOiB0aGlzLm9wdGlvbnNEZWZhdWx0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19