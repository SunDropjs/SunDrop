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

    constructor( x, y, width, height ) {
        
        this.pos = {
            x: x,
            y: y
        };
        this.width = width;
        this.height = height;

        this.props = {

          visible: true

        };

        this.tags = {

        };

        this.class = 'polygon';
        this.type = 'box';

        this.polygon = this.createPolygon( );
    }

    createPolygon() {

        let points = [];

        points.push({
            x: this.pos.x - ( this.width / 2 ),
            y: this.pos.y - ( this.height / 2 )
        });

        points.push({
          x: this.pos.x + ( this.width / 2 ),
          y: this.pos.y - ( this.height / 2 )
        });

        points.push({
          x: this.pos.x + ( this.width / 2),
          y: this.pos.y + ( this.height / 2)
        });

        points.push({
          x: this.pos.x - ( this.width / 2 ),
          y: this.pos.y + ( this.height / 2 )
        });

        return points
    }

    update() {

      this.polygon = this.createPolygon( );

    }
  }

exports.Box = Box;
exports.Line = Line;
exports.Polygon = Polygon;
exports.Renderer = Renderer;
exports.Vec2 = Vec2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VuZHJvcC5janMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=
