import { Polygon } from '../polygon.js'
import { Texture2D } from '../../renderer/images/texture.js'
import { TexturedCircle2D } from './texturedCircle.js'
import { TexturedBox2D } from './texturedBox.js'

class TexturedPolygon extends Polygon {
  constructor (points = [], texture = new Texture2D()) {
    super(points)

    this.texture = texture
    this.class = 'texturedpoly'
  }
}

export { TexturedPolygon, TexturedCircle2D, TexturedBox2D }
