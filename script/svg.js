var dot_id = 0
export class dot {
    constructor(type, position) {
        this.type = type
        this.x = position[0]
        this.y = position[1]
        this.id = dot_id
        dot_id += 1
        $('.canvas').append('<rect id="point-' + this.id + '"></rect>')
        this.draw()
    }

    draw() {
        $('#point-' + this.id)
            .attr('width', '4px')
            .attr('height', '4px')
            .attr('fill', '#000')
            .attr('stroke', '#000')
            .attr('stroke-width', '1')
            .attr('x', this.x - 2)
            .attr('y', this.y - 2)
    }
}

var polyline_id = 0
export class polyline {
    constructor() {
        this.point_list = []
        this.id = polyline_id
        polyline_id += 1
    }
    append_point(point) {
        this.point_list.push(point)
    }
}
