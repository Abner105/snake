// 分数面板
class ScorePanel {
  // 初始分数
  score: number = 0;
  level: number = 1;
  // 分数面板的具体html
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  // 分数升级，最大等级
  upScore: number;
  maxLevel: number;
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.maxLevel = maxLevel
    this.upScore = upScore
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
  }
  // 加分
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    if ((this.score % this.upScore) === 0) {
      this.levelUp()
    }
  }
  // 升级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }else{
      throw new Error('恭喜你通关啦~~')
    }
  }
}
export default ScorePanel