// function createNode(x, y, size = 6) {
//     var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
//     rect.setAttribute('x', x - size / 2)
//     rect.setAttribute('y', y - size / 2)
//     rect.setAttribute('width', size)
//     rect.setAttribute('height', size)
//     rect.setAttribute('fill', 'none')
//     rect.setAttribute('stroke', 'black')
//     rect.setAttribute('stroke-width', 2)
//     rect.addEventListener('click', function (e) {
//         console.log(rect)
//     })
//     return rect
// }

function createNode(x, y, id, r = 2, fill = 'gray') {
    var node = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    node.setAttribute('cx', x)
    node.setAttribute('cy', y)
    node.setAttribute('r', r)
    node.setAttribute('fill', fill)
    node.setAttribute('id', id)
    return node
}
function createRect(x, y, w, h, id, fill = 'none', stroke = 'black') {
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    rect.setAttribute('x', x)
    rect.setAttribute('y', y)
    rect.setAttribute('id', id)
    rect.setAttribute('width', w)
    rect.setAttribute('height', h)
    rect.setAttribute('fill', fill)
    rect.setAttribute('stroke', stroke)

    return rect
}

export { createNode, createRect }