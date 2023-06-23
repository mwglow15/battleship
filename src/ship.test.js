const Ship = require('./ship')

test('getLength', () => {
  const ship = new Ship(3)

  expect(ship.getLength()).toBe(3)
})

describe('test hits functions', () => {
  const ship = new Ship(3)

  test('get initial hits', () => {
    expect(ship.getHits()).toBe(0)
  })

  test('increment hits when hit() is called', () => {
    ship.hit()

    expect(ship.getHits()).toBe(1)
  })

  test('isSunk returns false if not sunk', () => {
    expect(ship.isSunk()).toBeFalsy()
  })

  test('isSunk returns true if sunk', () => {
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBeTruthy()
  })
})