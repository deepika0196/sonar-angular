import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
export class ArqAutocompleteService {
    constructor() { }
    _filter(options, value, lang) {
        const filterValue = value ? value.toString().toLowerCase() : '';
        let result = [];
        options.forEach((opt) => {
            opt.forEach((el) => {
                if (lang == 'ca') {
                    if (el?.descriptionV?.toLowerCase().includes(filterValue)) {
                        result.push(el);
                    }
                }
                else {
                    if (el?.description?.toLowerCase().includes(filterValue)) {
                        result.push(el);
                    }
                }
            });
        });
        return of(result);
    }
}
ArqAutocompleteService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ArqAutocompleteService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqAutocompleteService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWF1dG9jb21wbGV0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL2NvbXBvbmVudHMvYXJxLWF1dG9jb21wbGV0ZS9hcnEtYXV0b2NvbXBsZXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUt0QyxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLGdCQUFlLENBQUM7SUFFVCxPQUFPLENBQUMsT0FBWSxFQUFFLEtBQWEsRUFBRSxJQUFTO1FBQ25ELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFaEUsSUFBSSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBRXZCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUMzQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtvQkFDaEIsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDakI7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDakI7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7bUhBdkJVLHNCQUFzQjt1SEFBdEIsc0JBQXNCLGNBRnJCLE1BQU07MkZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycUF1dG9jb21wbGV0ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIF9maWx0ZXIob3B0aW9uczogYW55LCB2YWx1ZTogc3RyaW5nLCBsYW5nOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZSA/IHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA6ICcnO1xyXG5cclxuICAgIGxldCByZXN1bHQ6IGFueVtdID0gW107XHJcblxyXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHQ6IGFueSkgPT4ge1xyXG4gICAgICBvcHQuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChsYW5nID09ICdjYScpIHtcclxuICAgICAgICAgIGlmIChlbD8uZGVzY3JpcHRpb25WPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChlbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChlbD8uZGVzY3JpcHRpb24/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG9mKHJlc3VsdCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==