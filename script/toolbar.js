var toolBarButtonList = document.querySelectorAll('.button-list div')
var toolValue = 0

toolBarButtonList.forEach(function (element) {
    element.addEventListener('click', () => {
        if (!element.classList.contains('selected')) {
            document.querySelector('.button-list .selected').classList.remove('selected')
            element.classList.add('selected')
            toolValue = +element.id
        }
    })
})