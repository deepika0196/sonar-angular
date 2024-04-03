import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Base service for every CRUD Service
 */
export class Service {
    constructor() { }
    getURIEntityBase(host, params) {
        return host + '/api/' + this.getURIEntity(params);
    }
    getURIEntityBasePublica(host, params) {
        return host + '/apipublica/' + this.getURIEntity(params);
    }
}
Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Service });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Service, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FycS1zZGsvc3JjL2xpYi9zZXJ2aWNlcy9hcnEtc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDOztHQUVHO0FBRUgsTUFBTSxPQUFnQixPQUFPO0lBQzNCLGdCQUFlLENBQUM7SUFFTixnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsTUFBa0I7UUFDekQsT0FBTyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVTLHVCQUF1QixDQUFDLElBQVksRUFBRSxNQUFrQjtRQUNoRSxPQUFPLElBQUksR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDOztvR0FUbUIsT0FBTzt3R0FBUCxPQUFPOzJGQUFQLE9BQU87a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQmFzZSBzZXJ2aWNlIGZvciBldmVyeSBDUlVEIFNlcnZpY2VcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHJvdGVjdGVkIGdldFVSSUVudGl0eUJhc2UoaG9zdDogc3RyaW5nLCBwYXJhbXM/OiB1bmRlZmluZWQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGhvc3QgKyAnL2FwaS8nICsgdGhpcy5nZXRVUklFbnRpdHkocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRVUklFbnRpdHlCYXNlUHVibGljYShob3N0OiBzdHJpbmcsIHBhcmFtcz86IHVuZGVmaW5lZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gaG9zdCArICcvYXBpcHVibGljYS8nICsgdGhpcy5nZXRVUklFbnRpdHkocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRVUklFbnRpdHkocGFyYW1zPzogdW5kZWZpbmVkKTogc3RyaW5nO1xyXG59XHJcbiJdfQ==