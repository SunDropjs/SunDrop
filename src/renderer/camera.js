class Camera {
  constructor(x = 0, y = 0) {
    this.pos = {
      x: x,
      y: y,
    };
  }
  follow(target, offset = 0.5) {
    this.pos.x = -target.pos.x + window.innerWidth / 2 + offset;
    this.pos.y = -target.pos.y + window.innerHeight / 2 + offset;
  }
  setPos(x, y) {
    this.pos = { x: x, y: y };
  }
}

export { Camera }
