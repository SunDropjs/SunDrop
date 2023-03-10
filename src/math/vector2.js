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
  set xPos(x) {
    // Set X position
    this.x = x;

    return this;
  }
  set yPos(y) {
    // Set Y position
    this.y = y;

    return this;
  }
  set(x, y) {
    // Both X and Y
    this.x = x;
    this.y = y;

    return this;
  }
  setPostion(v) {
    // set Both X and Y to the same value
    this.x = v;
    this.y = v;

    return this;
  }
  clone() {
    // Create a new Vec2
    return this.constructor(this.x, this.y);
  }
  scale(s) {
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
    };

    return pos;
  }
}

export { Vec2 };
