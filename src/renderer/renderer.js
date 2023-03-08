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

export { Renderer };
