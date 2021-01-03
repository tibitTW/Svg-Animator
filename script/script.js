import { createNode } from './svg.js'

var canvas = document.getElementById('main-canvas')

canvas.addEventListener('click', function (e) {
    var canvasBoundingRect = canvas.getBoundingClientRect()
    var node = createNode(e.pageX - canvasBoundingRect.left, e.pageY - canvasBoundingRect.top)
    canvas.appendChild(node)
})
