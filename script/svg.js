function createNode(x, y, size = 6) {
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    rect.setAttribute('x', x - size / 2)
    rect.setAttribute('y', y - size / 2)
    rect.setAttribute('width', size)
    rect.setAttribute('height', size)
    rect.setAttribute('fill', 'none')
    rect.setAttribute('stroke', 'black')
    rect.setAttribute('stroke-width', 2)
    rect.addEventListener('click', function (e) {
        console.log(rect)
    })
    return rect
}

export { createNode }