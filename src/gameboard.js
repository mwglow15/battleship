const Ship = require('./ship')

module.exports = class Gameboard {
  constructor() {
    this.board = this.createBoard()
  }

  createBoard() {
    const board = new Array()

    for (let i=0; i<10; i++) {
      board[i] = new Array(10)
      board[i].fill(false)
    }

    return board
  }

  getBoard() {
    return this.board
  }

  placeShip(length, x, y, orientation) {
    const ship = new Ship(length)

    if (orientation == 'vertical') {
      for (let i=0; i<length; i++) {
        this.board[y+i][x] = ship
      }
    } else {
      for (let i=0; i<length; i++) {
        this.board[y][x+i] = ship
      }
    }
  }

  getPosition(x, y) {
    if (this.board[y][x]) {
      return this.board[y][x]
    } else {
      return false
    }
  }

  receiveAttack(x, y) {
    const target = this.getPosition(x, y)

    if (target) {
      target.hit()
      this.board[y][x] = 'X'
      return true
    } else {
      this.board[y][x] = 'miss'
      return false
    }
  }
}