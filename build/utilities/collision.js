import { lerp } from "./math.js";

export function checkCollision(shape1, shape2) {
  if (shape1.type === "circle" && shape2.type === "circle") {
    const a = shape1.radius + shape2.radius;
    const x = shape1.pos.x - shape2.pos.x;
    const y = shape1.pos.y - shape2.pos.y;

    if (a > Math.sqrt(x * x + y * y)) {
      return true;
    } else {
      return false;
    }
  }
  if (shape1.class === "polygon" && shape2.class === "polygon") {
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
  if (shape1.class === "polygon" && shape2.type === "circle") {
    const distX = Math.abs(shape2.pos.x - shape1.pos.x);
    const distY = Math.abs(shape2.pos.y - shape1.pos.y);

    if (
      distX > shape1.width / 2 + shape2.radius ||
      distY > shape1.height / 2 + shape2.radius
    ) {
      return false;
    }
    if (distX <= shape1.width / 2 || distY <= shape1.height / 2) {
      return true;
    }

    const hypot =
      (distX - shape1.width / 2) * (distX - shape1.width / 2) +
      (distY - shape1.height / 2) * (distY - shape1.height / 2);

    if (hypot <= shape2.radius * shape2.radius) {
      return true;
    } else {
      return false;
    }
  }
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

    const hypot =
      (distX - shape2.width / 2) * (distX - shape2.width / 2) +
      (distY - shape2.height / 2) * (distY - shape2.height / 2);

    if (hypot <= shape1.radius * shape1.radius) {
      return true;
    } else {
      return false;
    }
  }
}
