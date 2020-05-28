const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.style.border = '1px solid'
const game = new Game(ctx)
game.start()

window.onload = () => {
  // document.getElementById('start-button').onclick = () => {
  //   game.start()
  // }
  document.addEventListener('keydown', () => {
    if (event.keyCode === KEY_LEFT) {
      game._car.ax -= SPEED_TURN
    } else if (event.keyCode === KEY_RIGHT) {
      game._car.ax += SPEED_TURN
    } else if (event.keyCode === KEY_DOWN) {
      console.log('HEY PUSH DOWN');
    } else if (event.keyCode === KEY_P) {
      console.log('HEY PUSH DOWN');
    }
  })
  document.addEventListener('keyup', () => {
    if (event.keyCode === KEY_LEFT) {
      game._car.ax = 0
      game._car.vx = 0
    } else if (event.keyCode === KEY_RIGHT) {
      game._car.ax = 0
      game._car.vx = 0
    } else if (event.keyCode === KEY_DOWN) {
      console.log('HEY PUSH DOWN');
    } else if (event.keyCode === KEY_P) {
      console.log('HEY PUSH P');
    }
  })
};