export interface ArqSnackBoxOptions {
    closeButton?: boolean;
    progressBar?: boolean;
    timeOut?: number;
    progressAnimation?: 'decreasing' | 'increasing';
    tapToDismiss?: boolean;
    positionClass?: 'toast-top-right' | 'toast-bottom-right' | 'toast-top-left' | 'toast-bottom-left';
}
