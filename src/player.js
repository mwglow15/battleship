module.exports = class Player {
  constructor(name) {
    this.name = name
  }

  setGameboard(board) {
    this.gameboard = board
  }

  sendAttack(enemyBoard, x, y) {
    enemyBoard.receiveAttack(x, y)
  }

  computerAttack(enemyBoard) {
    let invalidMove = true

    while(invalidMove) {
      const x = Math.floor(Math.random()) * 10
      const y = Math.floor(Math.random()) * 10

      const target = enemyBoard.getPosition(x, y)

      if (target) {
        invalidMove = true
      } else {
        invalidMove = false
        this.sendAttack(enemyBoard, x, y)
        return { response: true, x: x, y: y, }
      }
    }
  }
}