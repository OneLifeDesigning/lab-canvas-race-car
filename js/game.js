class Game {
    constructor(ctx) {
        this._ctx = ctx

        this._intervalId = null
        this._frames = 0

        this._road = new Road(ctx)
        this._car = new Car(ctx)
        this._obstacles = []
    }

    start() {
        this._intervalId = setInterval(() => {
            this._clear()
            this._draw()
            this._move()
            this._generateObstacles()
            this._updateObstacles()
        }, 1000 / 60);
    }

    getListeners() {
        document.addEventListener('keydown', () => {
            if (event.keyCode === KEY_LEFT) {
                this._car.ax -= SPEED_TURN
            } else if (event.keyCode === KEY_RIGHT) {
                this._car.ax += SPEED_TURN
            }
        })
        document.addEventListener('keyup', () => {
            if (event.keyCode === KEY_LEFT || event.keyCode === KEY_RIGHT) {
                this._car.stop()
            }
        })
    }
    _randomObstacle() {
        return OBSTACLES_OBJECT[Math.floor(Math.random() * (OBSTACLES_OBJECT.length))]
    }
    _randomPosition(w) {
        return ((this._ctx.canvas.width / 2) - (OUT_ROAD + w)) * (Math.floor(Math.random() * 3) + 1)
    }
    _generateObstacles() {
        if (this._frames++ >= 300) {
            let selectObstacle = this._randomObstacle()
            let w = selectObstacle.w
            let h = selectObstacle.h
            let src = selectObstacle.src
            let vy = selectObstacle.vy
            let x = this._randomPosition(w)
            let y = 0 - h * 3
            this._obstacles.push(new Obstacle(this._ctx, w, h, x, y, vy, src))
            this._frames = 0
        }
    }
    _updateObstacles() {
        for (let i = 0; i < this._obstacles.length; i++) {
            if (this._obstacles[i].y >= this._ctx.canvas.height) {
                this._obstacles.slice(1, i)
            } else {
                this._obstacles[i].draw()
                this._obstacles[i].move()
            }
        }
    }

    _clear() {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
    }

    _draw() {
        this._road.draw()
        this._car.draw()
    }

    _move() {
        this._road.move()
        this._car.move()
    }
}