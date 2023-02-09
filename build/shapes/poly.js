// Box class
export class Box {
  constructor(x, y, width, height) {
    // Box position
    this.pos = {
      x: x,
      y: y,
    };

    this.angle = 0;

    // Box width and height
    this.width = width;
    this.height = height;

    // Box shape
    this.polygon = this.generatePolygon();

    // Box properties
    this.props = {
      visible: true,
      style: "fill"
    };

    // Custom properties
    this.tags = {};

    // Object type
    this.type = "box";

    this.class = "polygon"
  }

  generatePolygon() {
    const points = []

    points.push({
      x: this.pos.x - (this.width / 2),
      y: this.pos.y - (this.height / 2),
    });
    points.push({
      x: this.pos.x + (this.width / 2),
      y: this.pos.y - (this.height / 2),
    });
    points.push({
      x: this.pos.x + (this.width / 2),
      y: this.pos.y + (this.height / 2),
    });
    points.push({
      x: this.pos.x - (this.width / 2),
      y: this.pos.y + (this.height / 2),
    });
    
    return points;
  }

  update() {
    this.polygon = this.generatePolygon();
  }
}

export class Circle {
  constructor(x, y, radius) {
    this.pos = {
      x: x,
      y: y,
    };

    this.radius = radius;

    this.type = "circle";

    this.props = {
      visible: true,
      style: "fill"
    };

    this.tags = {};
  }
}

export class Line {
  constructor(startX, startY, endX, endY) {
    this.start = {
      x: startX,
      y: startY,
    }
    this.end = {
      x: endX,
      y: endY,
    }

    this.type = "line";

    this.props = {
      visible: true,
    };

    this.tags = {};
  }
}