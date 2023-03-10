class Circle {
  constructor(x, y, radius) {
    // Postion 
    this.pos = {
      x: x,
      y: y,
    };

    // Radius & type
    this.radius = radius;
    this.type = "circle";

    // Properties
    this.props = {
      visible: true,
    }

    // Custome properties
    this.tags = {};

  }
}

export { Circle };