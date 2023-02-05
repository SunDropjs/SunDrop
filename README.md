# SunDrop

## Sundrop is currently a 2d Javascript game engine  

**Use:**  

```npm
npm install sundrop
```  

### When Installed  

```javascript
import * as SUN from "sundrop";

SUN.init();

const renderer = new SUN.Renderer();
```  

### Game of Pong  

#### HTML

```html
<body style="overflow: hidden">
 <style>
  body {
    margin: 0;
    padding: 0;
  }
 </style>
 <script src="path/to/your/javascript/file"></script>
</body>
```  

#### Javascript  

```javascript
import * as SUN from "sundrop";

SUN.init({ color: 0x000000 });

const renderer = new SUN.Renderer();

const ball = new SUN.Circle(window.innerWidth / 2, window.innerHeight / 2, 5);

ball.props = {
  movable: true,
  solid: true,
  visible: true,
  color: 0xffffff,
};

const paddle = new SUN.Box(20, window.innerHeight / 2, 10, 50);
```
