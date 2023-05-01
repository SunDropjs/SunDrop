import * as SUN from '../../build/sundrop.module.js'

const renderer = new SUN.BasicRenderer2D()
renderer.setColor('lightblue')
document.body.appendChild(renderer.domElement)

const penta = new SUN.AdvancedGeometry.Hexagon2D(
  window.innerWidth / 2,
  window.innerHeight / 2,
  70,
  70
)
penta.props = {
  visible: true,
  drawStyle: 'fill',
  color: 'blue'
}

renderer.add(penta)

function animate () {
  renderer.render()
  requestAnimationFrame(animate)
}

animate()
