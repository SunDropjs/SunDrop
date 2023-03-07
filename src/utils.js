function lerp(a, b, t) {
  return a + (b - a) * t;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export { lerp, randomInt, randomFloat };
