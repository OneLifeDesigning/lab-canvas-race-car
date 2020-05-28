const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.style.border = '1px solid'
const game = new Game(ctx)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start()
    game.getListeners()
  }
};