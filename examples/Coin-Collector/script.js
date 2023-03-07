import * as SUN from '../../build/sundrop.module.js'

const renderer = new SUN.Renderer()

renderer.setColor('#47f6ff')

document.body.appendChild(renderer.domElement)

function animate() {
    renderer.render();
    renderer.update();
    requestAnimationFrame(animate)
}

animate();