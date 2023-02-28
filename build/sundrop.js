(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory((global.SUN = {})));
})(this, function (exports) {
  "use strict";

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

        this.class = 'polygon'
        this.type = 'box'

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

      this.polygon = this.createPolygon( )

    }
  }

  class Circle {

    constructor( x, y, radius) {

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

      this.domElement = document.createElement( 'canvas' )
      this.ctx = this.domElement.getContext( '2d' )
      this._canvasWidth = this.domElement.width = window.innerWidth
      this._canvasHeight = this.domElement.height = window.innerHeight


    }
    
    renderer() {
      
      this.ctx.clearRect( 0, 0, this._canvasWidth, this._canvasHeight )

      for ( let i = 0; i < this.objs.length; i++ ) {

        this.objs[i].props.color != undefined
        ? this.ctx.fillStyle = this.objs[i].props.color
        : this.ctx.fillStyle = 'black'

        if ( this.objs[i].class === 'polygon' ) {
          
          if ( this.objs[i].props.visible ) {

            this.ctx.beginPath()
            this.ctx.moveTo( this.objs[i].polygon[0].x, this.objs[i].polygon[0].y )
            for ( let j = 1; j < this.objs[i].polygon.length; j++ ) {

              this.ctx.lineTo( this.objs[i].polygon[j].x, this.objs[i].polygon[j].y )

            }
            this.ctx.lineTo( this.objs[i].polygon[0].x, this.objs[i].polygon[0].y )
            this.ctx.closePath()

            if ( this.objs[i].props.drawStyle === 'fill' ) {

              this.ctx.fill()

            }
            else if ( this.objs[i].props.drawStyle === 'stroke' ) {

              this.objs[i].props.stroke.color = undefined
              ? this.ctx.strokeStyle = this.objs[i].props.stroke.color
              : this.ctx.strokeStyle = 'black'

              this.objs[i].props.stroke.width!= undefined
              ? this.ctx.lineWidth = this.objs[i].props.stroke.width
              : this.ctx.lineWidth = 1

              this.ctx.stroke()

            }

          }

        }

        if ( this.objs[i].type === 'line' ) {

          if ( this.objs[i].props.visible ) {

            this.objs[i].props.stroke.color!= undefined
            ? this.ctx.strokeStyle = this.objs[i].props.stroke.color
            : this.ctx.strokeStyle = 'black'

            this.objs[i].props.stroke.width!= undefined
            ? this.ctx.lineWidth = this.objs[i].props.stroke.width 
            : this.ctx.lineWidth = 1

            this.ctx.beginPath()
            this.ctx.moveTo( this.objs[i].startPoint.x, this.objs[i].startPoint.y );
            this.ctx.lineTo( this.objs[i].endPoint.x, this.objs[i].endPoint.y );
            this.ctx.closePath()
            this.ctx.stroke()
          
          }

        }

        if ( this.objs[i].type === 'circle' ) {

          if ( this.objs[i].props.visible ) {
            this.ctx.beginPath()
            this.ctx.arc( 
              this.objs[i].pos.x, 
              this.objs[i].y, 
              this.objs[i].radius, 
              0, 
              Math.PI * 2
            )
            this.ctx.closePath()
            if ( this.objs[i].props.drawStyle === 'fill' ) {

              this.ctx.fill()
            
            }
            if ( this.objs[i].props.drawStyle === 'stroke' ) {

              this.objs[i].props.stroke.color = undefined
              ? this.ctx.strokeStyle = this.objs[i].props.stroke.color
              : this.ctx.strokeStyle = 'black'

              this.objs[i].props.stroke.width!= undefined
              ? this.ctx.lineWidth = this.objs[i].props.stroke.width
              : this.ctx.lineWidth = 1

              this.ctx.stroke()

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
    update() {

      for ( let i = 0; i < this.objs.length; i++ ) {

        if ( this.objs[i].type === 'box' ) {

          this.objs[i].update( )

        }

      }
      
    }
    setSize( width, height ) {

      this._canvasWidth = this.domElement.width = width
      this._canvasHeight = this.domElement.height = height

    }
    setColor( color ) {

      this.domElement.style.backgroundColor = color

    }
    setAlpha( alpha ) {

      this.domElement.style.opacity = alpha

    }

  }

  exports.Vec2 = Vec2
  exports.Polygon = Polygon
  exports.Line = Line
  exports.Box = Box
  exports.Circle = Circle
  exports.Texture = Texture
  exports.Renderer = Renderer

});
