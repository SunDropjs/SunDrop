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
      if (this.shapes[i].props.alpha != undefined) {
        ctx.globalAlpha = this.shapes[i].props.alpha;
      } else {
        ctx.globalAlpha = 1;
      }
      if (this.shapes[i].props.stroke != undefined) {
        if (this.shapes[i].props.stroke.color !== undefined) {
          ctx.strokeStyle = this.shapes[i].props.stroke.color;
        } else {
          ctx.strokeStyle = "black";
        }
        if (this.shapes[i].props.stroke.width !== undefined) {
          ctx.lineWidth = this.shapes[i].props.stroke.width;
        } else {
          ctx.lineWidth = 1;
        }
      }

      // Get the shape type
      if (this.shapes[i].class === "polygon") {
        // If the shape is visible...
        if (this.shapes[i].props.visible) {
          ctx.beginPath();
          ctx.moveTo(this.shapes[i].polygon[0].x, this.shapes[i].polygon[0].y);
          for (let j = 0; j < this.shapes[i].polygon.length - 1; j++) {
            ctx.lineTo(
              this.shapes[i].polygon[j + 1].x,
              this.shapes[i].polygon[j + 1].y
            );
          }
          ctx.lineTo(this.shapes[i].polygon[0].x, this.shapes[i].polygon[0].y);
          ctx.closePath();
          if (this.shapes[i].props.style != undefined) {
            if (this.shapes[i].props.style === "fill") {
              ctx.fill();
            }
            if (this.shapes[i].props.style === "stroke") {
              ctx.stroke();
            }
          }
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
          ctx.closePath();
          if (this.shapes[i].props.style != undefined) {
            if (this.shapes[i].props.style === "fill") {
              ctx.fill();
            }
            if (this.shapes[i].props.style === "stroke") {
              ctx.stroke();
            }
          }
        }
      }
      if (this.shapes[i].type === "line") {
        if (this.shapes[i].props.visible) {
          ctx.beginPath();
          ctx.moveTo(this.shapes[i].start.x, this.shapes[i].start.y);
          ctx.lineTo(this.shapes[i].end.x, this.shapes[i].end.y);
          ctx.closePath();
          ctx.stroke();
        }
      }
      if (this.shapes[i].type === "rotating-circle") {
        if (this.shapes[i].props.visible) {
          ctx.beginPath();
          ctx.arc(
            this.shapes[i].pos.x,
            this.shapes[i].pos.y,
            this.shapes[i].radius,
            this.shapes[i].angle,
            (this.shapes[i].angle + 2) * Math.PI
          );
          ctx.closePath();
          if (this.shapes[i].props.style != undefined) {
            if (this.shapes[i].props.style === "fill") {
              ctx.fill();
            }
            if (this.shapes[i].props.style === "stroke") {
              ctx.stroke();
            }
          }
        }
      }
    }
  }
  add(shape) {
    this.shapes.push(shape);
  }
  clear() {
    this.shapes = [];
  }
  remove(shape) {
    this.shapes.splice(this.shapes.indexOf(shape), 1);
  }
  update() {
    for (let i = 0; i < this.shapes.length; i++) {
      if (this.shapes[i].class === "polygon") {
        this.shapes[i].update();
      }
    }
  }
  get(shape) {
    return this.shapes[this.shapes.indexOf(shape)];
  }
}
