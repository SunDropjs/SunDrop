import { Box2D } from '../box.js'
import { Texture2D } from '../../renderer/images/texture.js'

class TexturedBox2D extends Box2D {
  constructor (x = 0, y = 0, width = 0, height = 0, texture = new Texture2D()) {
    super(x, y, width, height)

    this.texture = texture
    this.type = 'texturedbox'
  }
}

export { TexturedBox2D }
