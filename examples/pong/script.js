import * as SUN from '../../build/sundrop.module.js'

const renderer = new SUN.BasicRenderer2D()

renderer.setColor('black')

document.body.appendChild(renderer.domElement)

const paddle = new SUN.BasicGeometry.Box2D(
  10,
  window.innerHeight / 2,
  10,
  window.innerHeight / 10
)

const paddle2 = new SUN.BasicGeometry.Box2D(
  window.innerWidth - 10,
  window.innerHeight / 2,
  10,
  window.innerHeight / 10
)

paddle.props = {
  visible: true,
  drawStyle: 'fill',
  color: 'white'
}

paddle2.props = {
  visible: true,
  drawStyle: 'fill',
  color: 'white'
}

const ball = new SUN.BasicGeometry.Circle2D(
  window.innerWidth / 2,
  window.innerHeight / 2,
  10
)

ball.props = {
  visible: true,
  drawStyle: 'fill',
  color: 'white'
}

const centerLine = new SUN.BasicGeometry.Line(
  window.innerWidth / 2,
  0,
  window.innerWidth / 2,
  window.innerHeight
)

centerLine.props = {
  visible: true,
  stroke: { color: 'white' }
}

renderer.add(paddle)
renderer.add(paddle2)
renderer.add(ball)
renderer.add(centerLine)

let addX = -8
let addY = -8

function animate () {
  if (ball.pos.y <= ball.radius) {
    addY = -addY
  }
  if (ball.pos.y >= window.innerHeight) {
    addY = -addY
  }
  if (ball.pos.x <= paddle.pos.x || ball.pos.x >= paddle2.pos.x) {
    ball.pos.x = SUN.randomInt(0, window.innerWidth)
    ball.pos.y = SUN.randomInt(0, window.innerHeight)
  }
  const paddleCollide = SUN.checkCollision(ball, paddle)
  const paddleCollide2 = SUN.checkCollision(ball, paddle2)

  if (paddleCollide) {
    addX = 8
  }
  if (paddleCollide2) {
    addX = -8
  }

  ball.pos.x += addX
  ball.pos.y += addY

  if (ball.pos.y > paddle2.pos.y) {
    paddle2.pos.y += SUN.randomInt(7, 8)
  } else if (ball.pos.y < paddle2.pos.y) {
    paddle2.pos.y -= SUN.randomInt(7, 8)
  }

  document.addEventListener('mousemove', (e) => {
    paddle.pos.y = e.clientY
  })

  document.addEventListener('touchmove', (e) => {
    paddle.pos.y = e.touches[0].clientY
  })

  renderer.render()
  renderer.update()

  requestAnimationFrame(animate)
}

animate()
