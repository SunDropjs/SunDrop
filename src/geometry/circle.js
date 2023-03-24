class Circle2D {
  constructor(x = 0, y = 0, radius = 0) {
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

export { Circle2D };