// 食物
class Food {
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('food')!
  }
  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop
  }
  // 改变食物位置
  change() {
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10
    this.element.style.top = top + 'px'
    this.element.style.left = left + 'px'
  }
}
export default Food

// test
// const food = new Food()
// setInterval(()=>{
//   console.log(food.X,food.Y)
//   food.change()
// },1000)