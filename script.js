canvas = document.getElementsByClassName('canvas')[0]
canvas.addEventListener('click', function (event) {
    console.log(this.offsetLeft)
})