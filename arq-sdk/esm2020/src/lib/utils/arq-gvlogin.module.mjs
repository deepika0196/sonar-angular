import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ArqGvloginInterceptorService } from '../interceptors/interceptors';
import { ArqGvloginService } from '../services/services';
import * as i0 from "@angular/core";
import * as i1 from "@auth0/angular-jwt";
const securityProviders = [
    // Servicios de gvLogin
    { provide: ArqGvloginService, useClass: ArqGvloginService },
    //{ provide: AuthService, useClass: GvloginService, multi: true },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ArqGvloginInterceptorService,
        multi: true
    }
];
export function jwtOptionsFactory() {
    return {
        //whitelistedDomains: environment.gvlogin.whitelistedDomains,
        tokenGetter: tokenGetter
    };
}
export function tokenGetter() {
    return localStorage.getItem('gvlogin-token');
}
export class ArqGvLoginModule {
    static forRoot() {
        return {
            ngModule: ArqGvLoginModule,
            providers: securityProviders
        };
    }
}
ArqGvLoginModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvLoginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ArqGvLoginModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ArqGvLoginModule, imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        HttpClientModule, i1.JwtModule] });
ArqGvLoginModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvLoginModule, imports: [ReactiveFormsModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtOptionsFactory
            }
        })] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqGvLoginModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    exports: [],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        FormsModule,
                        HttpClientModule,
                        JwtModule.forRoot({
                            jwtOptionsProvider: {
                                provide: JWT_OPTIONS,
                                useFactory: jwtOptionsFactory
                            }
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWd2bG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL3V0aWxzL2FycS1ndmxvZ2luLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUV6RCxNQUFNLGlCQUFpQixHQUFHO0lBQ3hCLHVCQUF1QjtJQUN2QixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7SUFDM0Qsa0VBQWtFO0lBRWxFO1FBQ0UsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRixDQUFDO0FBRUYsTUFBTSxVQUFVLGlCQUFpQjtJQUMvQixPQUFPO1FBQ0wsNkRBQTZEO1FBQzdELFdBQVcsRUFBRSxXQUFXO0tBQ3pCLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBRSxDQUFDO0FBQ2hELENBQUM7QUFrQkQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxpQkFBaUI7U0FDN0IsQ0FBQztJQUNKLENBQUM7OzZHQU5VLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLFlBWnpCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjs4R0FTUCxnQkFBZ0IsWUFaekIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDaEIsa0JBQWtCLEVBQUU7Z0JBQ2xCLE9BQU8sRUFBRSxXQUFXO2dCQUNwQixVQUFVLEVBQUUsaUJBQWlCO2FBQzlCO1NBQ0YsQ0FBQzsyRkFHTyxnQkFBZ0I7a0JBaEI1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixTQUFTLENBQUMsT0FBTyxDQUFDOzRCQUNoQixrQkFBa0IsRUFBRTtnQ0FDbEIsT0FBTyxFQUFFLFdBQVc7Z0NBQ3BCLFVBQVUsRUFBRSxpQkFBaUI7NkJBQzlCO3lCQUNGLENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEp3dE1vZHVsZSwgSldUX09QVElPTlMgfSBmcm9tICdAYXV0aDAvYW5ndWxhci1qd3QnO1xyXG5pbXBvcnQgeyBBcnFHdmxvZ2luSW50ZXJjZXB0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJjZXB0b3JzL2ludGVyY2VwdG9ycyc7XHJcbmltcG9ydCB7IEFycUd2bG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2VydmljZXMnO1xyXG5cclxuY29uc3Qgc2VjdXJpdHlQcm92aWRlcnMgPSBbXHJcbiAgLy8gU2VydmljaW9zIGRlIGd2TG9naW5cclxuICB7IHByb3ZpZGU6IEFycUd2bG9naW5TZXJ2aWNlLCB1c2VDbGFzczogQXJxR3Zsb2dpblNlcnZpY2UgfSxcclxuICAvL3sgcHJvdmlkZTogQXV0aFNlcnZpY2UsIHVzZUNsYXNzOiBHdmxvZ2luU2VydmljZSwgbXVsdGk6IHRydWUgfSxcclxuXHJcbiAge1xyXG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICB1c2VDbGFzczogQXJxR3Zsb2dpbkludGVyY2VwdG9yU2VydmljZSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGp3dE9wdGlvbnNGYWN0b3J5KCkge1xyXG4gIHJldHVybiB7XHJcbiAgICAvL3doaXRlbGlzdGVkRG9tYWluczogZW52aXJvbm1lbnQuZ3Zsb2dpbi53aGl0ZWxpc3RlZERvbWFpbnMsXHJcbiAgICB0b2tlbkdldHRlcjogdG9rZW5HZXR0ZXJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5HZXR0ZXIoKTogc3RyaW5nIHtcclxuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2d2bG9naW4tdG9rZW4nKSE7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBleHBvcnRzOiBbXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgSnd0TW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICBqd3RPcHRpb25zUHJvdmlkZXI6IHtcclxuICAgICAgICBwcm92aWRlOiBKV1RfT1BUSU9OUyxcclxuICAgICAgICB1c2VGYWN0b3J5OiBqd3RPcHRpb25zRmFjdG9yeVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFycUd2TG9naW5Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8YW55PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQXJxR3ZMb2dpbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBzZWN1cml0eVByb3ZpZGVyc1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19