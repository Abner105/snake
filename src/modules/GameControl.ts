import Food from './food'
import ScorePanel from './scorePanel'
import Snake from './Snake'
// 游戏控制类
class GameControl {
  // 设置实例属性
  food: Food
  scorePanel: ScorePanel
  snake: Snake
  // 方向
  direction: string = ''
  // 控制游戏是否结束
  alive: boolean = true
  constructor() {
    this.food = new Food()
    this.scorePanel = new ScorePanel(5, 2)
    this.snake = new Snake()
    this.init()
  }
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }
  // 按下键盘控制方向
  keydownHandler(event: KeyboardEvent) {
    // 不能向反方向移动
    if (event.key !== this.direction) {
      if (this.direction === "ArrowDown" && event.key === "ArrowUp" ||
        this.direction === "ArrowUp" && event.key === "ArrowDown" ||
        this.direction === "ArrowLeft" && event.key === "ArrowRight" ||
        this.direction === "ArrowRight" && event.key === "ArrowLeft") {

      } else {
        this.direction = event.key
      }
    }
  }
  // 蛇移动
  run() {
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case "ArrowDown":
      case "Down":
        Y += 10
        break
      case "ArrowUp":
      case "Up":
        Y -= 10
        break
      case "ArrowLeft":
      case "Left":
        X -= 10
        break
      case "ArrowRight":
      case "Right":
        X += 10
        break
    }
    this.eatFood(X, Y)
    try {
      if (X != this.snake.X || Y != this.snake.Y) {
        this.snake.X = X
        this.snake.Y = Y
      }
    } catch (error) {
      // console.log(error)
      alert((error as Error).message + ' GAME OVER!')
      this.alive = false
    }
    this.alive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level * 30))
  }
  // 吃到食物
  eatFood(x: number, y: number) {
    if (x === this.food.X && y === this.food.Y) {
      this.food.change()
      try {
        this.scorePanel.addScore()
      } catch (error) {
        alert((error as Error).message)
        this.alive = false
      }
      this.snake.addBody()
    }
  }

}
export default GameControl