import * as SUN from '../../build/sundrop.module.js'

const renderer = new SUN.Renderer()

renderer.setColor('#47f6ff')

document.body.appendChild(renderer.domElement)

const map = new SUN.BasicMap([
    ['               '],
    ['               '],
    ['               '],
    ['xxxxxxxxxxxxxxx'],
    ['xxxxxxxxxxxxxxx'],
],
{
    "x": {
        color: "green"
    }
},
'5x5')

renderer.add(map)

function animate() {
    renderer.render();
    renderer.update();
    requestAnimationFrame(animate)
}

animate();