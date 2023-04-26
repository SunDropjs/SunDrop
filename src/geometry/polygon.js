import { Vec2 } from '../math/vector2.js'
import { Box2D } from './box.js'
import { Circle2D } from './circle.js'

class Polygon {
  constructor (points = []) {
    // points is an array of Vec2 objects
    this.props = {
      visible: true
    }

    this.polygon = points
    this.tags = {}

    this.class = 'polygon'

    // Generate a vector from points
    this.points.forEach((point) => {
      point.push(new Vec2(point[0], point[1]))

      point.splice(0, 2)
    })
  }
}

class Line {
  constructor (startX = 0, startY = 0, endX = 0, endY = 0) {
    // StartX, StartY, EndX, EndY are put into a Vec2 object
    this.startPoint = new Vec2(startX, startY)
    this.endPoint = new Vec2(endX, endY)

    this.props = {
      visible: true
    }

    this.tags = {}

    this.type = 'line'
  }
}

export { Polygon, Line, Box2D, Circle2D }
