# Lexend  

## Lexend is Javascript game engine  

**Use:**  

```npm
npm install lexend
```  

### When Installed  

```javascript
import * as LEX from "lexend";

LEX.init();

const renderer = new LEX.Renderer();
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
import * as LEX from "lexend";

LEX.init({ color: 0x000000 });

const renderer = new LEX.Renderer();

const ball = new LEX.Circle(window.innerWidth / 2, window.innerHeight / 2, 5);

ball.props = {
  movable: true,
  solid: true,
  visible: true,
  color: 0xffffff,
};

const paddle = new LEX.Box(20, window.innerHeight / 2, 10, 50);
```
