class Road {
    constructor(ctx) {
        this._ctx = ctx

        this.x = 0
        this.y = 0

        this.vy = 6

        this.w = this._ctx.canvas.width
        this.h = this._ctx.canvas.height


        this._img = new Image()
        this._img.src = './images/road.png'
    }

    draw() {
        ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this.w,
            this.h
        );
        ctx.drawImage(
            this._img,
            this.x,
            this.y + this.h,
            this.w,
            this.h
        );
    }

    move() {
        this.y -= this.vy

        if (this.y + this.h <= 0) {
            this.y = 0
        }
    }
}