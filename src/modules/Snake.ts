// 蛇
class Snake {
  head: HTMLElement
  bodies: HTMLCollection
  container: HTMLElement
  constructor() {
    this.container = document.getElementById('snake')!
    this.head = document.querySelector('#snake>div') as HTMLElement
    this.bodies = this.container.getElementsByTagName('div')!
  }
  // 蛇头坐标
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  // 设置蛇头坐标
  set X(val: number) {
    if (val < 0 || val > 290) {
      throw new Error('蛇撞墙了')
    }
    //蛇移动时，身体也跟着移动
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
    }
    this.head.style.left = val + 'px'
    this.checkBody()
  }
  set Y(val: number) {
    if (val < 0 || val > 290) {
      throw new Error('蛇撞墙了')
    }
    //蛇移动时，身体也跟着移动
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.top = Y + 'px'
    }
    this.head.style.top = val + 'px'
    this.checkBody()
  }
  // 给蛇添加身体
  addBody() {
    this.container.insertAdjacentHTML("beforeend", "<div></div>")
    console.log(this.bodies)
  }
  // 判断蛇是否撞到自己
  checkBody(){
    for(let i=3;i<this.bodies.length;i++){
      let X = (this.bodies[i] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i] as HTMLElement).offsetTop;
      if(X===this.X&&Y===this.Y){
        throw new Error('撞到自己了')
      }
    }
  }
}
export default Snake