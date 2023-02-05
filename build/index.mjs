// Import the Classes and functions
import  {Renderer} from "./renderer.js"
import {Box, Circle} from "./shapes/poly.js";

// Creating the canvas and getting the context
const canvas = document.createElement("CANVAS");
const ctx = canvas.getContext("2d");

// Init method for LEX
function init(
  props,
  canvasW = window.innerWidth,
  canvasH  = window.innerHeight
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
  document.body.appendChild(canvas)
  
}

// Exporting everything
export {canvas, ctx, init, Renderer, Box, Circle}