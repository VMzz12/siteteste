let button = document.getElementById('no')
let height = window.innerHeight = 500
let width = window.innerWidth = 500

button.addEventListener('mouseover', function () {
    button.style.position = "relative"
    button.style.top = Math.random() * height + "px"
    button.style.left = Math.random() * width + "px"
})