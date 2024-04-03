import { HttpClient, HttpContext, HttpEvent, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
interface Environment {
    name: string;
    production: boolean;
    isDebugMode: boolean;
    pai: Pai;
    gvlogin: Gvlogin;
    settings: Settings;
    locale: Locale;
}
interface Pai {
    aplicacion: string;
    apiKey: string;
}
interface Gvlogin {
    enable: boolean;
    aplicacion: string;
    url: string;
    tokenKey: string;
    tokenPeticionMarte: string;
    whitelistedDomains: string[];
}
interface Settings {
    api: Api;
    name: string;
    host: string;
    hostDynamic: string;
}
interface Api {
    version: string;
    url: string;
}
interface Locale {
    default: string;
    cultures: string[];
}
export declare class ArqHttpClient {
    protected _httpClient: HttpClient;
    private _env;
    constructor(_httpClient: HttpClient, _env: Environment);
    private _addGvLoginContext;
    /**
     * Sends an `HttpRequest` and returns a stream of `HttpEvent`s.
     *
     * @return An `Observable` of the response, with the response body as a stream of `HttpEvent`s.
     */
    request<R>(req: HttpRequest<any>): Observable<HttpEvent<R>>;
    /**
     * Constructs a request that interprets the body as an `ArrayBuffer` and returns the response in
     * an `ArrayBuffer`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a request that interprets the body as a blob and returns
     * the response as a blob.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type `Blob`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<Blob>;
    /**
     * Constructs a request that interprets the body as a text string and
     * returns a string value.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<string>;
    /**
     * Constructs a request that interprets the body as an `ArrayBuffer` and returns the
     * the full event stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as an array of `HttpEvent`s for
     * the request.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        observe: 'events';
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a request that interprets the body as a `Blob` and returns
     * the full event stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with the response body of type `Blob`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a request which interprets the body as a text string and returns the full event
     * stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with the response body of type string.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a request which interprets the body as a JavaScript object and returns the full
     * event stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the  public request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with the response body of type `Object`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        reportProgress?: boolean | undefined;
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<any>>;
    /**
     * Constructs a request which interprets the body as a JavaScript object and returns the full
     * event stream.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with the response body of type `R`.
     */
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        reportProgress?: boolean | undefined;
        observe: 'events';
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<R>>;
    /**
     * Constructs a request which interprets the body as an `ArrayBuffer`
     * and returns the full `HttpResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse`, with the response body as an `ArrayBuffer`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a request which interprets the body as a `Blob` and returns the full `HttpResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse`, with the response body of type `Blob`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a request which interprets the body as a text stream and returns the full
     * `HttpResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the HTTP response, with the response body of type string.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a request which interprets the body as a JavaScript object and returns the full
     * `HttpResponse`.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HttpResponse`,
     * with the response body of type `Object`.
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        reportProgress?: boolean | undefined;
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a request which interprets the body as a JavaScript object and returns
     * the full `HttpResponse` with the response body in the requested type.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return  An `Observable` of the full `HttpResponse`, with the response body of type `R`.
     */
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        reportProgress?: boolean | undefined;
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<R>>;
    /**
     * Constructs a request which interprets the body as a JavaScript object and returns the full
     * `HttpResponse` as a JavaScript object.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse`, with the response body of type `Object`.
     */
    request(method: string, url: string, options?: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        responseType?: 'json' | undefined;
        reportProgress?: boolean | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<Object>;
    /**
     * Constructs a request which interprets the body as a JavaScript object
     * with the response body of the requested type.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse`, with the response body of type `R`.
     */
    request<R>(method: string, url: string, options?: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        responseType?: 'json' | undefined;
        reportProgress?: boolean | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<R>;
    /**
     * Constructs a request where response type and requested observable are not known statically.
     *
     * @param method  The HTTP method.
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the requested response, with body of type `any`.
     */
    request(method: string, url: string, options?: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        observe?: 'body' | 'events' | 'response' | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'arraybuffer' | 'blob' | 'text' | 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<any>;
    /**
     * Constructs a `DELETE` request that interprets the body as an `ArrayBuffer`
     *  and returns the response as an `ArrayBuffer`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return  An `Observable` of the response body as an `ArrayBuffer`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `DELETE` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response body as a `Blob`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<Blob>;
    /**
     * Constructs a `DELETE` request that interprets the body as a text string and returns
     * a string.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<string>;
    /**
     * Constructs a `DELETE` request that interprets the body as an `ArrayBuffer`
     *  and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with response body as an `ArrayBuffer`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a `Blob`
     *  and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all the `HttpEvent`s for the request, with the response body as a
     * `Blob`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a text string
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request, with the response
     * body of type string.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `DELETE` request that interprets the body as JSON
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request, with response body of
     * type `Object`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `DELETE`request that interprets the body as JSON
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all the `HttpEvent`s for the request, with a response
     * body in the requested type.
     */
    delete<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `DELETE` request that interprets the body as an `ArrayBuffer` and returns
     *  the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HttpResponse`, with the response body as an `ArrayBuffer`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a `Blob` and returns the full
     * `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse`, with the response body of type `Blob`.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `DELETE` request that interprets the body as a text stream and
     *  returns the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HttpResponse`, with the response body of type string.
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `DELETE` request the interprets the body as a JavaScript object and returns
     * the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse`, with the response body of type `Object`.
     *
     */
    delete(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `DELETE` request that interprets the body as JSON
     * and returns the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse`, with the response body of the requested type.
     */
    delete<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
        body?: any;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `DELETE` request that interprets the body as JSON and
     * returns the response body as an object parsed from JSON.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type `Object`.
     */
    delete(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
        body?: any;
    } | undefined): Observable<Object>;
    /**
     * Constructs a DELETE request that interprets the body as JSON and returns
     * the response in a given type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse`, with response body in the requested type.
     */
    delete<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
        body?: any;
    } | undefined): Observable<T>;
    /**
     * Constructs a `GET` request that interprets the body as an `ArrayBuffer` and returns the
     * response in an `ArrayBuffer`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `GET` request that interprets the body as a `Blob`
     * and returns the response as a `Blob`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<Blob>;
    /**
     * Constructs a `GET` request that interprets the body as a text string
     * and returns the response as a string value.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<string>;
    /**
     * Constructs a `GET` request that interprets the body as an `ArrayBuffer` and returns
     *  the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request, with the response
     * body as an `ArrayBuffer`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `GET` request that interprets the body as a `Blob` and
     * returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `GET` request that interprets the body as a text string and returns
     * the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `GET` request that interprets the body as JSON
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type `Object`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `GET` request that interprets the body as JSON and returns the full
     * event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with a response body in the requested type.
     */
    get<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `GET` request that interprets the body as an `ArrayBuffer` and
     * returns the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `GET` request that interprets the body as a `Blob` and
     * returns the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body as a `Blob`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `GET` request that interprets the body as a text stream and
     * returns the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body of type string.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `GET` request that interprets the body as JSON and
     * returns the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HttpResponse`,
     * with the response body of type `Object`.
     */
    get(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `GET` request that interprets the body as JSON and
     * returns the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HttpResponse` for the request,
     * with a response body in the requested type.
     */
    get<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `GET` request that interprets the body as JSON and
     * returns the response body as an object parsed from JSON.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     *
     * @return An `Observable` of the response body as a JavaScript object.
     */
    get(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<Object>;
    /**
     * Constructs a `GET` request that interprets the body as JSON and returns
     * the response body in a given type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse`, with a response body in the requested type.
     */
    get<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<T>;
    /**
     * Constructs a `HEAD` request that interprets the body as an `ArrayBuffer` and
     * returns the response as an `ArrayBuffer`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `HEAD` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return  An `Observable` of the response, with the response body as a `Blob`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<Blob>;
    /**
     * Constructs a `HEAD` request that interprets the body as a text string and returns the response
     * as a string value.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<string>;
    /**
     * Constructs a `HEAD` request that interprets the body as an  `ArrayBuffer`
     *  and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with the response body as an `ArrayBuffer`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a `Blob` and
     * returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with the response body as a `Blob`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a text string
     * and returns the full event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request, with the response body of type
     * string.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `HEAD` request that interprets the body as JSON
     * and returns the full HTTP event stream.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of all `HttpEvent`s for the request, with a response body of
     * type `Object`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `HEAD` request that interprets the body as JSON and
     * returns the full event stream.
     *
     * @return An `Observable` of all the `HttpEvent`s for the request,
     * with a response body in the requested type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     */
    head<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `HEAD` request that interprets the body as an `ArrayBuffer`
     *  and returns the full HTTP response.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `HEAD` request that interprets the body as a `Blob` and returns
     * the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body as a blob.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `HEAD` request that interprets the body as text stream
     * and returns the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body of type string.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `HEAD` request that interprets the body as JSON and
     * returns the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body of type `Object`.
     */
    head(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `HEAD` request that interprets the body as JSON
     * and returns the full `HttpResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body of the requested type.
     */
    head<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<T>>;
    /**
      * Constructs a `HEAD` request that interprets the body as JSON and
      * returns the response body as an object parsed from JSON.
      *
      * @param url     The endpoint URL.
      * @param options The HTTP options to send with the request.
      *
      * @return An `Observable` of the response, with the response body as an object parsed from JSON.
      */
    head(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<Object>;
    /**
     * Constructs a `HEAD` request that interprets the body as JSON and returns
     * the response in a given type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body of the given type.
     */
    head<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<T>;
    /**
     * Constructs a `JSONP` request for the given URL and name of the callback parameter.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     * @return An `Observable` of the response object, with response body as an object.
     */
    jsonp(url: string, callbackParam: string): Observable<Object>;
    /**
     * Constructs a `JSONP` request for the given URL and name of the callback parameter.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     * You must install a suitable interceptor, such as one provided by `HttpClientJsonpModule`.
     * If no such interceptor is reached,
     * then the `JSONP` request can be rejected by the configured backend.
     *
     * @return An `Observable` of the response object, with response body in the requested type.
     */
    jsonp<T>(url: string, callbackParam: string): Observable<T>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as an
     * `ArrayBuffer` and returns the response as an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<Blob>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a text string and
     * returns a string value.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body of type string.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<string>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as an `ArrayBuffer`
     *  and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return  An `Observable` of all `HttpEvent`s for the request,
     * with the response body as an `ArrayBuffer`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a `Blob` and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with the response body as a `Blob`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a text string
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvent`s for the request,
     * with the response body of type string.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as JSON
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvent`s for the request with the response
     * body of type `Object`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as JSON and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvent`s for the request,
     * with a response body in the requested type.
     */
    options<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as an `ArrayBuffer`
     *  and returns the full HTTP response.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as a `Blob`
     *  and returns the full `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body as a `Blob`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as text stream
     * and returns the full `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body of type string.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as JSON
     * and returns the full `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body of type `Object`.
     */
    options(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as JSON and
     * returns the full `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body in the requested type.
     */
    options<T>(url: string, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<T>>;
    /**
      * Constructs an `OPTIONS` request that interprets the body as JSON and returns the
      * response body as an object parsed from JSON.
      *
      * @param url The endpoint URL.
      * @param options HTTP options.
      *
      * @return An `Observable` of the response, with the response body as an object parsed from JSON.
      */
    options(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<Object>;
    /**
     * Constructs an `OPTIONS` request that interprets the body as JSON and returns the
     * response in a given type.
     *
     * @param url The endpoint URL.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse`, with a response body of the given type.
     */
    options<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<T>;
    /**
     * Constructs a `PATCH` request that interprets the body as an `ArrayBuffer` and returns
     * the response as an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    patch(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `PATCH` request that interprets the body as a `Blob` and returns the response
     * as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    patch(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<Blob>;
    /**
     * Constructs a `PATCH` request that interprets the body as a text string and
     * returns the response as a string value.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with a response body of type string.
     */
    patch(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<string>;
    /**
     * Constructs a `PATCH` request that interprets the body as an `ArrayBuffer` and
     *  returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvent`s for the request,
     * with the response body as an `ArrayBuffer`.
     */
    patch(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a `Blob`
     *  and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvent`s for the request, with the
     * response body as `Blob`.
     */
    patch(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a text string and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvent`s for the request, with a
     * response body of type string.
     */
    patch(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `PATCH` request that interprets the body as JSON
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvent`s for the request,
     * with a response body of type `Object`.
     */
    patch(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `PATCH` request that interprets the body as JSON
     * and returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of all the `HttpEvent`s for the request,
     * with a response body in the requested type.
     */
    patch<T>(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `PATCH` request that interprets the body as an `ArrayBuffer`
     *  and returns the full `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     * with the response body as an `ArrayBuffer`.
     */
    patch(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a `Blob` and returns the full
     * `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     * with the response body as a `Blob`.
     */
    patch(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `PATCH` request that interprets the body as a text stream and returns the
     * full `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     * with a response body of type string.
     */
    patch(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `PATCH` request that interprets the body as JSON
     * and returns the full `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body in the requested type.
     */
    patch(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `PATCH` request that interprets the body as JSON
     * and returns the full `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body in the given type.
     */
    patch<T>(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<T>>;
    /**
      * Constructs a `PATCH` request that interprets the body as JSON and
      * returns the response body as an object parsed from JSON.
      *
      * @param url The endpoint URL.
      * @param body The resources to edit.
      * @param options HTTP options.
      *
      * @return An `Observable` of the response, with the response body as an object parsed from JSON.
      */
    patch(url: string, body: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<Object>;
    /**
     * Constructs a `PATCH` request that interprets the body as JSON
     * and returns the response in a given type.
     *
     * @param url The endpoint URL.
     * @param body The resources to edit.
     * @param options HTTP options.
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     * with a response body in the given type.
     */
    patch<T>(url: string, body: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<T>;
    /**
     * Constructs a `POST` request that interprets the body as an `ArrayBuffer` and returns
     * an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options.
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    post(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `POST` request that interprets the body as a `Blob` and returns the
     * response as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    post(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<Blob>;
    /**
     * Constructs a `POST` request that interprets the body as a text string and
     * returns the response as a string value.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with a response body of type string.
     */
    post(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<string>;
    /**
     * Constructs a `POST` request that interprets the body as an `ArrayBuffer` and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with the response body as an `ArrayBuffer`.
     */
    post(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `POST` request that interprets the body as a `Blob`
     * and returns the response in an observable of the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvent`s for the request, with the response body as `Blob`.
     */
    post(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `POST` request that interprets the body as a text string and returns the full
     * event stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of all `HttpEvent`s for the request,
     * with a response body of type string.
     */
    post(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a POST request that interprets the body as JSON and returns the full
     * event stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of all `HttpEvent`s for the request,
     * with a response body of type `Object`.
     */
    post(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a POST request that interprets the body as JSON and returns the full
     * event stream.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with a response body in the requested type.
     */
    post<T>(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a POST request that interprets the body as an `ArrayBuffer`
     *  and returns the full `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of the `HttpResponse` for the request, with the response body as an
     * `ArrayBuffer`.
     */
    post(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `POST` request that interprets the body as a `Blob` and returns the full
     * `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body as a `Blob`.
     */
    post(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `POST` request that interprets the body as a text stream and returns
     * the full `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of the `HttpResponse` for the request,
     * with a response body of type string.
     */
    post(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `POST` request that interprets the body as JSON
     * and returns the full `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HttpResponse` for the request, with a response body of type
     * `Object`.
     */
    post(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `POST` request that interprets the body as JSON and returns the
     * full `HttpResponse`.
     *
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HttpResponse` for the request, with a response body in the
     * requested type.
     */
    post<T>(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `POST` request that interprets the body as JSON
     * and returns the response body as an object parsed from JSON.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as an object parsed from JSON.
     */
    post(url: string, body: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<Object>;
    /**
     * Constructs a `POST` request that interprets the body as JSON
     * and returns an observable of the response.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return  An `Observable` of the `HttpResponse` for the request, with a response body in the
     * requested type.
     */
    post<T>(url: string, body: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<T>;
    /**
     * Constructs a `PUT` request that interprets the body as an `ArrayBuffer` and returns the
     * response as an `ArrayBuffer`.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as an `ArrayBuffer`.
     */
    put(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<ArrayBuffer>;
    /**
     * Constructs a `PUT` request that interprets the body as a `Blob` and returns
     * the response as a `Blob`.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with the response body as a `Blob`.
     */
    put(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<Blob>;
    /**
     * Constructs a `PUT` request that interprets the body as a text string and
     * returns the response as a string value.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response, with a response body of type string.
     */
    put(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<string>;
    /**
     * Constructs a `PUT` request that interprets the body as an `ArrayBuffer` and
     * returns the full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with the response body as an `ArrayBuffer`.
     */
    put(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * Constructs a `PUT` request that interprets the body as a `Blob` and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with the response body as a `Blob`.
     */
    put(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Blob>>;
    /**
     * Constructs a `PUT` request that interprets the body as a text string and returns the full event
     * stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvent`s for the request, with a response body
     * of type string.
     */
    put(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<string>>;
    /**
     * Constructs a `PUT` request that interprets the body as JSON and returns the full
     * event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvent`s for the request, with a response body of
     * type `Object`.
     */
    put(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<Object>>;
    /**
     * Constructs a `PUT` request that interprets the body as JSON and returns the
     * full event stream.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of all `HttpEvent`s for the request,
     * with a response body in the requested type.
     */
    put<T>(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'events';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpEvent<T>>;
    /**
     * Constructs a `PUT` request that interprets the body as an
     * `ArrayBuffer` and returns an observable of the full HTTP response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HttpResponse` for the request, with the response body as an
     * `ArrayBuffer`.
     */
    put(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'arraybuffer';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * Constructs a `PUT` request that interprets the body as a `Blob` and returns the
     * full HTTP response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body as a `Blob`.
     */
    put(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'blob';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Blob>>;
    /**
     * Constructs a `PUT` request that interprets the body as a text stream and returns the
     * full HTTP response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HttpResponse` for the request, with a response body of type
     * string.
     */
    put(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType: 'text';
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<string>>;
    /**
     * Constructs a `PUT` request that interprets the body as JSON and returns the full
     * HTTP response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HttpResponse` for the request, with a response body
     * of type 'Object`.
     */
    put(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<Object>>;
    /**
     * Constructs a `PUT` request that interprets the body as an instance of the requested type and
     * returns the full HTTP response.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with a response body in the requested type.
     */
    put<T>(url: string, body: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        observe: 'response';
        context?: HttpContext | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    }): Observable<HttpResponse<T>>;
    /**
     * Constructs a `PUT` request that interprets the body as JSON
     * and returns an observable of JavaScript object.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the response as a JavaScript object.
     */
    put(url: string, body: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<Object>;
    /**
     * Constructs a `PUT` request that interprets the body as an instance of the requested type
     * and returns an observable of the requested type.
     *
     * @param url The endpoint URL.
     * @param body The resources to add/update.
     * @param options HTTP options
     *
     * @return An `Observable` of the requested type.
     */
    put<T>(url: string, body: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        } | undefined;
        context?: HttpContext | undefined;
        observe?: 'body' | undefined;
        params?: HttpParams | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        reportProgress?: boolean | undefined;
        responseType?: 'json' | undefined;
        withCredentials?: boolean | undefined;
    } | undefined): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqHttpClient, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArqHttpClient>;
}
export {};
