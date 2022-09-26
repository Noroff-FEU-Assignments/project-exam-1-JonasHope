/*---- scroll top button ----*/

let scroll = document.getElementById("scroll_btn")

window.onscroll = function() {scrollUp()};

function scrollUp() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scroll.style.display = "block";
    } 
    else {
        scroll.style.display  = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};