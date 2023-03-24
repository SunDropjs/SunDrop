/**
 * @license
 * Copyright 2023 GappleCider
 * MIT
 */
'use strict';

class BasicRenderer2D {
  constructor() {
    this.objs = [];

    // initialize the canvas and context
    this.domElement = document.createElement("canvas");
    this.ctx = this.domElement.getContext("2d");

    // set the canvas width and height to the window size
    this._canvasWidth = this.domElement.width = window.innerWidth;
    this._canvasHeight = this.domElement.height = window.innerHeight;
  }

  render(camera = null) {
    this.ctx.clearRect(0, 0, this._canvasWidth, this._canvasHeight);
    if (camera) {
      this.ctx.save();
      this.ctx.translate(camera.pos.x, camera.pos.y);
    }

    for (let i = 0; i < this.objs.length; i++) {
      if (this.objs[i].type != "map") {
        this.objs[i].props.color != undefined
          ? (this.ctx.fillStyle = this.objs[i].props.color)
          : (this.ctx.fillStyle = "black");
      }

      if (this.objs[i].class === "polygon") {
        if (this.objs[i].type === "texturedbox") {
          if (this.objs[i].texture.load) {
            const texture = this.ctx.createPattern(
              this.objs[i].texture.texture,
              "repeat"
            );
            this.ctx.fillStyle = texture;
          }
        }
        if (this.objs[i].props.visible) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.objs[i].polygon[0].x, this.objs[i].polygon[0].y);
          for (let j = 0; j < this.objs[i].polygon.length - 1; j++) {
            this.ctx.lineTo(
              this.objs[i].polygon[j + 1].x,
              this.objs[i].polygon[j + 1].y
            );
          }
          this.ctx.lineTo(this.objs[i].polygon[0].x, this.objs[i].polygon[0].y);
          this.ctx.closePath();

          if (this.objs[i].props.drawStyle === "fill") {
            this.ctx.fill();
          } else if (this.objs[i].props.drawStyle === "stroke") {
            this.props.stroke.color != undefined
              ? (this.ctx.strokeStyle = this.props.stroke.color)
              : (this.ctx.strokeStyle = "black");

            this.props.stroke.width != undefined
              ? (this.ctx.lineWidth = this.props.stroke.width)
              : (this.ctx.lineWidth = 1);

            this.ctx.stroke();
          }
        }
      }

      if (this.objs[i].type === "line") {
        if (this.objs[i].props.visible) {
          this.objs[i].props.stroke.color != undefined
            ? (this.ctx.strokeStyle = this.objs[i].props.stroke.color)
            : (this.ctx.strokeStyle = "black");

          this.objs[i].props.stroke.width != undefined
            ? (this.ctx.lineWidth = this.objs[i].props.stroke.width)
            : (this.ctx.lineWidth = 1);

          this.ctx.beginPath();
          this.ctx.moveTo(this.objs[i].startPoint.x, this.objs[i].startPoint.y);
          this.ctx.lineTo(this.objs[i].endPoint.x, this.objs[i].endPoint.y);
          this.ctx.closePath();
          this.ctx.stroke();
        }
      }

      if (
        this.objs[i].type === "circle" ||
        this.objs[i].type === "texturedcircle"
      ) {
        if (this.objs[i].type === "texturedcircle") {
          if (this.objs[i].texture.load) {
            const texture = this.ctx.createPattern(
              this.objs[i].texture.texture,
              "repeat"
            );
            this.ctx.fillStyle = texture;
          }
        }
        if (this.objs[i].props.visible) {
          this.ctx.beginPath();
          this.ctx.arc(
            this.objs[i].pos.x,
            this.objs[i].pos.y,
            this.objs[i].radius,
            0,
            Math.PI * 2
          );
          this.ctx.closePath();
          if (this.objs[i].props.drawStyle === "fill") {
            this.ctx.fill();
          }
          if (this.objs[i].props.drawStyle === "stroke") {
            this.objs[i].props.stroke.color != undefined
              ? (this.ctx.strokeStyle = this.objs[i].props.stroke.color)
              : (this.ctx.strokeStyle = "black");

            this.objs[i].props.stroke.width != undefined
              ? (this.ctx.lineWidth = this.objs[i].props.stroke.width)
              : (this.ctx.lineWidth = 1);

            this.ctx.stroke();
          }
        }
      }
      if (this.objs[i].type === "map") {
        for (let j = 0; j < this.objs[i].map.length; j++) {
          const char = this.objs[i].map[j];
          if (char.props.visible) {
            char.props.color != undefined
              ? (this.ctx.fillStyle = char.props.color)
              : (this.ctx.fillStyle = "black");

            if (char.props.type == "box") {
              this.ctx.beginPath();
              this.ctx.moveTo(char.polygon[0].x, char.polygon[0].y);
              for (let k = 0; k < char.polygon.length - 1; k++) {
                this.ctx.lineTo(char.polygon[k + 1].x, char.polygon[k + 1].y);
              }
              this.ctx.lineTo(char.polygon[0].x, char.polygon[0].y);
              this.ctx.closePath();
              if (char.props.drawStyle === "fill") {
                this.ctx.fill();
              }
              if (char.props.drawStyle === "stroke") {
                char.props.stroke.color != undefined
                  ? (this.ctx.strokeStyle = char.props.stroke.color)
                  : (this.ctx.strokeStyle = "black");

                char.props.stroke.width != undefined
                  ? (this.ctx.lineWidth = char.props.stroke.width)
                  : (this.ctx.lineWidth = 1);

                this.ctx.stroke();
              }
            }
            if (char.props.type == "circle") {
              this.ctx.beginPath();
              this.ctx.arc(
                char.pos.x,
                char.pos.y,
                char.props.radius,
                0,
                Math.PI * 2
              );
              this.ctx.closePath();
              if (char.props.drawStyle === "fill") {
                this.ctx.fill();
              }
              if (char.props.drawStyle === "stroke") {
                char.props.stroke.color != undefined
                  ? (this.ctx.strokeStyle = char.props.stroke.color)
                  : (this.ctx.strokeStyle = "black");

                char.props.stroke.width != undefined
                  ? (this.ctx.lineWidth = char.props.stroke.width)
                  : (this.ctx.lineWidth = 1);

                this.ctx.stroke();
              }
            }
            if (char.props.type === "line") {
              char.props.stroke.color != undefined
                ? (this.ctx.strokeStyle = char.props.stroke.color)
                : (this.ctx.strokeStyle = "black");

              char.props.stroke.width != undefined
                ? (this.ctx.lineWidth = char.props.stroke.width)
                : (this.ctx.lineWidth = 1);

              this.ctx.beginPath();
              this.ctx.moveTo(char.props.startPoint.x, char.props.startPoint.y);
              this.ctx.lineTo(char.props.endPoint.x, char.props.endPoint.y);
              this.ctx.closePath();
              this.ctx.stroke();
            }
            if (char.props.type === "text") {
              char.props.color != undefined
                ? (this.ctx.fillStyle = char.props.color)
                : (this.ctx.fillStyle = "black");

              char.props.font != undefined
                ? (this.ctx.font =
                    char.props.font.size + "px" + char.props.font.fontFamily)
                : (this.ctx.font = "48px Arial");

              this.ctx.fillText(
                char.props.text.toString(),
                char.pos.x,
                char.pos.y
              );
            }
          }
        }
      }
      if (this.objs[i].type === 'text') {
        this.objs[i].props.font != undefined
            ? (this.ctx.font =
                this.objs[i].props.font.size + "px" + this.objs[i].props.font.fontFamily)
            : (this.ctx.font = "48px Arial");

          this.ctx.fillText(
            this.objs[i].text.toString(),
            this.objs[i].pos.x,
            this.objs[i].pos.y
          );
      }
    }
    if (camera) {
      this.ctx.restore();
    }
  }
  saveImage(url = "", x = 0, y = 0, name = "") {
    const texture = new Image();
    texture.src = url;

    texture.onload = () => {
      const data = this.ctx.getImageData(x, y, texture.width, texture.height);
      localStorage.setItem(name, data);
    };
  }
  loadImage(name) {
    const obj = localStorage.getItem(name);
    return obj ? obj : console.error("Image not found: " + name);
  }
  add(obj = Object) {
    this.objs.push(obj);
  }
  remove(obj = Object) {
    this.objs.splice(this.objs.indexOf(obj), 1);
  }
  clear() {
    this.objs = [];
    this.ctx.clearRect(0, 0, this._canvasWidth, this._canvasHeight);
  }
  get(obj = Object) {
    return this.objs.indexOf(obj);
  }
  update() {
    for (let i = 0; i < this.objs.length; i++) {
      if (this.objs[i].type === "box" || this.objs[i].type === "texturedbox") {
        this.objs[i].update();
      }
      if (this.objs[i].type == "map") {
        for (let j = 0; j < this.objs[i].map.length; j++) {
          const char = this.objs[i].map[j];
          for (let k = 0; k < Object.keys(char.props).length; k++) {
            if (typeof char.props[Object.keys(char.props)[k]] === "function") {
              if (char.props[Object.keys(char.props)[k]].name == "collision") {
                char.props[Object.keys(char.props)[k]](char, this.objs[i].map);
              } else {
                char.props[Object.keys(char.props)[k]](char);
              }
            }
          }
        }
      }
    }
  }
  createGradient(type = "", colors = [], width = 0, height = 0) {
    if (type === "linear") {
      const gradient = this.ctx.createLinearGradient(0, 0, width, height);
      for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        gradient.addColorStop(i / colors.length, color);
      }
      return gradient;
    }
  }
  createRGBAColor(r = 0, g = 0, b = 0, a = 1) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }
  createHexColor(str = "") {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = "#";
    for (var i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xff;
      colour += ("00" + value.toString(16)).substr(-2);
    }
    return colour;
  }
  convertHexToRGBA(hex = "") {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return (
        "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)"
      );
    }
  }
  setSize(width = 0, height = 0) {
    this._canvasWidth = this.domElement.width = width;
    this._canvasHeight = this.domElement.height = height;
  }
  setColor(color = "") {
    this.domElement.style.backgroundColor = color;
  }
  setAlpha(alpha = 1) {
    this.domElement.style.opacity = alpha;
  }
}

class Texture2D {
  constructor(url = "", onload = () => {}) {
    this.url = url;
    this.texture = new Image();
    this.texture.src = url;
    this.onload = onload;
    this.load = false;

    this.texture.onload = () => {
      this.load = true;
      this.onload();
    };
  }
}

class PerspectiveCamera2D {
  constructor(x = 0, y = 0) {
    this.pos = {
      x: x,
      y: y,
    };
  }
  setPos(x = 0, y = 0) {
    this.pos = { x: x, y: y };
  }
  scale(s = 0) {
    this.pos.x *= s;
    this.pos.y *= s;
  }
}

function lerp(a = 0, b = 0, t = 0) {
  //Linearly interpolates between two points.
  return a + (b - a) * t;
}

function randomInt(min = 0, max = 1) {
  // returns a random integer between min and max
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFloat(min = 0, max = 1) {
  // returns a random float between min and max
  return Math.random() * (max - min) + min;
}

class Vec2 {
  constructor(x = 0, y = 0) {
    // X and Y
    this.x = x;
    this.y = y;
  }
  get xPos() {
    // Get X position
    return this.x;
  }
  get yPos() {
    // Get Y position
    return this.y;
  }
  set xPos(x = 0) {
    // Set X position
    this.x = x;

    return this;
  }
  set yPos(y = 0) {
    // Set Y position
    this.y = y;

    return this;
  }
  set(x = 0, y = 0) {
    // Both X and Y
    this.x = x;
    this.y = y;

    return this;
  }
  setPostion(v = 0) {
    // set Both X and Y to the same value
    this.x = v;
    this.y = v;

    return this;
  }
  clone() {
    // Create a new Vec2
    return this.constructor(this.x, this.y);
  }
  scale(s = 0) {
    // Scale both X and Y
    this.x *= s;
    this.y *= s;

    return this;
  }
  getPosition() {
    // Get the position of the Vec2
    const pos = {
      x: this.x,
      y: this.y,
    };

    return pos;
  }
  divide(s = 0) {
    this.x = this.x / s;
    this.y = this.y / s;

    return this;
  }
  add(s = 0) {
    this.x = this.x + s;
    this.y = this.y + s;
  }
  random(min, max) {
    this.x = randomFloat(min, max);
    this.y = randomFloat(min, max);

    return this
  }
}

class TextObject {
  constructor(text = "", x = 0, y = 0) {
    this.text = text;
    this.pos = { x: x, y: y };
    this.props = {};
    this.type = "text";
  }
}

class Box2D {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    // Position in a dictionary
    this.pos = {
      x: x,
      y: y,
    };
    // Dimensions
    this.width = width;
    this.height = height;

    // Properties
    this.props = {
      visible: true,
    };

    // Custom properties
    this.tags = {};

    // Class & type
    this.class = "polygon";
    this.type = "box";

    // Polygon
    this.polygon = this.createPolygon();
  }

  createPolygon() {
    // Array of points
    let points = [];

    // Top left vertex
    points.push({
      x: this.pos.x - this.width / 2,
      y: this.pos.y - this.height / 2,
    });

    // Top right vertex
    points.push({
      x: this.pos.x + this.width / 2,
      y: this.pos.y - this.height / 2,
    });

    // Bottom Right vertex
    points.push({
      x: this.pos.x + this.width / 2,
      y: this.pos.y + this.height / 2,
    });

    // Bottom left vertex
    points.push({
      x: this.pos.x - this.width / 2,
      y: this.pos.y + this.height / 2,
    });

    return points;
  }

  // Recrates the polygon
  update() {
    this.polygon = this.createPolygon();
  }
}

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
    };

    // Custome properties
    this.tags = {};

  }
}

class Polygon {
  constructor(points = []) {
    // points is an array of Vec2 objects
    this.props = {
      visible: true,
    };

    this.polygon = points;
    this.tags = {};

    this.class = "polygon";

    // Generate a vector from points
    this.points.forEach((point) => {
      point.push(new Vec2(point[0], point[1]));

      point.splice(0, 2);
    });
  }
}

class Line {
  constructor(startX = 0, startY = 0, endX = 0, endY = 0) {
    // StartX, StartY, EndX, EndY are put into a Vec2 object
    this.startPoint = new Vec2(startX, startY);
    this.endPoint = new Vec2(endX, endY);

    this.props = {
      visible: true,
    };

    this.tags = {};

    this.type = "line";
  }
}

var polygon = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Box2D: Box2D,
	Circle2D: Circle2D,
	Line: Line,
	Polygon: Polygon
});

class TexturedCircle2D extends Circle2D {
  constructor(x = 0, y = 0, radius = 0, texture = new Texture2D()) {
    super(x, y, radius);

    this.texture = texture;
    this.type = 'texturedcircle';
  }
}

class TexturedBox2D extends Box2D {
    constructor(x = 0, y = 0, width = 0, height = 0, texture = new Texture2D) {
        super(x, y, width, height);

        this.texture = texture;
        this.type = 'texturedbox';
    }
}

class TexturedPolygon extends Polygon {
    constructor (points = [], texture = new Texture2D()) {
        super(points);

        this.texture = texture;
        this.class = "texturedpoly";
    }
}

var textured = /*#__PURE__*/Object.freeze({
	__proto__: null,
	TexturedBox2D: TexturedBox2D,
	TexturedCircle2D: TexturedCircle2D,
	TexturedPolygon: TexturedPolygon
});

class Pentagon2D extends Box2D {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    super(x, y, width, height);
  }
  createPolygon() {
    const points = [];
    const width4 = this.width - this.width / 4;

    points.push({
      x: this.pos.x - width4,
      y: this.pos.y - this.height / 2,
    });

    points.push({
      x: this.pos.x,
      y: this.pos.y - this.height,
    });

    points.push({
      x: this.pos.x + width4,
      y: this.pos.y - this.height / 2,
    });

    points.push({
      x: this.pos.x + this.width / 2,
      y: this.pos.y + this.height / 2,
    });

    points.push({
      x: this.pos.x - this.width / 2,
      y: this.pos.y + this.height / 2,
    });

    return points;
  }
}

class Hexagon2D extends Box2D {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  createPolygon() {
    const points = [];
    const width4 = this.width - this.width / 4;
    const height8 = this.height - this.height / 8;

    points.push({
      x: this.pos.x - width4,
      y: this.pos.y - this.height / 2,
    });

    points.push({
      x: this.pos.x,
      y: this.pos.y - height8,
    });

    points.push({
      x: this.pos.x + width4,
      y: this.pos.y - this.height / 2,
    });

    points.push({
      x: this.pos.x + width4,
      y: this.pos.y + this.height / 2,
    });

    points.push({
      x: this.pos.x,
      y: this.pos.y + height8,
    });

    points.push({
      x: this.pos.x - width4,
      y: this.pos.y + this.height / 2,
    });

    return points;
  }
}

var advancedgeometry = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Hexagon2D: Hexagon2D,
	Pentagon2D: Pentagon2D
});

function addKeyListeners(key = '') {
  document.addEventListener("keydown", (e) => {
    if (e.key == key) {
      return true;
    }
  });
}

class Sound {
  constructor(path) {
    this.sound = document.createElement("audio");
    this.sound.src = path;

    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }
  play() {
    this.sound.play();
  }
  stop() {
    this.sound.pause();
  }
}

function checkCollision(shape1 = Object, shape2 = Object) {
  // If both shapes are circles
  if (shape1.type === "circle" && shape2.type === "circle") {
    // Calculate the distance between the centers
    const a = shape1.radius + shape2.radius;
    const x = shape1.pos.x - shape2.pos.x;
    const y = shape1.pos.y - shape2.pos.y;

    // if the distance between the centers is less than the radius
    if (a > Math.sqrt(x * x + y * y)) {
      // return true
      return true;
    } else {
      // return false
      return false;
    }
  }

  // If both shapes are polygons
  if (shape1.class === "polygon" && shape2.class === "polygon") {
    // Helper function
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

  // If one shape is a polygon and the other is a circle
  if (shape1.class === "polygon" && shape2.type === "circle") {
    // Gets the distance between the center of the circle and the polygon
    const distX = Math.abs(shape2.pos.x - shape1.pos.x);
    const distY = Math.abs(shape2.pos.y - shape1.pos.y);

    // if distance is greater than the radius of the circle + the width or height of the polygon
    if (
      distX > shape1.width / 2 + shape2.radius ||
      distY > shape1.height / 2 + shape2.radius
    ) {
      // Collision is not possible
      return false;
    }

    // if distance is less than the radius of the circle + the width or height of the polygon
    if (distX <= shape1.width / 2 || distY <= shape1.height / 2) {
      // collision is detected and possible
      return true;
    }
    const sqrt = (distX - shape1.width / 2)^2 + (distY - shape1.height)^2;
    return sqrt <= (shape2.radius^2)
  }

  // Same as above but shape1 is a circle and shape2 is a polygon
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

    const sqrt = (distX - shape2.width)^2 + (distY - shape2.height)^2;
    return sqrt <= (shape1.radius^2)
  }
  return console.error("shapes do not have a proper type or class")
}

class BasicMap {
  constructor(map = [[]], key = {}, value = "1x1") {
    this.map = map;
    this.key = key;
    this.value = value;
    this.type = "map";

    const processedMap = [];
    for (let i = 0; i < this.map.length; i++) {
      const row = this.map[i];

      for (let j = 0; j < row.length; j++) {
        const text = row[j];

        for (let k = 0; k < text.length; k++) {
          let cell = text[k];
          let char = cell;

          if (cell != " ") {
            const value = this.value.split('x');
            const x = k * Number(value[0]);
            const y = i * Number(value[1]);
            const width = Number(value[0]);
            const height = Number(value[1]);
            const generateProps = () => {
              for (let i = 0; i <= Object.keys(this.key).length; i++) {
                if (this.key[cell]) {
                  const props = this.key[cell];
                  return props;
                } else if (i == Object.keys(this.key).length) {
                  console.error("No key found");
                }
              }
            };
            const props = generateProps();
            const polygon = this.generatePolygon(x, y, props.width ? props.width : width, props.height? props.height : height);
            cell = class {
              constructor(x, y, width, height, polygon, props) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.polygon = polygon;
                this.props = props;
              }
            };

            processedMap.push(
              {
                pos: {
                  x: x,
                  y: y,
                },
                type: props.type,
                class: props.type == "box" ? 'polygon' : null,
                width: props.type == "box"?  props.width ? null : Number(value[0]) : null,
                height: props.type == "box"? props.width ? null : Number(value[1]) : null,
                radius: props.type == "circle"? props.radius : null,
                charName: char,
                width: width,
                height: height,
                polygon: polygon,
                props: props
              }
            );
          }
        }
      }
    }
    this.map = processedMap;
  }
  generatePolygon(x, y, width, height) {
    const points = [];

    points.push({
      x: x - width / 2,
      y: y - height / 2,
    });

    points.push({
      x: x + width / 2,
      y: y - height / 2,
    });

    points.push({
      x: x + width / 2,
      y: y + height / 2,
    });

    points.push({
      x: x - width / 2,
      y: y + height / 2,
    });

    return points;
  }
}

exports.AdvancedGeometry = advancedgeometry;
exports.BasicGeometry = polygon;
exports.BasicMap = BasicMap;
exports.BasicRenderer2D = BasicRenderer2D;
exports.PerspectiveCamera2D = PerspectiveCamera2D;
exports.Sound = Sound;
exports.TextObject = TextObject;
exports.Texture2D = Texture2D;
exports.TexturedGeometry = textured;
exports.Vec2 = Vec2;
exports.addKeyListeners = addKeyListeners;
exports.checkCollision = checkCollision;
exports.lerp = lerp;
exports.randomFloat = randomFloat;
exports.randomInt = randomInt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VuZHJvcC5janMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=
