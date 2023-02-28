# SunDrop

## Sundrop is currently a Javascript game engine  

Sundrop is based on Phaser.js and Three.js 

**Use:**  

```bash
npm install sundrop
```  

### When Installed  

```javascript
import * as SUN from "sundrop";

const renderer = new SUN.Renderer();

renderer.setColor("black")

document.body.appendChild(renderer.domElement);

function animate() {
    renderer.render()
    renderer.update()

    requestAnimationFrame(animate)
}

animate()
```