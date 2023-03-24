import { Box2D } from "../box.js";

class Pentagon2D extends Box2D {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    super(x, y, width, height);
  }
  createPolygon() {
    const points = [];
    const width4 = this.width - this.width / 4;

    points.push({
      x: this.pos.x - width4,
      y: this.pos.y - this.height / 2,
    });

    points.push({
      x: this.pos.x,
      y: this.pos.y - this.height,
    });

    points.push({
      x: this.pos.x + width4,
      y: this.pos.y - this.height / 2,
    });

    points.push({
      x: this.pos.x + this.width / 2,
      y: this.pos.y + this.height / 2,
    });

    points.push({
      x: this.pos.x - this.width / 2,
      y: this.pos.y + this.height / 2,
    });

    return points;
  }
}

class Hexagon2D extends Box2D {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  createPolygon() {
    const points = [];
    const width4 = this.width - this.width / 4;
    const height8 = this.height - this.height / 8;

    points.push({
      x: this.pos.x - width4,
      y: this.pos.y - this.height / 2,
    });

    points.push({
      x: this.pos.x,
      y: this.pos.y - height8,
    });

    points.push({
      x: this.pos.x + width4,
      y: this.pos.y - this.height / 2,
    });

    points.push({
      x: this.pos.x + width4,
      y: this.pos.y + this.height / 2,
    });

    points.push({
      x: this.pos.x,
      y: this.pos.y + height8,
    });

    points.push({
      x: this.pos.x - width4,
      y: this.pos.y + this.height / 2,
    });

    return points;
  }
}

export { Pentagon2D, Hexagon2D };
