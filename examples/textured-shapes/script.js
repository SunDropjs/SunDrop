import * as SUN from '../../build/sundrop.module.js'

const renderer = new SUN.BasicRenderer2D()
renderer.setColor('lightblue')

document.body.appendChild(renderer.domElement)

const texture1 = new SUN.Texture2D('texture2.png')
const box = new SUN.TexturedGeometry.TexturedBox2D(
  window.innerWidth / 2,
  window.innerHeight / 2,
  100,
  100,
  texture1
)

box.props = {
  visible: true,
  drawStyle: 'fill'
}

renderer.add(box)

function animate () {
  renderer.render()
  renderer.update()
  requestAnimationFrame(animate)
}

animate()
