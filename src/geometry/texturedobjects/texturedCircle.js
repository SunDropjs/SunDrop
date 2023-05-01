import { Circle2D } from '../circle.js'
import { Texture2D } from '../../renderer/images/texture.js'

class TexturedCircle2D extends Circle2D {
  constructor (x = 0, y = 0, radius = 0, texture = new Texture2D()) {
    super(x, y, radius)

    this.texture = texture
    this.type = 'texturedcircle'
  }
}

export { TexturedCircle2D }
