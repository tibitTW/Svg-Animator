var id = 0
class dot {
    constructor(type, position) {
        this.type = type
        this.position = position
        this.id = id
        $('.canvas').append('<div id="point-' + this.id + '"></div>')
        this.draw()
        id += 1
    }

    draw() {
        $('#point-' + this.id).css('position', 'absolute')
            .css('width', 4)
            .css('height', '4px')
            .css('border', '1px black solid')
            .css('left', this.position[0] - 2 + 'px')
            .css('top', this.position[1] - 2 + 'px')
    }
}

dot_list = []
$('.canvas').mousedown(function (e) {
    dot_list.push(new dot('point', [e.pageX, e.pageY]))

});