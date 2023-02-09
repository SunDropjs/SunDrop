function lerp(a, b, t) {
    return a + (b - a) * t;
}

function vec2(x, y) {
    return [x, y];
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export {lerp, vec2, random};