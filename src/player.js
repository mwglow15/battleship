module.exports = class Player {
  constructor(name) {
    this.name = name
  }

  sendAttack(enemyBoard, x, y) {
    enemyBoard.receiveAttack(x, y)
  }
}