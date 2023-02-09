import { Box, Circle } from "./poly.js";

export class RotatingBox extends Box {
  constructor(x, y, width, height, angle = 0) {
    super(x, y, width, height);

    this.angle = angle;
  }
  generatePolygon() {
    const points = [];
    const rad = Math.hypot(this.width, this.height) / 2;
    const alpha = Math.atan2(this.width, this.height);
    points.push({
      x: this.pos.x - Math.sin(this.angle - alpha) * rad,
      y: this.pos.y - Math.cos(this.angle - alpha) * rad,
    });
    points.push({
      x: this.pos.x - Math.sin(this.angle + alpha) * rad,
      y: this.pos.y - Math.cos(this.angle + alpha) * rad,
    });
    points.push({
      x: this.pos.x - Math.sin(Math.PI + this.angle - alpha) * rad,
      y: this.pos.y - Math.cos(Math.PI + this.angle - alpha) * rad,
    });
    points.push({
      x: this.pos.x - Math.sin(Math.PI + this.angle + alpha) * rad,
      y: this.pos.y - Math.cos(Math.PI + this.angle + alpha) * rad,
    });
    return points;
  }
}

export class RotatingCircle extends Circle {
  constructor(x, y, radius, angle = 0) {
    super(x, y, radius);

    this.angle = angle;

    this.type = "rotating-circle";
  }
}