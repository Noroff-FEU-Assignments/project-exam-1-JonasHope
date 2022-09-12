    /* Variables */

let slideLeft = document.querySelector(".arrow_left");
let slideRight = document.querySelector(".arrow_right");
let sliderContainer = document.querySelector(".slider");
const sliderHeader = document.querySelector(".slider_header");
const url = "https://rd-products.site/wp-json/wp/v2/posts?per_page=100&_embed";
const slider = document.querySelector(".slider");
const loader = document.querySelector(".loading_icon")


    /* API Fetch Slider */

async function getData(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }
    
    catch(error){
        console.log(error, "An error occurred!");
    }
};

getData()


function createHTML(homeSlider){
    homeSlider.forEach(function(sliderData){
        slider.innerHTML +=
                            `<a href="post-specific.html?id=${sliderData.id}" class="slider_card">
                                <div class="slider_img" style="background-image: url('${sliderData._embedded['wp:featuredmedia']['0'].source_url}')" alt="${sliderData.title.rendered}"></div>
                                <h3 class="font_2">${sliderData.title.rendered}</h3>
                            </a>`
                            
        loader.classList.add("remove")
    })
};


    /* Arrow functions for slider */

slideLeft.onclick = function(){
    sliderContainer.scrollLeft -= 999;
}

slideRight.onclick = function(){
    sliderContainer.scrollLeft += 999;
}


    /* Slider Header */

sliderHeader.innerHTML = 
`<h3> Latest posts </h3>`

