import * as LEX from "../../build/index.mjs";

console.log(LEX)

LEX.init({ backgroundColor: "black" });

const renderer = new LEX.Renderer();

const paddle = new LEX.Box(
  10,
  window.innerHeight / 2,
  10,
  window.innerHeight / 10
);

paddle.props = {
  visible: true,
  color: "white",
  gravity: "2d",
  material: "bouncy",
  solid: "screenBorders."
};

const ball = new LEX.Circle(window.innerWidth / 2, window.innerHeight / 2,  10)

ball.props = {
  visible: true,
  color: "white",
}

renderer.add(paddle);
renderer.add(ball);

function animate() {
  if (ball.pos.x !== Math.round(paddle.pos.x)) {
    if (ball.pos.x > paddle.pos.x) {
      ball.pos.x -= 1
      } else {
        ball.pos.x += 1
      }
  }
  if (ball.pos.y!== Math.round(paddle.pos.y)) {
    if (ball.pos.y > paddle.pos.y) {
      ball.pos.y -= 1
      } else {
        ball.pos.y += 1
      }
  }
  document.addEventListener("mousemove", (e) => {
    paddle.pos.y = e.clientY;
})
document.addEventListener("touchmove", (e) => {
  paddle.pos.y = e.touches[0].clientY;
})
  paddle.update();


  renderer.render();

  requestAnimationFrame(animate);
}

animate();