class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  get xPos() {
    return this.x
  }
  get yPos() {
    return this.y
  }
  set xPos(x) {
    this.x = x;

    return this
  }
  set yPos(y) {
    this.y = y;

    return this
  }
  set(x, y) {
    this.x = x;
    this.y = y;

    return this
  }
  setPostion(v) {
    this.x = v
    this.y = v

    return this
  }
  clone() {
    return this.constructor(this.x, this.y);
  }
  scale(s) {
    this.x *= s;
    this.y *= s;

    return this
  }
  getPosition() {
    const pos = {
        x: this.x,
        y: this.y
    }

    return pos
  }
}

export { Vec2 };
