
Draggable.create(".icon", {
  bounds:"svg"
  
  }
);

function myfun() {
    gsap.to(".icon", {rotation: 90, duration: 1, transformOrigin:"center center"});
}

document.getElementById("boton").onclick = function(){
    myfun();
}

function myfun2() {
    gsap.to(".icon", {rotation: 180,  duration: 1, transformOrigin:"center center"});
}

document.getElementById("boton2").onclick = function(){
    myfun2();
}

function myfun3() {
    gsap.to(".icon", {rotation: 270, duration: 1, transformOrigin:"center center"});
}

document.getElementById("boton3").onclick = function(){
    myfun3();
}

function myfun4() {
    gsap.to(".icon", {rotation: 360, duration: 1, transformOrigin:"center center"});
}

document.getElementById("boton4").onclick = function(){
    myfun4();
}
