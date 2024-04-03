import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';
import { ArqDialogComponent } from '../components/arq-dialog/arq-dialog.component';
import * as i0 from "@angular/core";
export declare class ArqDialogService {
    private dialog;
    private transloco;
    constructor(dialog: MatDialog, transloco: TranslocoService);
    dialogRef: MatDialogRef<ArqDialogComponent>[];
    /**
     * Crea y muestra el dialog
     * @param data
     * @param component
     * @param width
     * @returns Devuelve el observable que retorna dialogRef
     */
    open(data: any, component?: any, opciones?: MatDialogConfig): Observable<any>;
    /**
     * Cierra y elimina el ultimo dialog, dando por confirmado y mandando los datos
     * @param data
     */
    confirmed(data: any): void;
    /**
     * Cierra y elimina el ultimo dialog
     */
    close(): void;
    /**
     * Elimina los dialogs cerrados del array
     */
    popClosedDialogs(): void;
    /********************/
    /********************/
    /**
     * Crea y muestra un modal de exito sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openSuccess(_message: string, _title?: string): Observable<any>;
    /**
     * Crea y muestra un modal de alerta sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openAlert(_message: string, _title?: string): Observable<any>;
    /**
     * Crea y muestra un modal de alerta sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openError(_message: string, _title?: string): Observable<any>;
    /**
     * Crea y muestra un modal de confirmacion sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openConfirm(_message: string, _title?: string): Observable<any>;
    /**
     * Crea y muestra un modal de prompt sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openPrompt(_message: string, _title?: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArqDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArqDialogService>;
}
