/**
 * @class
 * @classdesc The Perspective camera for SunDropjs
 * @description The Perspective camera for SunDropjs
 */
class PerspectiveCamera2D {
  /**
   * @constructs
   * @property {dictornary} pos The position of the camera
   * @property {number} pos.x The x position of the camera
   * @property {number} pos.y The y position of the camera
   * @param {number} x The starting x coordinate of the camera
   * @param {number} y The starting y coordinate of the camera
   */
  constructor (x, y) {
    this.pos = {
      x,
      y
    }
  }

  /**
   * Sets the camera position to the specified parameters
   * @param {number} x The number to set the x coordinate of the camera
   * @param {number} y The number to set the y coordinate of the camera
   */
  setPos (x, y) {
    this.pos = { x, y }
  }

  /**
   * Multiplies the camera position by the given amount
   * @param {number} s A number which the camera position will be multiplied by
   */
  scale (s) {
    this.pos.x *= s
    this.pos.y *= s
  }
}

export { PerspectiveCamera2D }
