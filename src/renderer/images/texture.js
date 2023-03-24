class Texture2D {
  constructor(url = "", onload = () => {}) {
    this.url = url;
    this.texture = new Image();
    this.texture.src = url;
    this.onload = onload;
    this.load = false

    this.texture.onload = () => {
      this.load = true
      this.onload();
    };
  }
}

export { Texture2D };
