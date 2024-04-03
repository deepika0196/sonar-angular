import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { ArqBadgeComponent } from './arq-badge.component';
import * as i0 from "@angular/core";
export class ArqBadgeModule {
}
ArqBadgeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBadgeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqBadgeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqBadgeModule, declarations: [ArqBadgeComponent], imports: [MatBadgeModule, MatIconModule, ReactiveFormsModule, CommonModule], exports: [ArqBadgeComponent] });
ArqBadgeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBadgeModule, imports: [MatBadgeModule, MatIconModule, ReactiveFormsModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqBadgeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ArqBadgeComponent],
                    exports: [ArqBadgeComponent],
                    imports: [MatBadgeModule, MatIconModule, ReactiveFormsModule, CommonModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWJhZGdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9jb21wb25lbnRzL2FycS1iYWRnZS9hcnEtYmFkZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBTzFELE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBSlYsaUJBQWlCLGFBRXRCLGNBQWMsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxhQURoRSxpQkFBaUI7NEdBR2hCLGNBQWMsWUFGZixjQUFjLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFlBQVk7MkZBRS9ELGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUM1QixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFlBQVksQ0FBQztpQkFDNUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXRCYWRnZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JhZGdlJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBBcnFCYWRnZUNvbXBvbmVudCB9IGZyb20gJy4vYXJxLWJhZGdlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FycUJhZGdlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQXJxQmFkZ2VDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtNYXRCYWRnZU1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJxQmFkZ2VNb2R1bGUge31cclxuIl19