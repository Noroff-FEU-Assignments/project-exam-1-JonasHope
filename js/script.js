const url = "https://rd-products.site/wp-json/wp/v2/posts?per_page=100&_embed";
const container = document.querySelector(".test");
const slider = document.querySelector(".slider");

async function getData(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }
    
    catch(error){
        console.log(error, "yeah, that didnt work");
    }
};

getData()

function createHTML(data){
    data.forEach(function(blogData){
        container.innerHTML +=
        
        `<div class="blog_content font_2">
            <h1 class="font_2">${blogData.title.rendered}</h1>
            <img src="${blogData._embedded['wp:featuredmedia']['0'].source_url}" class="ft_img"></img>
            <div class="blog_main_content">${blogData.content.rendered}</div>
        </div>`
    })
};


function createHTML(homeSlider){
    homeSlider.forEach(function(sliderData){
        slider.innerHTML +=
        
        `<div class="slider_card">
            <img class="slider_img" src="${sliderData._embedded['wp:featuredmedia']['0'].source_url}" class="ft_img"></img>
            <h3 class="font_2">${sliderData.title.rendered}</h3>
        </div>`
    })
};