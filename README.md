<h1 align="center">SunDrop</h1><p align="center"><img style="width:150px;height:150px" src="https://github.com/GappleCider/SunDrop/blob/main/Logo.PNG"></p>

<p align="center">
    <img src="https://img.shields.io/badge/version-0.0.7-blue"> 
    <img src="https://img.shields.io/badge/deepscan-passing-lime">
    <img src="https://img.shields.io/badge/downloads-150/week-yellow">
    <img src="https://img.shields.io/badge/Npm%20version-0.151.1+-orange">
</p>

## SunDrop is a Javascript game engine

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
