const DEBOUNCE_TIME: number = 500; // Tiempo para que no salten mensajes duplicados automáticamente

export class ArqSnackbarEmitedMessage {
  _lastTime: number = 0;

  constructor(private _message: string | undefined, private _title: string | undefined) {}

  public shouldEmit(message: string | undefined, title: string | undefined): boolean {
    let currentTime = new Date().getTime();
    const emited = this._message === message && this._title === title && currentTime - this._lastTime < DEBOUNCE_TIME;
    if (!emited) {
      this.register(currentTime, message, title);
    }
    return !emited;
  }

  private register(currentTime: number, message: string | undefined, title: string | undefined) {
    this._lastTime = currentTime;
    this._message = message;
    this._title = title;
  }
}
