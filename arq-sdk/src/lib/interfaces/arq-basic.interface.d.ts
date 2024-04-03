import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
export interface ArqPageableRequest {
    page: number;
    size: number;
    sort?: string;
    sortName?: string;
    sortDirection?: string;
    filter?: string;
    filterCol?: string;
}
export interface ArqPageableResponse {
    content: Array<any>;
    pageable: {
        sort: ArqPageableResponseSort;
        offset: number;
        pageNumber: number;
        pageSize: number;
        unpaged: boolean;
        paged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: ArqPageableResponseSort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
interface ArqPageableResponseSort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
}
export interface ArqDependentWatch {
    field: string;
    watch: boolean;
}
export type ArqAutocompleteSearchFn = (req: ArqPageableRequest, form?: FormGroup) => Observable<ArqPageableResponse>;
export {};
