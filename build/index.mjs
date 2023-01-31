import  {Renderer} from "./renderer.js";
//import "./shapes/poly.js";

function init(
  props,
  canvasW = window.innerWidth,
  canvasH = window.innerHeight
) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (props.color != undefined) {
    canvas.style.background = props.color;
  }
  if (props.scroll != undefined) {
    if (props.scroll === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
  }
}

  canvas.width = canvasW;
  canvas.height = canvasH;
}

//let x = new Renderer()

module.exports = {
  init,
  Renderer
}