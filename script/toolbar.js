var toolBarButtonList = document.querySelectorAll('.button-list > div')
var toolValue = 0

// set default selected tool (select tool)
document.addEventListener('DOMContentLoaded', (event) => {
    toolBarButtonList[0].classList.add('selected')
})

toolBarButtonList.forEach(function (element) {
    element.addEventListener('click', () => {
        if (element === document.querySelector('.erease')) {
            document.querySelector('#main-canvas').innerHTML = ''
        }
        else if (!element.classList.contains('selected')) {
            document.querySelector('.button-list .selected').classList.remove('selected')
            element.classList.add('selected')
            toolValue = +element.id
        }
    })
})