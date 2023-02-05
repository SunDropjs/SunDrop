// Import the context
import { ctx } from "./index.mjs";

// Renderer class
export class Renderer {
  constructor(parameters) {

    // TODO: add parameter settings
    this.props = parameters;

    // Array of elements to be rendered
    this.shapes = [];
  }

  // Main render methoda
  render() {

    // Clear the canvas
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Loop through all shapes
    for (let i = 0; i < this.shapes.length; i++) {

      // Get the shape color
      if (this.shapes[i].props.color != undefined) {
        ctx.fillStyle = this.shapes[i].props.color;
      } else {
        ctx.fillStyle = "black";
      }

      // Get the shape type
      if (this.shapes[i].type === "box") {

        // If the shape is visible...
        if (this.shapes[i].props.visible) {
          ctx.beginPath();
          ctx.moveTo(this.shapes[i].polygon[0].x, this.shapes[i].polygon[0].y);
          for (let j = 0; j < this.shapes[i].polygon.length - 1; j++) {
            ctx.lineTo(
              this.shapes[i].polygon[j+ 1].x,
              this.shapes[i].polygon[j+ 1].y
            );
          }
          ctx.fill();
        }
      }
      if (this.shapes[i].type === "circle") {
        if (this.shapes[i].props.visible) {
          ctx.beginPath();
          ctx.arc(
            this.shapes[i].pos.x,
            this.shapes[i].pos.y,
            this.shapes[i].radius,
            0,
            2 * Math.PI
          );
          ctx.fill();
        }
      }
    }
  }
  add(shape) {
    this.shapes.push(shape);
  }
}
