/**
 * @class
 * @classdesc A Basic Image Class
 * @description A Basic Image Class
 */
class Texture2D {
  public url: string;
  public texture: HTMLImageElement;
  public onload: (...args: any[]) => void;
  public load: boolean;

  /**
   * @constructs
   * @param {string} url The path to the image file
   * @param {callback} onload The callback function to call when the texture loads
   * @property {HTMLImageElement} texture The image texture
   */
  constructor(url: string, onload: (...args: any[]) => void) {
    const args = onload.arguments;
    this.url = url;
    this.texture = new Image();
    this.texture.src = url;
    this.onload = onload;
    this.load = false;

    this.texture.onload = () => {
      this.load = true;
      this.onload(args);
    };
  }
}

export { Texture2D };
