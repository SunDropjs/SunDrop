class Circle {
  constructor(x, y, radius) {
    this.pos = {
      x: x,
      y: y,
    };

    this.radius = radius;
    this.type = "circle";
  }
}

export { Circle };