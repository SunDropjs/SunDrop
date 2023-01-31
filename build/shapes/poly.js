class Box {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.polygon = this.generatePolygon()
        this.props = {
            visible: true
        }
        this.tags = {

        }
        this.type = "box"
    }
    generatePolygon() {
        let points = [];

        points.push({
            x: this.x + (this.width / 2),
            y: this.y + (this.height / 2)
        })
        points.push({
            x: this.x + (this.width / 2),
            y: this.y - (this.height / 2)
        })
        points.push({
            x: this.x - (this.width / 2),
            y: this.y - (this.height / 2)
        })
        points.push({
            x: this.x - (this.width / 2),
            y: this.y + (this.height / 2)
        })

        return points
    }
    update() {
        this.polygon = this.generatePolygon()

        if (this.props.gravity != undefined) {
            if (this.props.gravity === '2d' ) {
            }
        }
    }
}

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius

        this.type = "circle"
    }
}