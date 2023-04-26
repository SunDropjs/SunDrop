import * as SUN from '../../build/sundrop.module.js'

const renderer = new SUN.BasicRenderer2D()
const camera = new SUN.PerspectiveCamera2D()

let lives = 3
let score = 0
renderer.setColor('black')

document.body.appendChild(renderer.domElement)

const paddle = new SUN.BasicGeometry.Box2D(600, 650, 150, 25)

paddle.props = {
  visible: true,
  drawStyle: 'fill',
  color: 'yellow'
}

renderer.add(paddle)

const map = new SUN.BasicMap(
  [
    ['xxxxxxxxxxxxxxxxxxxxxxxxx'],
    ['xqwzy            s      x'],
    ['x    eeeeeeeeeeeeeee    x'],
    ['x    ddddddddddddddd    x'],
    ['x    ccccccccccccccc    x'],
    ['x    bbbbbbbbbbbbbbb    x'],
    ['x    aaaaaaaaaaaaaaa    x'],
    ['x                       x'],
    ['x                       x'],
    ['x                       x'],
    ['x                       x'],
    ['x                       x'],
    ['x                       x'],
    ['x           v           x'],
    ['x                       x'],
    ['x                       x']
  ],
  {
    x: {
      visible: false
    },
    s: {
      visible: true,
      type: 'text',
      text: 'Score: ' + score,
      color: 'white'
    },
    y: {
      visible: true,
      type: 'text',
      text: 'Lives: ' + lives,
      color: 'white'
    },
    a: {
      type: 'box',
      visible: true,
      color: '#eb3483',
      drawStyle: 'fill',
      height: 25
    },
    b: {
      visible: true,
      drawStyle: 'fill',
      type: 'box',
      height: 25,
      lives: 2,
      color: '#FFA500'
    },
    c: {
      visible: true,
      drawStyle: 'fill',
      type: 'box',
      height: 25,
      lives: 3,
      color: 'yellow'
    },
    d: {
      visible: true,
      drawStyle: 'fill',
      type: 'box',
      height: 25,
      lives: 4,
      color: 'cyan'
    },
    e: {
      visible: true,
      drawStyle: 'fill',
      type: 'box',
      height: 25,
      lives: 5,
      color: '#f508f4'
    },
    v: {
      visible: true,
      drawStyle: 'fill',
      type: 'circle',
      radius: 10,
      color: 'white',
      addX: -10,
      addY: -10,
      collision: (self, others) => {
        let collision = false
        let aCollision = false
        let bCollision = false
        let cCollision = false
        let dCollision = false
        let eCollision = false

        if (self.pos.y <= self.radius) {
          self.props.addY = -self.props.addY
        }
        if (self.pos.y >= window.innerHeight) {
          lives--
          self.pos.x = 600
          self.pos.y = 600
          paddle.pos.x = 600
          paddle.pos.y = 650
          const saveX = self.props.addX
          const saveY = self.props.addY
          self.props.addX = 0
          self.props.addY = 0
          setTimeout(() => {
            self.props.addX = -saveX
            self.props.addY = -saveY
          }, '1000')
        }
        if (self.pos.x <= self.radius) {
          self.props.addX = -self.props.addX
        }
        if (self.pos.x >= window.innerWidth) {
          self.props.addX = -self.props.addX
        }
        self.pos.x += self.props.addX
        self.pos.y += self.props.addY

        for (let i = 0; i < others.length; i++) {
          if (others[i].charName === 'a') {
            aCollision = SUN.checkCollision(self, others[i])
            if (aCollision) {
              map.map.splice(map.map.indexOf(others[i]), 1)
              score += 10
              break
            }
          }
          if (others[i].charName === 'b') {
            bCollision = SUN.checkCollision(self, others[i])
            if (bCollision && others[i].props.lives == 0) {
              map.map.splice(map.map.indexOf(others[i]), 1)
              others[i].props.lives = 2
              score += 20
              break
            } else if (bCollision) {
              others[i].props.lives--
              break
            }
          }
          if (others[i].charName === 'c') {
            cCollision = SUN.checkCollision(self, others[i])
            if (cCollision && others[i].props.lives == 0) {
              map.map.splice(map.map.indexOf(others[i]), 1)
              others[i].props.lives = 3
              score += 30
              break
            } else if (cCollision) {
              others[i].props.lives--
              break
            }
          }
          if (others[i].charName === 'd') {
            dCollision = SUN.checkCollision(self, others[i])
            if (dCollision && others[i].props.lives === 0) {
              map.map.splice(map.map.indexOf(others[i]), 1)
              others[i].props.lives = 4
              score += 40
              break
            } else if (dCollision) {
              others[i].props.lives--
              break
            }
          }
          if (others[i].charName === 'e') {
            eCollision = SUN.checkCollision(self, others[i])
            if (eCollision && others[i].props.lives === 0) {
              map.map.splice(map.map.indexOf(others[i]), 1)
              others[i].props.lives = 5
              score += 50
              break
            } else if (eCollision) {
              others[i].props.lives--
              break
            }
          }
          if (others[i].charName === 's') {
            others[i].props.text = 'Score: ' + score
          }
          if (others[i].charName === 'y') {
            others[i].props.text = 'Lives: ' + lives
          }
        }

        collision = SUN.checkCollision(self, paddle)

        if (
          collision ||
          aCollision ||
          bCollision ||
          cCollision ||
          dCollision ||
          eCollision
        ) {
          self.props.addY = -self.props.addY
        }
      }
    },
    q: {
      visible: true,
      drawStyle: 'fill',
      stroke: { color: 'red' },
      color: 'red',
      type: 'circle',
      radius: 20,
      draw: (self) => {
        if (lives < 3) {
          self.props.drawStyle = 'stroke'
        }
      }
    },
    w: {
      visible: true,
      drawStyle: 'fill',
      stroke: { color: 'red' },
      color: 'red',
      type: 'circle',
      radius: 20,
      draw: (self) => {
        if (lives < 2) {
          self.props.drawStyle = 'stroke'
        }
      }
    },
    z: {
      visible: true,
      drawStyle: 'fill',
      stroke: { color: 'red' },
      color: 'red',
      type: 'circle',
      radius: 20,
      draw: (self) => {
        if (lives < 1) {
          self.props.drawStyle = 'stroke'
        }
      }
    }
  },
  '50x50'
)

renderer.add(map)

function animate () {
  document.addEventListener('touchmove', (e) => {
    paddle.pos.x = e.touches[0].clientX
  })
  if (lives >= 0 && score != 2250) {
    renderer.render(camera)
    renderer.update()
  } else if (score === 2250) {
    renderer.clear()
    const win = new SUN.TextObject(
      'You Win!',
      window.innerWidth / 2 - 100,
      window.innerHeight / 2
    )
    win.props = {
      color: 'white'
    }

    renderer.add(win)
    renderer.render()
  } else {
    renderer.clear()
    const gameOver = new SUN.TextObject(
      'Game Over! You Lost.',
      window.innerWidth / 2 - 200,
      window.innerHeight / 2
    )
    gameOver.props = {
      color: 'white'
    }
    const scoreText = new SUN.TextObject(
      'Your Score was: ' + score,
      window.innerWidth / 2 - 170,
      window.innerHeight / 2 + 100
    )
    scoreText.props = {
      color: 'white'
    }
    renderer.add(gameOver)
    renderer.add(scoreText)
    renderer.render()
  }
  requestAnimationFrame(animate)
}

animate()
