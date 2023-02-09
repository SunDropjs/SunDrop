import * as SUN from "../../build/index.mjs";

SUN.init({ backgroundColor: "black" });

const renderer = new SUN.Renderer();

const paddle = new SUN.Box(
  10,
  window.innerHeight / 2,
  10,
  window.innerHeight / 10
);

const paddle2 = new SUN.Box(
  window.innerWidth - 10,
  window.innerHeight / 2,
  10,
  window.innerHeight / 10
);

paddle.props = {
  visible: true,
  style: "fill",
  color: "white",
};

paddle2.props = {
  visible: true,
  style: "fill",
  color: "white",
};

const ball = new SUN.Circle(window.innerWidth / 2, window.innerHeight / 2, 10);

ball.props = {
  visible: true,
  style: "fill",
  color: "white",
};

const centerLine = new SUN.Line(
  window.innerWidth / 2,
  0,
  window.innerWidth / 2,
  window.innerHeight
);

centerLine.props = {
  visible: true,
  stroke: { color: "white" },
};

renderer.add(paddle);
renderer.add(paddle2);
renderer.add(ball);
renderer.add(centerLine);

let addX = -4;
let addY = -4;

function animate() {
  if (ball.pos.y <= 10) {
    addY = -addY;
  }
  if (ball.pos.y >= window.innerHeight) {
    addY = -addY;
  }
  if (ball.pos.x <= paddle.pos.x || ball.pos.x >= paddle2.pos.x) {
    ball.pos.x = window.innerWidth / 2;
    ball.pos.y = window.innerHeight / 2;
  }
  let paddleCollide = SUN.checkCollision(ball, paddle);
  let paddleCollide2 = SUN.checkCollision(ball, paddle2);

  if (paddleCollide) {
    addX = 4;
  }
  if (paddleCollide2) {
    addX = -4;
  }

  ball.pos.x += addX;
  ball.pos.y += addY;

  if (ball.pos.y > paddle2.pos.y) {
    paddle2.pos.y += 4 + SUN.random(0, 2) - SUN.random(0, 4);
  } else if (ball.pos.y < paddle2.pos.y) {
    paddle2.pos.y -= 4 + SUN.random(0, 2) - SUN.random(0, 4);
  }

  document.addEventListener("mousemove", (e) => {
    paddle.pos.y = e.clientY;
  });

  document.addEventListener("touchmove", (e) => {
    paddle.pos.y = e.touches[0].clientY;
  });

  renderer.render();
  renderer.update();

  requestAnimationFrame(animate);
}

animate();
