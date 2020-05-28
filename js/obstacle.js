class Obstacle {
    constructor(ctx, w, h, x, y, vy, src) {
        this._ctx = ctx
        this.w = w
        this.h = h

        this.x = x
        this.y = y

        this.vy = vy

        this._img = new Image()
        if (!src) {
            this._img.src = './images/truck.png'
        } else {
            this._img.src = src
        }
    }

    draw() {
        ctx.drawImage(
            this._img,
            this.x,
            this.y,
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