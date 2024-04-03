export declare class ArqSnackbarEmitedMessage {
    private _message;
    private _title;
    _lastTime: number;
    constructor(_message: string | undefined, _title: string | undefined);
    shouldEmit(message: string | undefined, title: string | undefined): boolean;
    private register;
}
