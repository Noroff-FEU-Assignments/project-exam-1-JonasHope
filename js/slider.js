let slideLeft = document.querySelector(".arrow_left");
let slideRight = document.querySelector(".arrow_right");
let sliderContainer = document.querySelector(".slider");

slideRight.onclick = function(){
    sliderContainer.scrollRight +=100;
}