module.exports = class Ship {
  constructor(length) {
    this.length = length
    this.hits = 0
  }

  getLength() {
    return this.length
  }

  hit() {
    this.hits += 1
  }

  getHits() {
    return this.hits
  }

  isSunk() {
    return (this.hits >= this.length) ? true : false
  }
}