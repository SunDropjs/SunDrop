function lerp(a, b, t) {
  //Linearly interpolates between two points.
  return a + (b - a) * t;
}

function randomInt(min, max) {
  // returns a random integer between min and max
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFloat(min, max) {
  // returns a random float between min and max
  return Math.random() * (max - min) + min;
}

export { lerp, randomInt, randomFloat };
