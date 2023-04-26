import { Vec2 } from '../math/vector2.js'

/**
 * @class
 * @classdesc Basic Renderer for SunDropjs
 * @description Basic Renderer for SunDropjs
 */
class BasicRenderer2D {
  /**
   * @constructs
   * @property {array} objs The array of objects to be renderered, updated and etc.
   * @property {HtmlCanvasElement} domElement The canvas element
   * @property {CanvasRendereringContext2D} ctx The context of the domElement
   * @property {number} canvasWidth The width of the canvas
   * @property {number} canvasHeight The height of the canvas
   */
  constructor () {
    this.objs = []

    // initialize the canvas and context
    this.domElement = document.createElement('canvas')
    this.ctx = this.domElement.getContext('2d')

    // set the canvas width and height to the window size
    this.canvasWidth = this.domElement.width = window.innerWidth
    this.canvasHeight = this.domElement.height = window.innerHeight
  }

  /**
   * Renders all the objects in the Objects array
   * @param {Object} [Camera] The camera Object
   */
  render (camera) {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    if (camera) {
      this.ctx.save()
      this.ctx.translate(camera.pos.x, camera.pos.y)
    }

    for (let i = 0; i < this.objs.length; i++) {
      if (this.objs[i].type != 'map') {
        this.objs[i].props.color != undefined
          ? (this.ctx.fillStyle = this.objs[i].props.color)
          : (this.ctx.fillStyle = 'black')
      }

      if (this.objs[i].class === 'polygon') {
        if (this.objs[i].type === 'texturedbox') {
          if (this.objs[i].texture.load) {
            const texture = this.ctx.createPattern(
              this.objs[i].texture.texture,
              'repeat'
            )
            this.ctx.fillStyle = texture
          }
        }
        if (this.objs[i].props.visible) {
          this.ctx.beginPath()
          this.ctx.moveTo(this.objs[i].polygon[0].x, this.objs[i].polygon[0].y)
          for (let j = 0; j < this.objs[i].polygon.length - 1; j++) {
            this.ctx.lineTo(
              this.objs[i].polygon[j + 1].x,
              this.objs[i].polygon[j + 1].y
            )
          }
          this.ctx.lineTo(this.objs[i].polygon[0].x, this.objs[i].polygon[0].y)
          this.ctx.closePath()

          if (this.objs[i].props.drawStyle === 'fill') {
            this.ctx.fill()
          } else if (this.objs[i].props.drawStyle === 'stroke') {
            this.props.stroke.color != undefined
              ? (this.ctx.strokeStyle = this.props.stroke.color)
              : (this.ctx.strokeStyle = 'black')

            this.props.stroke.width != undefined
              ? (this.ctx.lineWidth = this.props.stroke.width)
              : (this.ctx.lineWidth = 1)

            this.ctx.stroke()
          }
        }
      }

      if (this.objs[i].type === 'line') {
        if (this.objs[i].props.visible) {
          this.objs[i].props.stroke.color != undefined
            ? (this.ctx.strokeStyle = this.objs[i].props.stroke.color)
            : (this.ctx.strokeStyle = 'black')

          this.objs[i].props.stroke.width != undefined
            ? (this.ctx.lineWidth = this.objs[i].props.stroke.width)
            : (this.ctx.lineWidth = 1)

          this.ctx.beginPath()
          this.ctx.moveTo(this.objs[i].startPoint.x, this.objs[i].startPoint.y)
          this.ctx.lineTo(this.objs[i].endPoint.x, this.objs[i].endPoint.y)
          this.ctx.closePath()
          this.ctx.stroke()
        }
      }

      if (
        this.objs[i].type === 'circle' ||
        this.objs[i].type === 'texturedcircle'
      ) {
        if (this.objs[i].type === 'texturedcircle') {
          if (this.objs[i].texture.load) {
            const texture = this.ctx.createPattern(
              this.objs[i].texture.texture,
              'repeat'
            )
            this.ctx.fillStyle = texture
          }
        }
        if (this.objs[i].props.visible) {
          this.ctx.beginPath()
          this.ctx.arc(
            this.objs[i].pos.x,
            this.objs[i].pos.y,
            this.objs[i].radius,
            0,
            Math.PI * 2
          )
          this.ctx.closePath()
          if (this.objs[i].props.drawStyle === 'fill') {
            this.ctx.fill()
          }
          if (this.objs[i].props.drawStyle === 'stroke') {
            this.objs[i].props.stroke.color != undefined
              ? (this.ctx.strokeStyle = this.objs[i].props.stroke.color)
              : (this.ctx.strokeStyle = 'black')

            this.objs[i].props.stroke.width != undefined
              ? (this.ctx.lineWidth = this.objs[i].props.stroke.width)
              : (this.ctx.lineWidth = 1)

            this.ctx.stroke()
          }
        }
      }
      if (this.objs[i].type === 'map') {
        for (let j = 0; j < this.objs[i].map.length; j++) {
          const char = this.objs[i].map[j]
          if (char.props.visible) {
            char.props.color != undefined
              ? (this.ctx.fillStyle = char.props.color)
              : (this.ctx.fillStyle = 'black')

            if (char.props.type == 'box') {
              this.ctx.beginPath()
              this.ctx.moveTo(char.polygon[0].x, char.polygon[0].y)
              for (let k = 0; k < char.polygon.length - 1; k++) {
                this.ctx.lineTo(char.polygon[k + 1].x, char.polygon[k + 1].y)
              }
              this.ctx.lineTo(char.polygon[0].x, char.polygon[0].y)
              this.ctx.closePath()
              if (char.props.drawStyle === 'fill') {
                this.ctx.fill()
              }
              if (char.props.drawStyle === 'stroke') {
                char.props.stroke.color != undefined
                  ? (this.ctx.strokeStyle = char.props.stroke.color)
                  : (this.ctx.strokeStyle = 'black')

                char.props.stroke.width != undefined
                  ? (this.ctx.lineWidth = char.props.stroke.width)
                  : (this.ctx.lineWidth = 1)

                this.ctx.stroke()
              }
            }
            if (char.props.type == 'circle') {
              this.ctx.beginPath()
              this.ctx.arc(
                char.pos.x,
                char.pos.y,
                char.props.radius,
                0,
                Math.PI * 2
              )
              this.ctx.closePath()
              if (char.props.drawStyle === 'fill') {
                this.ctx.fill()
              }
              if (char.props.drawStyle === 'stroke') {
                char.props.stroke.color != undefined
                  ? (this.ctx.strokeStyle = char.props.stroke.color)
                  : (this.ctx.strokeStyle = 'black')

                char.props.stroke.width != undefined
                  ? (this.ctx.lineWidth = char.props.stroke.width)
                  : (this.ctx.lineWidth = 1)

                this.ctx.stroke()
              }
            }
            if (char.props.type === 'line') {
              char.props.stroke.color != undefined
                ? (this.ctx.strokeStyle = char.props.stroke.color)
                : (this.ctx.strokeStyle = 'black')

              char.props.stroke.width != undefined
                ? (this.ctx.lineWidth = char.props.stroke.width)
                : (this.ctx.lineWidth = 1)

              this.ctx.beginPath()
              this.ctx.moveTo(char.props.startPoint.x, char.props.startPoint.y)
              this.ctx.lineTo(char.props.endPoint.x, char.props.endPoint.y)
              this.ctx.closePath()
              this.ctx.stroke()
            }
            if (char.props.type === 'text') {
              char.props.color != undefined
                ? (this.ctx.fillStyle = char.props.color)
                : (this.ctx.fillStyle = 'black')

              char.props.font != undefined
                ? (this.ctx.font =
                    char.props.font.size + 'px' + char.props.font.fontFamily)
                : (this.ctx.font = '48px Arial')

              this.ctx.fillText(
                char.props.text.toString(),
                char.pos.x,
                char.pos.y
              )
            }
          }
        }
      }
      if (this.objs[i].type === 'text') {
        this.objs[i].props.font != undefined
          ? (this.ctx.font =
              this.objs[i].props.font.size +
              'px' +
              this.objs[i].props.font.fontFamily)
          : (this.ctx.font = '48px Arial')

        this.ctx.fillText(
          this.objs[i].text.toString(),
          this.objs[i].pos.x,
          this.objs[i].pos.y
        )
      }
    }
    if (camera) {
      this.ctx.restore()
    }
  }

  /**
   * Loads the image from the url and saves it to local storage.
   * @param {string} url  Path to the location of the image
   * @param {string} name Name of the image
   * @param {number} x  X postion of the image
   * @param {number} y  Y postion of the image
   */
  saveImage (url, name, x = 0, y = 0) {
    const texture = new Image()
    texture.src = url

    texture.onload = () => {
      const data = this.ctx.getImageData(x, y, texture.width, texture.height)
      localStorage.setItem(name, data)
    }
  }

  /**
   * Gets the image data from local storage
   * @param {string} name The name of the image
   * @returns {Object|error} If the image data is found in local storage then an object is returned else an error is returned
   */
  loadImage (name) {
    const obj = localStorage.getItem(name)
    return obj || console.error('Image not found: ' + name)
  }

  /**
   * adds a Object to {@link BasicRenderer2D|objs} array
   * @param {Object} obj The object to be added to the {@link BasicRenderer2D|objs} array
   */
  add (obj) {
    this.objs.push(obj)
  }

  /**
   * remove the object from the {@link BasicRenderer2D|objs} array
   * @param {Object} obj The object to be removed from the {@link BasicRenderer2D|objs} array
   */
  remove (obj) {
    this.objs.splice(this.objs.indexOf(obj), 1)
  }

  /**
   * Emptys the {@link BasicRenderer2D|objs} array
   */
  clear () {
    this.objs = []
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
  }

  /**
   * Returns a object from the {@link BasicRenderer2D|objs} array
   * @param {Object} obj The object to be gotten from the {@link BasicRenderer2D|objs} array
   * @returns {Object} A object from the {@link BasicRenderer|objs} array
   */
  get (obj) {
    return this.objs.indexOf(obj)
  }

  /**
   * Updates all the objects in {@link BasicRenderer2D|objs} array
   */
  update () {
    for (let i = 0; i < this.objs.length; i++) {
      if (this.objs[i].type === 'box' || this.objs[i].type === 'texturedbox') {
        this.objs[i].update()
      }
      if (this.objs[i].type == 'map') {
        for (let j = 0; j < this.objs[i].map.length; j++) {
          const char = this.objs[i].map[j]
          for (let k = 0; k < Object.keys(char.props).length; k++) {
            if (typeof char.props[Object.keys(char.props)[k]] === 'function') {
              if (char.props[Object.keys(char.props)[k]].name == 'collision') {
                char.props[Object.keys(char.props)[k]](char, this.objs[i].map)
              } else {
                const v = char.props[Object.keys(char.props)[k]](char)
              }
            }
          }
        }
      }
    }
  }

  /**
   * Creates a linear gradient from the given array of colors
   * @param {array} colors The array of colors
   * @param {Vec2} point1 The x1 and y1 coordinates
   * @param {Vec2} point2 The x2 and y2 coordinates
   * @returns {CanvasRenderingContext2D.LinearGradient} The gradient
   */
  createGradient (colors, point1 = new Vec2(0, 0), point2 = new Vec2(1, 1)) {
    const gradient = this.ctx.createLinearGradient(
      point1.x,
      point1.y,
      point2.x,
      point2.y
    )
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i]
      gradient.addColorStop(i / colors.length, color)
    }
    return gradient
  }

  /**
   * Creates a RGBA color from the given parameters
   * @param {number} r The red component of the RGBA color value
   * @param {number} g The green component of the RGBA color value
   * @param {number} b The blue component of the RGBA color value
   * @param {number} a The alpha component of the RGBA color value
   * @returns {string} The string representation of the RGBA color value
   */
  createRGBAColor (r, g, b, a = 1) {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
  }

  /**
   * Converts a hex color value to a RGBA color value
   * @param {string} hex The Hex string to convert to a RGBA color
   * @returns {string} The string representation of the color
   */
  convertHexToRGBA (hex) {
    let c
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('')
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]]
      }
      c = '0x' + c.join('')
      return (
        'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
      )
    }
  }

  /**
   * Sets the size of the {@link BasicRenderer2D|canvasWidth} and {@link BasicRenderer2D|canvasHeight} values to the specified parameters
   * @param {number} width The size of the {@link BasicRenderer2D|canvasWidth} to be resized to
   * @param {number} height The size of the {@link BasicRenderer2D|canvasHeight} to be resized to
   */
  setSize (width, height) {
    this.canvasWidth = this.domElement.width = width
    this.canvasHeight = this.domElement.height = height
  }

  /**
   * Sets the background color of the {@link BasicRenderer2D|domElement}
   * @param {RGBA|HEX|HSL|HSV|CMYK} color The color which the {@link BasicRenderer2D|domElement} will be applied to
   */
  setColor (color) {
    this.domElement.style.backgroundColor = color
  }

  /**
   * Sets the alpha color of the {@link BasicRenderer2D|domElement}
   * @param {number} alpha A alpha value between 0 and 1
   */
  setAlpha (alpha) {
    this.domElement.style.opacity = alpha
  }
}

export { BasicRenderer2D }
