const Gameboard = require('./gameboard')
const Ship = require('./ship')

describe('Test Gameboard actions', () => {
  const gameboard = new Gameboard()
  const length = 3
  const x = 3
  const y = 4

  test('Place ship horizontally', () => {
    const orientation = 'horizontal'
    gameboard.placeShip(length, x, y, orientation)
  
    expect(gameboard.getPosition(x, y)).toBeInstanceOf(Ship)
    expect(gameboard.getPosition(x+1, y)).toBeInstanceOf(Ship)
    expect(gameboard.getPosition(x+2, y)).toBeInstanceOf(Ship)
  })

  test('Place ship vertically', () => {
    const orientation = 'vertical'
    gameboard.placeShip(length, x, y, orientation)

    expect(gameboard.getPosition(x, y)).toBeInstanceOf(Ship)
    expect(gameboard.getPosition(x, y+1)).toBeInstanceOf(Ship)
    expect(gameboard.getPosition(x, y+2)).toBeInstanceOf(Ship)
  })

  test('Adds hit to ship if targeted', () => {
    gameboard.placeShip(length, x, y, 'horizontal')
    const ship = gameboard.getPosition(x, y)

    expect(gameboard.receiveAttack(x, y)).toBeTruthy()
  })
  
  describe('test missed attacks', () => {
    test('Returns false if misses ships', () => {
      expect(gameboard.receiveAttack(x-1, y)).toBeFalsy()
    })
  
    test('gameboard tracks missed attacks', () => {
      gameboard.receiveAttack(x-2, y)
      expect(gameboard.getPosition(x-2, y)).toBe('miss')
    })
  })
})

describe('Are all ships sunk?', () => {
  const gameboard = new Gameboard()
  gameboard.placeShip(2, 2, 2, 'horizontal')
  gameboard.placeShip(2, 3, 3, 'vertical')

  test('not sunk yet', () => {
    expect(gameboard.allSunk()).toBeFalsy()
  })

  test('all sunk', () => {
    gameboard.receiveAttack(2,2)
    gameboard.receiveAttack(3,2)
    gameboard.receiveAttack(3,3)
    gameboard.receiveAttack(3,4)

    expect(gameboard.allSunk()).toBeTruthy()
  })

})

