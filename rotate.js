let moveDown = document.addEventListener('keydown', (event) =>{
    
    switch (event.key) {
        case 'ArrowUp': gsap.to("#Layer_1", {rotation: 360, duration: 1, transformOrigin:"center center"}); break;
        case 'ArrowDown':  gsap.to("#Layer_1", {rotation: 180,  duration: 1, transformOrigin:"center center"}); break;
        case 'ArrowLeft': gsap.to("#Layer_1", {rotation: 270, duration: 1, transformOrigin:"center center"}); break;
        case 'ArrowRight': 
            gsap.to("#Layer_1", {rotation: 90, duration: 1, transformOrigin:"center center"});
        ; break;
    }
})