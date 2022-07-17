
Draggable.create(".icon", {
  bounds:"svg"
  
  }
);



//------------------------------- Zoom -------------------------------------

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
});

//------------------------- Rotate---------------------------------------------

let moveDown = document.addEventListener('keydown', (event) =>{
    
    switch (event.key) {
        case 'ArrowUp': gsap.to("#Layer_1", {rotation: 360, duration: 1, transformOrigin:"center center"}); break;
        case 'ArrowDown':  gsap.to("#Layer_1", {rotation: 180,  duration: 1, transformOrigin:"center center"}); break;
        case 'ArrowLeft': gsap.to("#Layer_1", {rotation: 270, duration: 1, transformOrigin:"center center"}); break;
        case 'ArrowRight': 
            gsap.to("#Layer_1", {rotation: 90, duration: 1, transformOrigin:"center center"});
        ; break;
    }
});
