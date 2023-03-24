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

export { lerp, randomInt, randomFloat };
