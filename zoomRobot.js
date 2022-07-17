const container = document.querySelector('.container')
const img = document.querySelector(".zoom")

let zoom = 1
container.addEventListener('wheel', e => {
    img.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`

    zoom += e.deltaY * -0.01
    zoom = Math.min(Math.max(1, zoom), 3)

    if (zoom == 1) {
        img.style.left = '0px'
        img.style.top = '0px'
    }

    img.style.transform = `scale(${zoom})`
})

