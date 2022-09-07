let slideLeft = document.querySelector(".arrow_left");
let slideRight = document.querySelector(".arrow_right");
let sliderContainer = document.querySelector(".slider");
const sliderHeader = document.querySelector(".slider_header");

/* Arrow functions for slider */

slideLeft.onclick = function(){
    sliderContainer.scrollLeft -= 999;
}

slideRight.onclick = function(){
    sliderContainer.scrollLeft += 999;
}

/* Slider Header */

sliderHeader.innerHTML += 
`<h3> Latest posts </h3>`

