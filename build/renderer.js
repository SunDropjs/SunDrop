export class Renderer {
  constructor(parameters) {
    this.props = parameters;
  }
  render(shape, type) {
    if (shape.props.color != undefined) {
      ctx.fillStyle = shape.props.color;
    }
    if (type === "box") {
      if (shape.props.visible) {
        ctx.beginPath();
        ctx.moveTo(shape[0].x, shape[0].y);
        for (let i = 0; i < shape.length - 1; i++) {
          ctx.lineTo(shape[i + 1].x, shape[i + 1].y);
        }
        ctx.fill();
      }
    }
    if (type === "circle") {
      if (shape.props.visible) {
        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }
}