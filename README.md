<h1 align="center">SunDrop</h1><p align="center"><img style="width:200px;height:200px" src="https://github.com/GappleCider/SunDrop/blob/main/Logo.PNG"></p>

## SunDrop is currently a Javascript game engine

SunDrop is based on Phaser.js and Three.js 

**How to Install:**

```bash
npm install sundrop
```  

**When Installed:**

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
