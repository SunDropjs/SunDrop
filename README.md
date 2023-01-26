# Lexend

### Lexend is Javascript game engine

<br>

**Use:**
```npm
npm install lexend
```

### When Installed:

```javascript
 import * as LEX from 'lexend';

 LEX.init();
 
 const renderer = new LEX.Renderer()
```

<br>

###### Game of Pong:
```javascript
import * as LEX from 'lexend'

LEX.init();

const renderer = new LEX.Renderer({color: 0x000000)

const ball = new LEX.Circle(window.innerWidth / 2, window.innerHeight / 2, 5)

ball.props = {
 movable: true,
 solid: true,
 visible: true,
 color: 0xFFFFFF
}

const paddle = new LEX.Box(20, window.innerHeight / 2, 10, 50)
```
