class Car {
    constructor(ctx) {
        this._ctx = ctx

        this.w = 100
        this.h = 202
        this.y0 = this._ctx.canvas.height - (this.h + (this.h / 3))

        this.x = (this._ctx.canvas.width - this.w) / 2
        this.y = this.y0

        this.vx = 0
        this.vy = 0

        this.ax = 0
        this.ay = 0

        this._img = new Image()
        this._img.src = './images/car.png'
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
        if (this.ax >= 2) {
            this.ax = 0
        }
        this.vx += this.ax
        this.x += this.vx

        if (this.x - OUT_ROAD <= 0) {
            this.x = OUT_ROAD
        }
        if (this.x + this.w >= this._ctx.canvas.width - OUT_ROAD) {
            this.x = this._ctx.canvas.width - this.w - OUT_ROAD
        }
    }

}