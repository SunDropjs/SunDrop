
class PerspectiveCamera2D {
  constructor(x = 0, y = 0) {
    this.pos = {
      x: x,
      y: y,
    };
  }
  setPos(x = 0, y = 0) {
    this.pos = { x: x, y: y };
  }
  scale(s = 0) {
    this.pos.x *= s;
    this.pos.y *= s;
  }
}

export { PerspectiveCamera2D }
