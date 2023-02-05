import { gravity } from "../utilities/physics.js";

// Box class
export class Box {
    constructor(x, y, width, height) {
        // Box position
        this.pos = {
            x: x,
            y: y
        }

        // Box width and height
        this.width = width;
        this.height = height;

        // Box shape
        this.polygon = this.generatePolygon()

        // Box properties
        this.props = {
            visible: true
        }

        // Custom properties
        this.tags = {

        } 

        // Object type
        this.type = "box"
    }

    generatePolygon() {
        // Points holds the postion of the vertices of the polygon.
        let points = [];

        // Bottom right vertex
        points.push({
            x: this.pos.x + (this.width / 2),
            y: this.pos.y + (this.height / 2)
        })

        // Top right vertex
        points.push({
            x: this.pos.x+ (this.width / 2),
            y: this.pos.y - (this.height / 2)
        })

        // Top left vertex
        points.push({
            x: this.pos.x - (this.width / 2),
            y: this.pos.y - (this.height / 2)
        })

        // Bottom left vertex
        points.push({
            x: this.pos.x - (this.width / 2),
            y: this.pos.y + (this.height / 2)
        })

        return points
    }
    
    update() {

        this.polygon = this.generatePolygon()
    }
}

export class Circle {
    constructor(x, y, radius) {
        this.pos = {
            x: x,
            y: y
        }

        this.radius = radius
        this.type = "circle"

        this.props = {
            visible: true
        }

        this.tags = {
        
        }

        if (this.props.material != undefined) {
            if (this.props.material = "basic") {

            } else if (this.props.material = "bouncy") {
                
            }
        }
    }
}