import { dot, polyline } from './svg.js'

var p1 = new polyline()
window.onload = () => {
}

var ls = []
$('.canvas').mousedown(function (e) {
    p1.append_point(new dot('point', [e.pageX, e.pageY]))
    console.log(p1)
})
