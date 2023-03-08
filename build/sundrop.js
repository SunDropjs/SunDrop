/**
 * @license
 * Copyright 2023 GappleCider
 * MIT
 */
'use strict';

class Renderer {
  constructor() {
    this.objs = [];

    this.domElement = document.createElement("canvas");
    this.ctx = this.domElement.getContext("2d");
    this._canvasWidth = this.domElement.width = window.innerWidth;
    this._canvasHeight = this.domElement.height = window.innerHeight;
  }

  render() {
    this.ctx.clearRect(0, 0, this._canvasWidth, this._canvasHeight);

    for (let i = 0; i < this.objs.length; i++) {
      this.objs[i].props.color != undefined
        ? (this.ctx.fillStyle = this.objs[i].props.color)
        : (this.ctx.fillStyle = "black");

      if (this.objs[i].class === "polygon") {
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

      if (this.objs[i].type === "circle") {
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
        for (let j = 0; j < this.objs[i].processedMap.length; j++) {
          const char = this.objs[i].processedMap[j];

          char.props.color != undefined
            ? (this.ctx.fillStyle = char.props.color)
            : (this.ctx.fillStyle = "black");

          this.ctx.beginPath();
          this.ctx.moveTo(char.polygon[0].x, char.polygon[0].y);
          for (let k = 0; k < char.polygon.length - 1; k++) {
            this.ctx.lineTo(char.polygon[k + 1].x, char.polygon[k + 1].y);
          }
          this.ctx.lineTo(char.polygon[0].x, char.polygon[0].y);
          this.ctx.closePath();
          this.ctx.fill();
        }
      }
    }
  }
  add(obj) {
    this.objs.push(obj);
  }
  remove(obj) {
    this.objs.splice(this.objs.indexOf(obj), 1);
  }
  clear() {
    this.objs = [];
  }
  get(obj) {
    return this.objs.indexOf(obj);
  }
  update() {
    for (let i = 0; i < this.objs.length; i++) {
      if (this.objs[i].type === "box") {
        this.objs[i].update();
      }
    }
  }

  setSize(width, height) {
    this._canvasWidth = this.domElement.width = width;
    this._canvasHeight = this.domElement.height = height;
  }
  setColor(color) {
    this.domElement.style.backgroundColor = color;
  }
  setAlpha(alpha) {
    this.domElement.style.opacity = alpha;
  }
}

class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  get xPos() {
    return this.x
  }
  get yPos() {
    return this.y
  }
  set xPos(x) {
    this.x = x;

    return this
  }
  set yPos(y) {
    this.y = y;

    return this
  }
  set(x, y) {
    this.x = x;
    this.y = y;

    return this
  }
  setPostion(v) {
    this.x = v;
    this.y = v;

    return this
  }
  clone() {
    return this.constructor(this.x, this.y);
  }
  scale(s) {
    this.x *= s;
    this.y *= s;

    return this
  }
  getPosition() {
    const pos = {
        x: this.x,
        y: this.y
    };

    return pos
  }
}

class Polygon {
  constructor(points = []) {
    this.props = {
      visible: true,
    };

    this.polygon = points;
    this.tags = {};

    this.class = "polygon";

    this.points.forEach((point) => {
      point.push(new Vec2(point[0], point[1]));

      point.splice(0, 2);
    });
  }
}

class Line {

  constructor( startX, startY, endX, endY ) {

      this.startPoint = new Vec2( startX, startY );
      this.endPoint = new Vec2( endX, endY );

      this.props = {
        visible: true
      };

      this.tags = {

      };

      this.type = "line";
  }

}

class Box {
  constructor(x, y, width, height) {
    this.pos = {
      x: x,
      y: y,
    };
    this.width = width;
    this.height = height;

    this.props = {
      visible: true,
    };

    this.tags = {};

    this.class = "polygon";
    this.type = "box";

    this.polygon = this.createPolygon();
  }

  createPolygon() {
    let points = [];

    points.push({
      x: this.pos.x - this.width / 2,
      y: this.pos.y - this.height / 2,
    });

    points.push({
      x: this.pos.x + this.width / 2,
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

  update() {
    this.polygon = this.createPolygon();
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
  }
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function checkCollision(shape1, shape2) {
  if (shape1.type === "circle" && shape2.type === "circle") {
    const a = shape1.radius + shape2.radius;
    const x = shape1.pos.x - shape2.pos.x;
    const y = shape1.pos.y - shape2.pos.y;

    if (a > Math.sqrt(x * x + y * y)) {
      return true;
    } else {
      return false;
    }
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
  }
}

class BasicMap {
  constructor(map, key, value = "1x1") {
    this.map = map;
    this.key = key;
    this.value = value;
    this.type = "map";

    this.processMap = () => {
      const processedMap = [];
      for (let i = 0; i < this.map.length; i++) {
        this.row = this.map[i];

        for (let j = 0; j < this.row.length; j++) {
          const text = this.row[j];

          for (let k = 0; k < text.length; k++) {
            const cell = text[k];

            if (cell != " ") {
              const x = k * Number(this.value[0]);
              const y = i * Number(this.value[2]);
              const width = Number(this.value[0]);
              const height = Number(this.value[2]);
              const polygon = this.generatePolygon(x, y, width, height);
              let props = undefined;
              for (let i = 0; i < Object.keys(this.key).length; i++) {
                if (this.key[i] == cell) {
                  props = this.key[i];
                } else if (i == Object.keys(this.key).length - 1) {
                  console.error("Key not found");
                }
              }

              processedMap.push[
                ({
                  pos: {
                    x: x,
                    y: y,
                  },
                  width: width,
                  height: height,
                  polygon: polygon,
                  props: props,
                })
              ];
            }
          }
        }
      }
      return processedMap;
    };
    this.processedMap = this.processMap();
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

exports.BasicMap = BasicMap;
exports.Box = Box;
exports.Circle = Circle;
exports.Line = Line;
exports.Polygon = Polygon;
exports.Renderer = Renderer;
exports.Vec2 = Vec2;
exports.checkCollision = checkCollision;
exports.lerp = lerp;
exports.randomFloat = randomFloat;
exports.randomInt = randomInt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VuZHJvcC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIifQ==
