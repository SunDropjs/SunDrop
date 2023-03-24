import { randomFloat } from "../utils.js";

class Vec2 {
  constructor(x = 0, y = 0) {
    // X and Y
    this.x = x;
    this.y = y;
  }
  get xPos() {
    // Get X position
    return this.x;
  }
  get yPos() {
    // Get Y position
    return this.y;
  }
  set xPos(x = 0) {
    // Set X position
    this.x = x;

    return this;
  }
  set yPos(y = 0) {
    // Set Y position
    this.y = y;

    return this;
  }
  set(x = 0, y = 0) {
    // Both X and Y
    this.x = x;
    this.y = y;

    return this;
  }
  setPostion(v = 0) {
    // set Both X and Y to the same value
    this.x = v;
    this.y = v;

    return this;
  }
  clone() {
    // Create a new Vec2
    return this.constructor(this.x, this.y);
  }
  scale(s = 0) {
    // Scale both X and Y
    this.x *= s;
    this.y *= s;

    return this;
  }
  getPosition() {
    // Get the position of the Vec2
    const pos = {
      x: this.x,
      y: this.y,
    }

    return pos;
  }
  divide(s = 0) {
    this.x = this.x / s;
    this.y = this.y / s;

    return this;
  }
  add(s = 0) {
    this.x = this.x + s
    this.y = this.y + s
  }
  random(min, max) {
    this.x = randomFloat(min, max)
    this.y = randomFloat(min, max)

    return this
  }
}

export { Vec2 };
