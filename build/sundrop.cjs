"use strict";

const canvas = document.createElement( "canvas" );
const ctx = canvas.getContext( "2d" );
const _canvasWidth = canvas.width = window.innerWidth;
const _canvasHeight = canvas.height = window.innerHeight;

function setCanvasColor( color ) {

  canvas.style.backgroundColor = color;

}

function setCanvasAlpha( alpha ) {

  canvas.style.opacity = alpha;

}

document.body.appendChild( canvas );

class Vec2 {

  constructor( x, y ) {

    this.pos = {
      x: x,
      y: y
    }

    return this.pos
  }

}

class Polygon {

  constructor( points = [] ) {

    this.props = {
      visible: true
    };

    this.polygon = points;
    this.tags = {};

    this.class = 'polygon'

    this.points.forEach( ( point ) => {
        
      point.push( new Vec2( point[0], point[1] ) )

      point.splice(0, 2)

    })

  }

}

class Line {

  constructor( startX, startY, endX, endY ) {

    this.startPoint = new Vec2( startX, startY )
    this.endPoint = new Vec2( endX, endY )

    this.props = {
      visible: true
    }

    this.tags = {

    }

    this.type = "line"
  }

}

class Box {

  constructor( x, y, width, height ) {

    super ( [] )
        
    this.pos = {
      x: x,
      y: y
    }
    this.width = width
    this.height = height

    this.props = {

      visible: true

    }

    this.tags = {

    }

    this.type = 'box'
    this.class = 'polygon'

    this.polygon = this.createPolygon( )
  }

  createPolygon() {

    let points = []

    points.push({
      x: this.pos.x - ( this.width / 2 ),
      y: this.pos.y - ( this.height / 2 )
    })

    points.push({
      x: this.pos.x + ( this.width / 2 ),
      y: this.pos.y - ( this.height / 2 )
    })

    points.push({
      x: this.pos.x + ( this.width / 2),
      y: this.pos.y + ( this.height / 2)
    })

    points.push({
      x: this.pos.x - ( this.width / 2 ),
      y: this.pos.y + ( this.height / 2 )
    })

    return points
  }

  update() {

    this.polygon = this.createPolygon()

  }

}

class Circle {

  constructor( x, y, radius ) {

    this.pos = {
      x: x,
      y: y
    }

    this.radius = radius
    this.type = 'circle'

  }

}

class Texture {

  constructor( url ) {

    this.loaded = false
    this.image = new Image()
    this.image.src = url

    this.image.onload = () => {

      this.loaded = true

    }

  }

}

  /*class TexturedBox extends Box {

    constructor( x, y, width, height, url ){

      super( x, y, width, height ) 

      this.texture = new Texture( url )

      this.class = null
      this.type = 'texturedBox'

    }

  }*/

class Renderer {

  constructor() {
      
    this.objs = []

  }
    
  renderer() {
      
    ctx.clearRect( 0, 0, _canvasWidth, _canvasHeight )

    for ( let i = 0; i < this.objs.length; i++ ) {

      this.objs[i].props.color != undefined
      ? ctx.fillStyle = this.objs[i].props.color
      : ctx.fillStyle = 'black'

      if ( this.objs[i].class === 'polygon' ) {

        if ( this.objs[i].props.visible ) {
          ctx.beginPath()
          ctx.moveTo( this.objs[i].polygon[0].x, this.objs[i].polygon[0].y )
          for ( let j = 1; j < this.objs[i].polygon.length; j++ ) {

            ctx.lineTo( this.objs[i].polygon[j].x, this.objs[i].polygon[j].y )

          }
          ctx.lineTo( this.objs[i].polygon[0].x, this.objs[i].polygon[0].y )
          ctx.closePath()

          if ( this.objs[i].props.drawStyle === 'fill' ) {

            ctx.fill()

          }
          else if ( this.objs[i].props.drawStyle === 'stroke' ) {

            this.objs[i].props.stroke.color!= undefined
            ? ctx.strokeStyle = this.objs[i].props.stroke.color
            : ctx.strokeStyle = 'black'

            this.objs[i].props.stroke.width!= undefined
            ? ctx.lineWidth = this.objs[i].props.stroke.width
            : ctx.lineWidth = 1

            ctx.stroke()

          }

        }

      }
      

    }

  } 
  add( obj ) {

    this.objs.push( obj ) 

  }
  remove( obj ) {

    this.objs.splice( this.objs.indexOf( obj ), 1 )

  }
  clear() {

    this.objs = []

  }
  get( obj ) {

    return this.objs.indexOf( obj )

  }

}

exports.canvas = canvas;
exports.ctx = ctx;
exports.setCanvasColor = setCanvasColor
exports.setCanvasAlphs = setCanvasAlpha
exports.Vec2 = Vec2
exports.Polygon = Polygon
exports.Line = Line
exports.Box = Box
exports.Circle = Circle
exports.Texture = Texture
exports.Renderer = Renderer