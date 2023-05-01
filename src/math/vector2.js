import { randomFloat } from '../utils.js'
class Vec2 {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  get xPos () {
    // Get X position
    return this.x
  }

  get yPos () {
    // Get Y position
    return this.y
  }

  set xPos (x) {
    // Set X position
    this.x = x
  }

  set yPos (y) {
    // Set Y position
    this.y = y
  }

  set (x, y) {
    // Both X and Y
    this.x = x
    this.y = y
  }

  setPostion (v) {
    // set Both X and Y to the same value
    this.x = v
    this.y = v
    return [this.x, this.y]
  }

  clone () {
    // Create a new Vec2
    return this.constructor(this.x, this.y)
  }

  scale (s) {
    // Scale both X and Y
    this.x *= s
    this.y *= s
    return [this.x, this.y]
  }

  getPosition () {
    // Get the position of the Vec2
    return [this.x, this.y]
  }

  divide (s) {
    this.x = this.x / s
    this.y = this.y / s
    return [this.x, this.y]
  }

  add (s) {
    this.x = this.x + s
    this.y = this.y + s
  }

  random (min, max) {
    this.x = randomFloat(min, max)
    this.y = randomFloat(min, max)
    return [this.x, this.y]
  }
}
export { Vec2 }
