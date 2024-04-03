import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { ArqUploadFilesDialogComponent } from '../components/arq-upload-files-dialog/arq-upload-files-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class ArqUploadFilesDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(options) {
        this.dialogRef = this.dialog.open(ArqUploadFilesDialogComponent, {
            data: {
                cancelBtn: options.cancelBtn,
                confirmBtn: options.confirmBtn,
                textCancel: options.textCancel,
                textConfirm: options.textConfirm,
                config: options.config,
                label: options.label
            }
        });
    }
    confirmed() {
        return this.dialogRef.afterClosed().pipe(take(1), map(res => {
            return res;
        }));
    }
    close() {
        this.dialogRef.close();
    }
}
ArqUploadFilesDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogService, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable });
ArqUploadFilesDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqUploadFilesDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXVwbG9hZC1maWxlcy1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9zZXJ2aWNlcy9hcnEtdXBsb2FkLWZpbGVzLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQzs7O0FBS3hILE1BQU0sT0FBTywyQkFBMkI7SUFDdEMsWUFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFHbEMsSUFBSSxDQUFDLE9BT1g7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFO1lBQy9ELElBQUksRUFBRTtnQkFDSixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7Z0JBQzVCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtnQkFDOUIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO2dCQUM5QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7Z0JBQ2hDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDdEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLFNBQVM7UUFDZCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUN0QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1IsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O3dIQWxDVSwyQkFBMkI7NEhBQTNCLDJCQUEyQixjQUYxQixNQUFNOzJGQUVQLDJCQUEyQjtrQkFIdkMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFycVVwbG9hZEZpbGVzRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9hcnEtdXBsb2FkLWZpbGVzLWRpYWxvZy9hcnEtdXBsb2FkLWZpbGVzLWRpYWxvZy5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJxVXBsb2FkRmlsZXNEaWFsb2dTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxyXG4gIGRpYWxvZ1JlZiE6IE1hdERpYWxvZ1JlZjxBcnFVcGxvYWRGaWxlc0RpYWxvZ0NvbXBvbmVudD47XHJcblxyXG4gIHB1YmxpYyBvcGVuKG9wdGlvbnM6IHtcclxuICAgIGNhbmNlbEJ0bjogYm9vbGVhbjtcclxuICAgIGNvbmZpcm1CdG46IGJvb2xlYW47XHJcbiAgICB0ZXh0Q2FuY2VsOiBzdHJpbmc7XHJcbiAgICB0ZXh0Q29uZmlybTogc3RyaW5nO1xyXG4gICAgY29uZmlnOiBhbnk7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gIH0pIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBcnFVcGxvYWRGaWxlc0RpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY2FuY2VsQnRuOiBvcHRpb25zLmNhbmNlbEJ0bixcclxuICAgICAgICBjb25maXJtQnRuOiBvcHRpb25zLmNvbmZpcm1CdG4sXHJcbiAgICAgICAgdGV4dENhbmNlbDogb3B0aW9ucy50ZXh0Q2FuY2VsLFxyXG4gICAgICAgIHRleHRDb25maXJtOiBvcHRpb25zLnRleHRDb25maXJtLFxyXG4gICAgICAgIGNvbmZpZzogb3B0aW9ucy5jb25maWcsXHJcbiAgICAgICAgbGFiZWw6IG9wdGlvbnMubGFiZWxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjb25maXJtZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnBpcGUoXHJcbiAgICAgIHRha2UoMSksXHJcbiAgICAgIG1hcChyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19