class Obstacles {
    constructor(ctx) {
        this._ctx = ctx
        this.w = 99
        this.h = 223

        this.x = ((this._ctx.canvas.width - (OUT_ROAD * 2)) / 2) - (this.w)
        this.y = 0
        this.y0 = -212

        this.vy = 2


        this._img = new Image()
        this._img.src = './images/truck.png'
    }

    draw() {
        ctx.drawImage(
            this._img,
            this.x,
            this.y0,
            this.w,
            this.h
        );
    }

    move() {
        this.y += this.vy

        if (this.y >= this._ctx.canvas.height + this.h) {
            this.y = 0 - this.h
        }
    }

}