class Box {
  constructor(x, y, width, height) {
    this.pos = {
      x: x,
      y: y,
    };
    this.width = width;
    this.height = height;

    this.props = {
      visible: true,
    };

    this.tags = {};

    this.class = "polygon";
    this.type = "box";

    this.polygon = this.createPolygon();
  }

  createPolygon() {
    let points = [];

    points.push({
      x: this.pos.x - this.width / 2,
      y: this.pos.y - this.height / 2,
    });

    points.push({
      x: this.pos.x + this.width / 2,
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

  update() {
    this.polygon = this.createPolygon();
  }
}

export { Box };
