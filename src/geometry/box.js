class Box2D {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    // Position in a dictionary
    this.pos = {
      x: x,
      y: y,
    };
    // Dimensions
    this.width = width;
    this.height = height;

    // Properties
    this.props = {
      visible: true,
    };

    // Custom properties
    this.tags = {};

    // Class & type
    this.class = "polygon";
    this.type = "box";

    // Polygon
    this.polygon = this.createPolygon();
  }

  createPolygon() {
    // Array of points
    let points = [];

    // Top left vertex
    points.push({
      x: this.pos.x - this.width / 2,
      y: this.pos.y - this.height / 2,
    });

    // Top right vertex
    points.push({
      x: this.pos.x + this.width / 2,
      y: this.pos.y - this.height / 2,
    });

    // Bottom Right vertex
    points.push({
      x: this.pos.x + this.width / 2,
      y: this.pos.y + this.height / 2,
    });

    // Bottom left vertex
    points.push({
      x: this.pos.x - this.width / 2,
      y: this.pos.y + this.height / 2,
    });

    return points;
  }

  // Recrates the polygon
  update() {
    this.polygon = this.createPolygon();
  }
}

export { Box2D };
