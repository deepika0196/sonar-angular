import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { ArqDialogComponent } from '../components/arq-dialog/arq-dialog.component';
import { ArqPromptDialogComponent } from '../components/arq-dialog/dialogs/arq-dialog-prompt.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@ngneat/transloco";
export class ArqDialogService {
    constructor(dialog, transloco) {
        this.dialog = dialog;
        this.transloco = transloco;
        this.dialogRef = [];
    }
    /**
     * Crea y muestra el dialog
     * @param data
     * @param component
     * @param width
     * @returns Devuelve el observable que retorna dialogRef
     */
    open(data, component = null, opciones) {
        if (!component)
            component = ArqDialogComponent;
        this.popClosedDialogs();
        this.dialogRef.push(this.dialog.open(component, {
            autoFocus: false,
            data: data,
            panelClass: 'custom-class-dialog',
            disableClose: true,
            ...opciones
        }));
        return this.dialogRef[this.dialogRef.length - 1].afterClosed().pipe(take(1));
    }
    /**
     * Cierra y elimina el ultimo dialog, dando por confirmado y mandando los datos
     * @param data
     */
    confirmed(data) {
        this.popClosedDialogs();
        this.dialogRef[this.dialogRef.length - 1].close(data);
        this.dialogRef.pop();
    }
    /**
     * Cierra y elimina el ultimo dialog
     */
    close() {
        this.popClosedDialogs();
        this.dialogRef[this.dialogRef.length - 1].close();
        this.dialogRef.pop();
    }
    /**
     * Elimina los dialogs cerrados del array
     */
    popClosedDialogs() {
        this.dialogRef.forEach((dialog, index) => {
            if (dialog.getState() !== 0 /* MatDialogState.OPEN */) {
                this.dialogRef.splice(index, 1);
            }
        });
    }
    /********************/
    // FEATURED DIALOGS //
    /********************/
    /**
     * Crea y muestra un modal de exito sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openSuccess(_message, _title) {
        return this.open({
            confirmBtn: true,
            message: _message,
            title: _title || this.transloco.translate('GENERIC.SUCCESS'),
            type: 'success',
            icon: 'done',
            color: 'text-success',
            textConfirm: this.transloco.translate('GENERIC.CONTINUE')
        });
    }
    /**
     * Crea y muestra un modal de alerta sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openAlert(_message, _title) {
        return this.open({
            confirmBtn: true,
            message: _message,
            title: _title || this.transloco.translate('GENERIC.ALERT'),
            type: 'alert',
            icon: 'warning',
            color: 'text-warning',
            textConfirm: this.transloco.translate('GENERIC.CONTINUE')
        });
    }
    /**
     * Crea y muestra un modal de alerta sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openError(_message, _title) {
        return this.open({
            confirmBtn: true,
            message: _message,
            title: _title || this.transloco.translate('GENERIC.ERROR'),
            type: 'error',
            icon: 'error',
            color: 'text-danger',
            textConfirm: this.transloco.translate('GENERIC.CONTINUE')
        });
    }
    /**
     * Crea y muestra un modal de confirmacion sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openConfirm(_message, _title) {
        return this.open({
            cancelBtn: true,
            confirmBtn: true,
            message: _message,
            title: _title || this.transloco.translate('GENERIC.ATTENTION'),
            type: 'alert',
            icon: 'help',
            color: 'text-warning',
            textConfirm: this.transloco.translate('GENERIC.ACCEPT'),
            textCancel: this.transloco.translate('GENERIC.CANCEL')
        });
    }
    /**
     * Crea y muestra un modal de prompt sencillo
     * @param _message Mensaje
     * @param _title Titulo
     * @returns Devuelve el observable que retorna dialogRef
     */
    openPrompt(_message, _title) {
        return this.open({ message: _message, title: _title || '' }, ArqPromptDialogComponent);
    }
}
ArqDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogService, deps: [{ token: i1.MatDialog }, { token: i2.TranslocoService }], target: i0.ɵɵFactoryTarget.Injectable });
ArqDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ArqDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }, { type: i2.TranslocoService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL3NlcnZpY2VzL2FycS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBTyxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQzs7OztBQUt4RyxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQTJCLE1BQWlCLEVBQVUsU0FBMkI7UUFBdEQsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzFFLGNBQVMsR0FBdUMsRUFBRSxDQUFDO0lBRDBCLENBQUM7SUFHckY7Ozs7OztPQU1HO0lBQ0ksSUFBSSxDQUFDLElBQVMsRUFBRSxZQUFpQixJQUFJLEVBQUUsUUFBMEI7UUFDdEUsSUFBSSxDQUFDLFNBQVM7WUFBRSxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFFL0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxQixTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxxQkFBcUI7WUFDakMsWUFBWSxFQUFFLElBQUk7WUFDbEIsR0FBRyxRQUFRO1NBQ1osQ0FBQyxDQUNILENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FB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Q2YsU0FBUyxFQUFFLElBQUk7WUFDZixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsUUFBUTtZQUNqQixLQUFLLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDO1lBQzlELElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsY0FBYztZQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7WUFDdkQsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1NBQ3ZELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFVBQVUsQ0FBQyxRQUFnQixFQUFFLE1BQWU7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxJQUFJLEVBQUUsRUFBRSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDekYsQ0FBQzs7NkdBaEpVLGdCQUFnQjtpSEFBaEIsZ0JBQWdCLGNBRmYsTUFBTTsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ0NvbmZpZywgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNsb2NvU2VydmljZSB9IGZyb20gJ0BuZ25lYXQvdHJhbnNsb2NvJztcclxuXHJcbmltcG9ydCB7IEFycURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXJxLWRpYWxvZy9hcnEtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFycVByb21wdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXJxLWRpYWxvZy9kaWFsb2dzL2FycS1kaWFsb2ctcHJvbXB0LmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnFEaWFsb2dTZXJ2aWNlIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZywgcHJpdmF0ZSB0cmFuc2xvY286IFRyYW5zbG9jb1NlcnZpY2UpIHt9XHJcbiAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFycURpYWxvZ0NvbXBvbmVudD5bXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhIHkgbXVlc3RyYSBlbCBkaWFsb2dcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqIEBwYXJhbSBjb21wb25lbnRcclxuICAgKiBAcGFyYW0gd2lkdGhcclxuICAgKiBAcmV0dXJucyBEZXZ1ZWx2ZSBlbCBvYnNlcnZhYmxlIHF1ZSByZXRvcm5hIGRpYWxvZ1JlZlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcGVuKGRhdGE6IGFueSwgY29tcG9uZW50OiBhbnkgPSBudWxsLCBvcGNpb25lcz86IE1hdERpYWxvZ0NvbmZpZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAoIWNvbXBvbmVudCkgY29tcG9uZW50ID0gQXJxRGlhbG9nQ29tcG9uZW50O1xyXG5cclxuICAgIHRoaXMucG9wQ2xvc2VkRGlhbG9ncygpO1xyXG5cclxuICAgIHRoaXMuZGlhbG9nUmVmLnB1c2goXHJcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oY29tcG9uZW50LCB7XHJcbiAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tY2xhc3MtZGlhbG9nJyxcclxuICAgICAgICBkaXNhYmxlQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgLi4ub3BjaW9uZXNcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gdGhpcy5kaWFsb2dSZWZbdGhpcy5kaWFsb2dSZWYubGVuZ3RoIC0gMV0uYWZ0ZXJDbG9zZWQoKS5waXBlKHRha2UoMSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2llcnJhIHkgZWxpbWluYSBlbCB1bHRpbW8gZGlhbG9nLCBkYW5kbyBwb3IgY29uZmlybWFkbyB5IG1hbmRhbmRvIGxvcyBkYXRvc1xyXG4gICAqIEBwYXJhbSBkYXRhXHJcbiAgICovXHJcbiAgcHVibGljIGNvbmZpcm1lZChkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMucG9wQ2xvc2VkRGlhbG9ncygpO1xyXG4gICAgdGhpcy5kaWFsb2dSZWZbdGhpcy5kaWFsb2dSZWYubGVuZ3RoIC0gMV0uY2xvc2UoZGF0YSk7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5wb3AoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENpZXJyYSB5IGVsaW1pbmEgZWwgdWx0aW1vIGRpYWxvZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMucG9wQ2xvc2VkRGlhbG9ncygpO1xyXG4gICAgdGhpcy5kaWFsb2dSZWZbdGhpcy5kaWFsb2dSZWYubGVuZ3RoIC0gMV0uY2xvc2UoKTtcclxuICAgIHRoaXMuZGlhbG9nUmVmLnBvcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRWxpbWluYSBsb3MgZGlhbG9ncyBjZXJyYWRvcyBkZWwgYXJyYXlcclxuICAgKi9cclxuICBwdWJsaWMgcG9wQ2xvc2VkRGlhbG9ncygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmZvckVhY2goKGRpYWxvZywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGRpYWxvZy5nZXRTdGF0ZSgpICE9PSBNYXREaWFsb2dTdGF0ZS5PUEVOKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLy8gRkVBVFVSRUQgRElBTE9HUyAvL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYSB5IG11ZXN0cmEgdW4gbW9kYWwgZGUgZXhpdG8gc2VuY2lsbG9cclxuICAgKiBAcGFyYW0gX21lc3NhZ2UgTWVuc2FqZVxyXG4gICAqIEBwYXJhbSBfdGl0bGUgVGl0dWxvXHJcbiAgICogQHJldHVybnMgRGV2dWVsdmUgZWwgb2JzZXJ2YWJsZSBxdWUgcmV0b3JuYSBkaWFsb2dSZWZcclxuICAgKi9cclxuICBwdWJsaWMgb3BlblN1Y2Nlc3MoX21lc3NhZ2U6IHN0cmluZywgX3RpdGxlPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLm9wZW4oe1xyXG4gICAgICBjb25maXJtQnRuOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiBfbWVzc2FnZSxcclxuICAgICAgdGl0bGU6IF90aXRsZSB8fCB0aGlzLnRyYW5zbG9jby50cmFuc2xhdGUoJ0dFTkVSSUMuU1VDQ0VTUycpLFxyXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgIGljb246ICdkb25lJyxcclxuICAgICAgY29sb3I6ICd0ZXh0LXN1Y2Nlc3MnLFxyXG4gICAgICB0ZXh0Q29uZmlybTogdGhpcy50cmFuc2xvY28udHJhbnNsYXRlKCdHRU5FUklDLkNPTlRJTlVFJylcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYSB5IG11ZXN0cmEgdW4gbW9kYWwgZGUgYWxlcnRhIHNlbmNpbGxvXHJcbiAgICogQHBhcmFtIF9tZXNzYWdlIE1lbnNhamVcclxuICAgKiBAcGFyYW0gX3RpdGxlIFRpdHVsb1xyXG4gICAqIEByZXR1cm5zIERldnVlbHZlIGVsIG9ic2VydmFibGUgcXVlIHJldG9ybmEgZGlhbG9nUmVmXHJcbiAgICovXHJcbiAgcHVibGljIG9wZW5BbGVydChfbWVzc2FnZTogc3RyaW5nLCBfdGl0bGU/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3Blbih7XHJcbiAgICAgIGNvbmZpcm1CdG46IHRydWUsXHJcbiAgICAgIG1lc3NhZ2U6IF9tZXNzYWdlLFxyXG4gICAgICB0aXRsZTogX3RpdGxlIHx8IHRoaXMudHJhbnNsb2NvLnRyYW5zbGF0ZSgnR0VORVJJQy5BTEVSVCcpLFxyXG4gICAgICB0eXBlOiAnYWxlcnQnLFxyXG4gICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgIGNvbG9yOiAndGV4dC13YXJuaW5nJyxcclxuICAgICAgdGV4dENvbmZpcm06IHRoaXMudHJhbnNsb2NvLnRyYW5zbGF0ZSgnR0VORVJJQy5DT05USU5VRScpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWEgeSBtdWVzdHJhIHVuIG1vZGFsIGRlIGFsZXJ0YSBzZW5jaWxsb1xyXG4gICAqIEBwYXJhbSBfbWVzc2FnZSBNZW5zYWplXHJcbiAgICogQHBhcmFtIF90aXRsZSBUaXR1bG9cclxuICAgKiBAcmV0dXJucyBEZXZ1ZWx2ZSBlbCBvYnNlcnZhYmxlIHF1ZSByZXRvcm5hIGRpYWxvZ1JlZlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcGVuRXJyb3IoX21lc3NhZ2U6IHN0cmluZywgX3RpdGxlPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLm9wZW4oe1xyXG4gICAgICBjb25maXJtQnRuOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiBfbWVzc2FnZSxcclxuICAgICAgdGl0bGU6IF90aXRsZSB8fCB0aGlzLnRyYW5zbG9jby50cmFuc2xhdGUoJ0dFTkVSSUMuRVJST1InKSxcclxuICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgY29sb3I6ICd0ZXh0LWRhbmdlcicsXHJcbiAgICAgIHRleHRDb25maXJtOiB0aGlzLnRyYW5zbG9jby50cmFuc2xhdGUoJ0dFTkVSSUMuQ09OVElOVUUnKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhIHkgbXVlc3RyYSB1biBtb2RhbCBkZSBjb25maXJtYWNpb24gc2VuY2lsbG9cclxuICAgKiBAcGFyYW0gX21lc3NhZ2UgTWVuc2FqZVxyXG4gICAqIEBwYXJhbSBfdGl0bGUgVGl0dWxvXHJcbiAgICogQHJldHVybnMgRGV2dWVsdmUgZWwgb2JzZXJ2YWJsZSBxdWUgcmV0b3JuYSBkaWFsb2dSZWZcclxuICAgKi9cclxuICBwdWJsaWMgb3BlbkNvbmZpcm0oX21lc3NhZ2U6IHN0cmluZywgX3RpdGxlPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLm9wZW4oe1xyXG4gICAgICBjYW5jZWxCdG46IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdG46IHRydWUsXHJcbiAgICAgIG1lc3NhZ2U6IF9tZXNzYWdlLFxyXG4gICAgICB0aXRsZTogX3RpdGxlIHx8IHRoaXMudHJhbnNsb2NvLnRyYW5zbGF0ZSgnR0VORVJJQy5BVFRFTlRJT04nKSxcclxuICAgICAgdHlwZTogJ2FsZXJ0JyxcclxuICAgICAgaWNvbjogJ2hlbHAnLFxyXG4gICAgICBjb2xvcjogJ3RleHQtd2FybmluZycsXHJcbiAgICAgIHRleHRDb25maXJtOiB0aGlzLnRyYW5zbG9jby50cmFuc2xhdGUoJ0dFTkVSSUMuQUNDRVBUJyksXHJcbiAgICAgIHRleHRDYW5jZWw6IHRoaXMudHJhbnNsb2NvLnRyYW5zbGF0ZSgnR0VORVJJQy5DQU5DRUwnKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhIHkgbXVlc3RyYSB1biBtb2RhbCBkZSBwcm9tcHQgc2VuY2lsbG9cclxuICAgKiBAcGFyYW0gX21lc3NhZ2UgTWVuc2FqZVxyXG4gICAqIEBwYXJhbSBfdGl0bGUgVGl0dWxvXHJcbiAgICogQHJldHVybnMgRGV2dWVsdmUgZWwgb2JzZXJ2YWJsZSBxdWUgcmV0b3JuYSBkaWFsb2dSZWZcclxuICAgKi9cclxuICBwdWJsaWMgb3BlblByb21wdChfbWVzc2FnZTogc3RyaW5nLCBfdGl0bGU/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3Blbih7IG1lc3NhZ2U6IF9tZXNzYWdlLCB0aXRsZTogX3RpdGxlIHx8ICcnIH0sIEFycVByb21wdERpYWxvZ0NvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==