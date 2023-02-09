// Import the Classes and functions
import { Renderer } from "./renderer.js";
import { Box, Circle, Line } from "./shapes/poly.js";
import { RotatingBox, RotatingCircle } from "./shapes/rotating.js"
import { checkCollision } from "./utilities/collision.js";
import { lerp, vec2, random } from "./utilities/math.js";

// Creating the canvas and getting the context
const canvas = document.createElement("CANVAS");
const ctx = canvas.getContext("2d");

// Init method for LEX
function init(
  props,
  canvasW = window.innerWidth,
  canvasH = window.innerHeight
) {
  // Resizing the canvas
  canvas.width = canvasW;
  canvas.height = canvasH;

  // Setting the background color
  if (props.backgroundColor != undefined) {
    canvas.style.backgroundColor = props.backgroundColor;
  } else {
    canvas.style.backgroundColor = "black";
  }

  // Adding the canvas to the DOM
  document.body.appendChild(canvas);
}

// Exporting everything
export {
  canvas,
  ctx,
  init,
  Renderer,
  Box,
  Circle,
  Line,
  RotatingBox,
  RotatingCircle,
  checkCollision,
  lerp,
  vec2,
  random
};
