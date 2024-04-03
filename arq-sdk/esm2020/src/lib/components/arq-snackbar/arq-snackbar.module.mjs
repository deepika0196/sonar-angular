import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ArqSnackBarComponent } from './arq-snackbar.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export class ArqSnackBarModule {
}
ArqSnackBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqSnackBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarModule, declarations: [ArqSnackBarComponent], imports: [CommonModule, BrowserAnimationsModule, i1.ToastrModule], exports: [ArqSnackBarComponent] });
ArqSnackBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarModule, imports: [CommonModule, BrowserAnimationsModule, ToastrModule.forRoot()] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqSnackBarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqSnackBarComponent],
                    exports: [ArqSnackBarComponent],
                    imports: [CommonModule, BrowserAnimationsModule, ToastrModule.forRoot()],
                    entryComponents: [ArqSnackBarComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXNuYWNrYmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS1zbmFja2Jhci9hcnEtc25hY2tiYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQVFoRSxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBTGIsb0JBQW9CLGFBRXpCLFlBQVksRUFBRSx1QkFBdUIsOEJBRHJDLG9CQUFvQjsrR0FJbkIsaUJBQWlCLFlBSGxCLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxZQUFZLENBQUMsT0FBTyxFQUFFOzJGQUc1RCxpQkFBaUI7a0JBTjdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMvQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN4RSxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFRvYXN0ck1vZHVsZSB9IGZyb20gJ25neC10b2FzdHInO1xyXG5pbXBvcnQgeyBBcnFTbmFja0JhckNvbXBvbmVudCB9IGZyb20gJy4vYXJxLXNuYWNrYmFyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FycVNuYWNrQmFyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQXJxU25hY2tCYXJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBUb2FzdHJNb2R1bGUuZm9yUm9vdCgpXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtBcnFTbmFja0JhckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFycVNuYWNrQmFyTW9kdWxlIHt9XHJcbiJdfQ==