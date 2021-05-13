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
function createCircle() { }

export { createNode, createRect }