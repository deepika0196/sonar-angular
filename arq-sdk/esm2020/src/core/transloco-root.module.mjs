import { Injectable, isDevMode, NgModule } from '@angular/core';
import { translocoConfig, TranslocoModule, TRANSLOCO_CONFIG, TRANSLOCO_LOADER } from '@ngneat/transloco';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TranslocoHttpLoader {
    // TODO: cambiar a ArqHttpClient
    constructor(http) {
        this.http = http;
    }
    getTranslation(lang) {
        return this.http.get(`./assets/i18n/${lang}.json`);
    }
}
TranslocoHttpLoader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoHttpLoader, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
TranslocoHttpLoader.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoHttpLoader, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoHttpLoader, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
export class TranslocoRootModule {
}
TranslocoRootModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoRootModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TranslocoRootModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: TranslocoRootModule, exports: [TranslocoModule] });
TranslocoRootModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoRootModule, providers: [
        {
            provide: TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs: ['es', 'ca'],
                defaultLang: 'es',
                fallbackLang: 'es',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: !isDevMode()
            })
        },
        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
    ], imports: [TranslocoModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TranslocoRootModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [TranslocoModule],
                    providers: [
                        {
                            provide: TRANSLOCO_CONFIG,
                            useValue: translocoConfig({
                                availableLangs: ['es', 'ca'],
                                defaultLang: 'es',
                                fallbackLang: 'es',
                                // Remove this option if your application doesn't support changing language in runtime.
                                reRenderOnLangChange: true,
                                prodMode: !isDevMode()
                            })
                        },
                        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsb2NvLXJvb3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvY29yZS90cmFuc2xvY28tcm9vdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhFLE9BQU8sRUFFTCxlQUFlLEVBRWYsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDakIsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBRzNCLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsZ0NBQWdDO0lBQ2hDLFlBQTJCLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXhDLGNBQWMsQ0FBQyxJQUFZO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsaUJBQWlCLElBQUksT0FBTyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0hBTlUsbUJBQW1CO29IQUFuQixtQkFBbUIsY0FETixNQUFNOzJGQUNuQixtQkFBbUI7a0JBRC9CLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOztBQTJCbEMsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLFlBaEJwQixlQUFlO2lIQWdCZCxtQkFBbUIsYUFmbkI7UUFDVDtZQUNFLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUSxFQUFFLGVBQWUsQ0FBQztnQkFDeEIsY0FBYyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDNUIsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLFlBQVksRUFBRSxJQUFJO2dCQUNsQix1RkFBdUY7Z0JBQ3ZGLG9CQUFvQixFQUFFLElBQUk7Z0JBQzFCLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRTthQUN2QixDQUFDO1NBQ0g7UUFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7S0FDN0QsWUFkUyxlQUFlOzJGQWdCZCxtQkFBbUI7a0JBakIvQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFFBQVEsRUFBRSxlQUFlLENBQUM7Z0NBQ3hCLGNBQWMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Z0NBQzVCLFdBQVcsRUFBRSxJQUFJO2dDQUNqQixZQUFZLEVBQUUsSUFBSTtnQ0FDbEIsdUZBQXVGO2dDQUN2RixvQkFBb0IsRUFBRSxJQUFJO2dDQUMxQixRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUU7NkJBQ3ZCLENBQUM7eUJBQ0g7d0JBQ0QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO3FCQUM3RDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtcclxuICBUcmFuc2xhdGlvbixcclxuICB0cmFuc2xvY29Db25maWcsXHJcbiAgVHJhbnNsb2NvTG9hZGVyLFxyXG4gIFRyYW5zbG9jb01vZHVsZSxcclxuICBUUkFOU0xPQ09fQ09ORklHLFxyXG4gIFRSQU5TTE9DT19MT0FERVJcclxufSBmcm9tICdAbmduZWF0L3RyYW5zbG9jbyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsb2NvSHR0cExvYWRlciBpbXBsZW1lbnRzIFRyYW5zbG9jb0xvYWRlciB7XHJcbiAgLy8gVE9ETzogY2FtYmlhciBhIEFycUh0dHBDbGllbnRcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFRyYW5zbGF0aW9uPihgLi9hc3NldHMvaTE4bi8ke2xhbmd9Lmpzb25gKTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW1RyYW5zbG9jb01vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IFRSQU5TTE9DT19DT05GSUcsXHJcbiAgICAgIHVzZVZhbHVlOiB0cmFuc2xvY29Db25maWcoe1xyXG4gICAgICAgIGF2YWlsYWJsZUxhbmdzOiBbJ2VzJywgJ2NhJ10sXHJcbiAgICAgICAgZGVmYXVsdExhbmc6ICdlcycsXHJcbiAgICAgICAgZmFsbGJhY2tMYW5nOiAnZXMnLFxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGlzIG9wdGlvbiBpZiB5b3VyIGFwcGxpY2F0aW9uIGRvZXNuJ3Qgc3VwcG9ydCBjaGFuZ2luZyBsYW5ndWFnZSBpbiBydW50aW1lLlxyXG4gICAgICAgIHJlUmVuZGVyT25MYW5nQ2hhbmdlOiB0cnVlLFxyXG4gICAgICAgIHByb2RNb2RlOiAhaXNEZXZNb2RlKClcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB7IHByb3ZpZGU6IFRSQU5TTE9DT19MT0FERVIsIHVzZUNsYXNzOiBUcmFuc2xvY29IdHRwTG9hZGVyIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xvY29Sb290TW9kdWxlIHt9XHJcbiJdfQ==