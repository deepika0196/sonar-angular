const DEBOUNCE_TIME = 500; // Tiempo para que no salten mensajes duplicados automáticamente
export class ArqSnackbarEmitedMessage {
    constructor(_message, _title) {
        this._message = _message;
        this._title = _title;
        this._lastTime = 0;
    }
    shouldEmit(message, title) {
        let currentTime = new Date().getTime();
        const emited = this._message === message && this._title === title && currentTime - this._lastTime < DEBOUNCE_TIME;
        if (!emited) {
            this.register(currentTime, message, title);
        }
        return !emited;
    }
    register(currentTime, message, title) {
        this._lastTime = currentTime;
        this._message = message;
        this._title = title;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJxLXNuYWNrYmFyLWVtaXRlZC1tZXNzYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXJxLXNkay9zcmMvbGliL3V0aWxzL2FycS1zbmFja2Jhci1lbWl0ZWQtbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLGFBQWEsR0FBVyxHQUFHLENBQUMsQ0FBQyxnRUFBZ0U7QUFFbkcsTUFBTSxPQUFPLHdCQUF3QjtJQUduQyxZQUFvQixRQUE0QixFQUFVLE1BQTBCO1FBQWhFLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFGcEYsY0FBUyxHQUFXLENBQUMsQ0FBQztJQUVpRSxDQUFDO0lBRWpGLFVBQVUsQ0FBQyxPQUEyQixFQUFFLEtBQXlCO1FBQ3RFLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ2xILElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2pCLENBQUM7SUFFTyxRQUFRLENBQUMsV0FBbUIsRUFBRSxPQUEyQixFQUFFLEtBQXlCO1FBQzFGLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERFQk9VTkNFX1RJTUU6IG51bWJlciA9IDUwMDsgLy8gVGllbXBvIHBhcmEgcXVlIG5vIHNhbHRlbiBtZW5zYWplcyBkdXBsaWNhZG9zIGF1dG9tw6F0aWNhbWVudGVcclxuXHJcbmV4cG9ydCBjbGFzcyBBcnFTbmFja2JhckVtaXRlZE1lc3NhZ2Uge1xyXG4gIF9sYXN0VGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7fVxyXG5cclxuICBwdWJsaWMgc2hvdWxkRW1pdChtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQsIHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBib29sZWFuIHtcclxuICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgZW1pdGVkID0gdGhpcy5fbWVzc2FnZSA9PT0gbWVzc2FnZSAmJiB0aGlzLl90aXRsZSA9PT0gdGl0bGUgJiYgY3VycmVudFRpbWUgLSB0aGlzLl9sYXN0VGltZSA8IERFQk9VTkNFX1RJTUU7XHJcbiAgICBpZiAoIWVtaXRlZCkge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyKGN1cnJlbnRUaW1lLCBtZXNzYWdlLCB0aXRsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIWVtaXRlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXIoY3VycmVudFRpbWU6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkLCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLl9sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG4gICAgdGhpcy5fbWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxufVxyXG4iXX0=