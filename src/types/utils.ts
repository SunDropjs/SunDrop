/**
 * Linearly interpolates between two
 * @function
 * @param {number} a Minimum value for interpolation
 * @param {number} b Maximum value for interpolation
 * @param {number} t Interpolation factor
 * @returns {number} The interpolated value
 */

function lerp(a: number = 0, b: number = 1, t: number = 0.5): number {
  //Linearly interpolates between two points.
  return a + (b - a) * t;
}

/**
 * Returns a random integer between the specified range given
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 * @returns {number} The random integer
 */
function randomInt(min: number, max: number): number {
  // returns a random integer between min and max
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Returns a random float between min and max
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 * @returns The random float
 */
function randomFloat(min: number, max: number) {
  // returns a random float between min and max
  return Math.random() * (max - min) + min;
}

export { lerp, randomInt, randomFloat };
