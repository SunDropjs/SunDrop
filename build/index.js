function lerp(a, b, t) {
  return a + (b - a) * t;
}

function vec2(x, y) {
  return { x, y };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

const canvas = document.createElement("CANVAS");
const ctx = canvas.getContext("2d");

function init(
  props,
  canvasW = window.innerWidth,
  canvasH = window.innerHeight
) {
  canvas.width = canvasW;
  canvas.height = canvasH;

  props.backgroundColor != undefined
    ? (canvas.style.backgroundColor = props.backgroundColor)
    : (canvas.style.backgroundColor = "black");

  document.body.appendChild(canvas);
}

function checkCollision(shape1, shape2) {
  if (shape1.type === "circle" && shape2.type === "circle") {
    const a = shape1.radius + shape2.radius;
    const x = shape1.pos.x - shape2.pos.x;
    const y = shape1.pos.y - shape2.pos.y;

    return a > Math.sqrt(x * x + y * y) ? true : false;
  }
  if (shape1.class === "polygon" && shape2.class === "polygon") {
    function getIntersection(A, B, C, D) {
      const tTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
      const uTop = (C.y - A.y) * (A.x - B.x) - (C.x - A.x) * (A.y - B.y);
      const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);

      if (bottom != 0) {
        const t = tTop / bottom;
        const u = uTop / bottom;
        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
          return {
            x: lerp(A.x, B.x, t),
            y: lerp(A.y, B.y, t),
            offset: t,
          };
        }
      }

      return null;
    }

    for (let i = 0; i < shape1.polyon; i++) {
      for (let j = 0; j < shape2.polyon; j++) {
        const intersection = getIntersection(
          shape1.points[i],
          shape2.points[j],
          shape1.points[(i + 1) % shape1.polyon],
          shape2.points[(j + 1) % shape2.polyon]
        );

        if (intersection) {
          return true;
        }
      }
    }

    return false;
  }
  if (shape1.class === "polygon" && shape2.type === "circle") {
    const distX = Math.abs(shape2.pos.x - shape1.pos.x);
    const distY = Math.abs(shape2.pos.y - shape1.pos.y);

    if (
      distX > shape1.width / 2 + shape2.radius ||
      distY > shape1.height / 2 + shape2.radius
    ) {
      return false;
    }
    if (distX <= shape1.width / 2 || distY <= shape1.height / 2) {
      return true;
    }

    const hypot =
      (distX - shape1.width / 2) * (distX - shape1.width / 2) +
      (distY - shape1.height / 2) * (distY - shape1.height / 2);

    return hypot <= shape2.radius * shape2.radius ? true : false;
  }
  if (shape1.type === "circle" && shape2.class === "polygon") {
    const distX = Math.abs(shape1.pos.x - shape2.pos.x);
    const distY = Math.abs(shape1.pos.y - shape2.pos.y);

    if (
      distX > shape2.width / 2 + shape1.radius ||
      distY > shape2.height / 2 + shape1.radius
    ) {
      return false;
    }
    if (distX <= shape2.width / 2 || distY <= shape2.height / 2) {
      return true;
    }

    const hypot =
      (distX - shape2.width / 2) * (distX - shape2.width / 2) +
      (distY - shape2.height / 2) * (distY - shape2.height / 2);

    return hypot <= shape1.radius * shape1.radius ? true : false;
  }
}

class Renderer {
  constructor() {
    this.shapes = [];
  }

  render() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].props.color != undefined
        ? (ctx.fillStyle = this.shapes[i].props.color)
        : (ctx.fillStyle = "black");

      this.shapes[i].props.alpha != undefined
        ? (ctx.globalAlpha = this.shapes[i].props.alpha)
        : (ctx.globalAlpha = 1);

      if (this.shapes[i].props.stroke != undefined) {
        this.shapes[i].props.stroke.color !== undefined
          ? (ctx.strokeStyle = this.shapes[i].props.stroke.color)
          : (ctx.strokeStyle = "black");

        this.shapes[i].props.stroke.width !== undefined
          ? (ctx.lineWidth = this.shapes[i].props.stroke.width)
          : (ctx.lineWidth = 1);
      }

      if (this.shapes[i].class === "polygon") {
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

// Box class
class Box {
  constructor(x, y, width, height) {
    this.pos = {
      x: x,
      y: y,
    };

    this.angle = 0;

    this.width = width;
    this.height = height;

    this.polygon = this.generatePolygon();

    this.props = {
      visible: true,
      style: "fill"
    };

    this.tags = {};

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

class Circle {
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

class Line {
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

class RotatingBox extends Box {
  constructor(x, y, width, height, angle = 0) {
    super(x, y, width, height);

    this.angle = angle;
  }
  generatePolygon() {
    const points = [];
    const rad = Math.hypot(this.width, this.height) / 2;
    const alpha = Math.atan2(this.width, this.height);
    points.push({
      x: this.pos.x - Math.sin(this.angle - alpha) * rad,
      y: this.pos.y - Math.cos(this.angle - alpha) * rad,
    });
    points.push({
      x: this.pos.x - Math.sin(this.angle + alpha) * rad,
      y: this.pos.y - Math.cos(this.angle + alpha) * rad,
    });
    points.push({
      x: this.pos.x - Math.sin(Math.PI + this.angle - alpha) * rad,
      y: this.pos.y - Math.cos(Math.PI + this.angle - alpha) * rad,
    });
    points.push({
      x: this.pos.x - Math.sin(Math.PI + this.angle + alpha) * rad,
      y: this.pos.y - Math.cos(Math.PI + this.angle + alpha) * rad,
    });
    return points;
  }
}

class RotatingCircle extends Circle {
  constructor(x, y, radius, angle = 0) {
    super(x, y, radius);

    this.angle = angle;

    this.type = "rotating-circle";
  }
}

exports.lerp = lerp;
exports.vec2 = vec2;
exports.checkCollision = checkCollision;
exports.randomInt = randomInt;
exports.randomFloat = randomFloat;
exports.init = init;
exports.Renderer = Renderer;
exports.Box = Box;
exports.Circle = Circle;
exports.Line = Line;
exports.RotatingBox = RotatingBox;
exports.RotatingCircle = RotatingCircle;