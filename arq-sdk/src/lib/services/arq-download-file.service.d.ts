import { ArqFileConfig } from '../interfaces/arq-file-config.interface';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ArqDownloadFileService {
    constructor();
    private _arqSpinnerService;
    textFileDownload(config: ArqFileConfig): void;
    private writeContents;
    textFileDownloadMultiple(configs: ArqFileConfig[], showSpinner?: boolean): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqDownloadFileService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArqDownloadFileService>;
}
