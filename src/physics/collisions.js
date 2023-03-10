import { lerp } from "../utils.js";

function checkCollision(shape1, shape2) {
  // If both shapes are circles
  if (shape1.type === "circle" && shape2.type === "circle") {
    // Calculate the distance between the centers
    const a = shape1.radius + shape2.radius;
    const x = shape1.pos.x - shape2.pos.x;
    const y = shape1.pos.y - shape2.pos.y;

    // if the distance between the centers is less than the radius
    if (a > Math.sqrt(x * x + y * y)) {
      // return true
      return true;
    } else {
      // return false
      return false;
    }
  }

  // If both shapes are polygons
  if (shape1.class === "polygon" && shape2.class === "polygon") {
    // Helper function
    function getIntersection(A, B, C, D) {
      const tTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
      const uTop = (C.y - A.y) * (A.x - B.x) - (C.x - A.x) * (A.y - B.y);
      const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);

      if (bottom != 0) {
        const t = tTop / bottom;
        const u = uTop / bottom;
        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
          return {
            x: lerp(A.x, B.x, t),
            y: lerp(A.y, B.y, t),
            offset: t,
          };
        }
      }

      return null;
    }

    for (let i = 0; i < shape1.polyon; i++) {
      for (let j = 0; j < shape2.polyon; j++) {
        const intersection = getIntersection(
          shape1.points[i],
          shape2.points[j],
          shape1.points[(i + 1) % shape1.polyon],
          shape2.points[(j + 1) % shape2.polyon]
        );

        if (intersection) {
          return true;
        }
      }
    }

    return false;
  }

  // If one shape is a polygon and the other is a circle
  if (shape1.class === "polygon" && shape2.type === "circle") {
    // Gets the distance between the center of the circle and the polygon
    const distX = Math.abs(shape2.pos.x - shape1.pos.x);
    const distY = Math.abs(shape2.pos.y - shape1.pos.y);

    // if distance is greater than the radius of the circle + the width or height of the polygon
    if (
      distX > shape1.width / 2 + shape2.radius ||
      distY > shape1.height / 2 + shape2.radius
    ) {
      // Collision is not possible
      return false;
    }

    // if distance is less than the radius of the circle + the width or height of the polygon
    if (distX <= shape1.width / 2 || distY <= shape1.height / 2) {
      // collision is detected and possible
      return true;
    }
  }

  // Same as above but shape1 is a circle and shape2 is a polygon
  if (shape1.type === "circle" && shape2.class === "polygon") {
    const distX = Math.abs(shape1.pos.x - shape2.pos.x);
    const distY = Math.abs(shape1.pos.y - shape2.pos.y);

    if (
      distX > shape2.width / 2 + shape1.radius ||
      distY > shape2.height / 2 + shape1.radius
    ) {
      return false;
    }

    if (distX <= shape2.width / 2 || distY <= shape2.height / 2) {
      return true;
    }
  }
}

export { checkCollision };