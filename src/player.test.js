const Player = require('./player')
const Gameboard = require('./gameboard')

describe('test player class', () => {
  const player = new Player()
  const enemyBoard = new Gameboard()

  test('player can send attack', () => {
  
    player.sendAttack(enemyBoard, 3, 3)
  
    expect(enemyBoard.getPosition(3,3)).toBe('miss')
  })

  describe('computer can send attack', () => {
    // test('detects invalid attacks', () => {
    //   expect(player.computerAttack(enemyBoard)).toBeFalsy()
    // })

    test('allows valid attacks', () => {
      expect(player.computerAttack(enemyBoard).response).toBeTruthy()
    })
  })

})

