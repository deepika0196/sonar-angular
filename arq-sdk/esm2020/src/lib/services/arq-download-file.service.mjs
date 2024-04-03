import { Injectable, inject } from '@angular/core';
import { finalize, forkJoin, tap } from 'rxjs';
import { ArqSpinnerService } from './arq-spinner.service';
import * as i0 from "@angular/core";
export class ArqDownloadFileService {
    constructor() {
        this._arqSpinnerService = inject(ArqSpinnerService);
    }
    textFileDownload(config) {
        if (config) {
            config.action().subscribe((res) => {
                this.writeContents(res, `${config.name}.${config.type}`, config.contentType);
            });
        }
    }
    writeContents(content, fileName, contentType) {
        const a = document.createElement('a');
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    textFileDownloadMultiple(configs, showSpinner = true) {
        if (showSpinner) {
            this._arqSpinnerService.show();
        }
        return forkJoin(configs.map((config) => config.action().pipe(tap((res) => {
            this.writeContents(res, `${config.name}.${config.type}`, config.contentType);
        })))).pipe(finalize(() => {
            if (showSpinner) {
                this._arqSpinnerService.hide();
            }
        }));
    }
}
ArqDownloadFileService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDownloadFileService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ArqDownloadFileService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDownloadFileService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDownloadFileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWRvd25sb2FkLWZpbGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9zZXJ2aWNlcy9hcnEtZG93bmxvYWQtZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBYyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFLMUQsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQztRQUVRLHVCQUFrQixHQUFzQixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUYzRCxDQUFDO0lBSVQsZ0JBQWdCLENBQUMsTUFBcUI7UUFDM0MsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9FLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU8sYUFBYSxDQUFDLE9BQWlCLEVBQUUsUUFBZ0IsRUFBRSxXQUFtQjtRQUM1RSxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDdEIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVNLHdCQUF3QixDQUFDLE9BQXdCLEVBQUUsY0FBdUIsSUFBSTtRQUNuRixJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNoQztRQUNELE9BQU8sUUFBUSxDQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFxQixFQUFFLEVBQUUsQ0FDcEMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FDbEIsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRSxDQUFDLENBQUMsQ0FDSCxDQUNGLENBQ0YsQ0FBQyxJQUFJLENBQ0osUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoQztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzttSEF4Q1Usc0JBQXNCO3VIQUF0QixzQkFBc0IsY0FGckIsTUFBTTsyRkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFycUZpbGVDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FycS1maWxlLWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmaW5hbGl6ZSwgZm9ya0pvaW4sIHRhcCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcnFTcGlubmVyU2VydmljZSB9IGZyb20gJy4vYXJxLXNwaW5uZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFEb3dubG9hZEZpbGVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHByaXZhdGUgX2FycVNwaW5uZXJTZXJ2aWNlOiBBcnFTcGlubmVyU2VydmljZSA9IGluamVjdChBcnFTcGlubmVyU2VydmljZSk7XHJcblxyXG4gIHB1YmxpYyB0ZXh0RmlsZURvd25sb2FkKGNvbmZpZzogQXJxRmlsZUNvbmZpZykge1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICBjb25maWcuYWN0aW9uKCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMud3JpdGVDb250ZW50cyhyZXMsIGAke2NvbmZpZy5uYW1lfS4ke2NvbmZpZy50eXBlfWAsIGNvbmZpZy5jb250ZW50VHlwZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3cml0ZUNvbnRlbnRzKGNvbnRlbnQ6IEJsb2JQYXJ0LCBmaWxlTmFtZTogc3RyaW5nLCBjb250ZW50VHlwZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29uc3QgZmlsZSA9IG5ldyBCbG9iKFtjb250ZW50XSwgeyB0eXBlOiBjb250ZW50VHlwZSB9KTtcclxuICAgIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICBhLmRvd25sb2FkID0gZmlsZU5hbWU7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdGV4dEZpbGVEb3dubG9hZE11bHRpcGxlKGNvbmZpZ3M6IEFycUZpbGVDb25maWdbXSwgc2hvd1NwaW5uZXI6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmIChzaG93U3Bpbm5lcikge1xyXG4gICAgICB0aGlzLl9hcnFTcGlubmVyU2VydmljZS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ya0pvaW4oXHJcbiAgICAgIGNvbmZpZ3MubWFwKChjb25maWc6IEFycUZpbGVDb25maWcpID0+XHJcbiAgICAgICAgY29uZmlnLmFjdGlvbigpLnBpcGUoXHJcbiAgICAgICAgICB0YXAoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVDb250ZW50cyhyZXMsIGAke2NvbmZpZy5uYW1lfS4ke2NvbmZpZy50eXBlfWAsIGNvbmZpZy5jb250ZW50VHlwZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKS5waXBlKFxyXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNob3dTcGlubmVyKSB7XHJcbiAgICAgICAgICB0aGlzLl9hcnFTcGlubmVyU2VydmljZS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19