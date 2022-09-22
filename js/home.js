const sliderHeader = document.querySelector(".slider_header");
const url = "https://rd-products.site/wp-json/wp/v2/posts?per_page=100&_embed";
const slider = document.querySelector(".slider");

const loader = document.querySelector(".loading_icon");

const ftUrl = "https://rd-products.site/wp-json/wp/v2/pages/103?_embed";
const ftImg = document.querySelector("#featured-img");

const myBlog = document.querySelector(".my_blog");
const sectionUrl = "https://rd-products.site/wp-json/wp/v2/pages/116?_embed";
const sectionContent = document.querySelector(".section_content");



    /* API Fetch Slider */

async function getData(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();

        const response2 = await fetch(ftUrl);
        const returned = await response2.json();

        const response3 = await fetch(sectionUrl);
        const getSection = await response3.json();

        createHTML(getResults, returned, getSection);
    }
    
    catch(error){
        console.log(error, "An error occurred while fetching API");
    }
};

getData()


function createHTML(homeSlider, ftImage, sectionCont){
    ftImg.innerHTML +=
        `<div class="layer">
            <div class="home_ft content_width">
                <img src="${ftImage._embedded['wp:featuredmedia']['0'].source_url}" class="home_img" alt="featured image ${ftImage.title.rendered}"></img>
                <div class="home_ft_text">
                   <h1>${ftImage.title.rendered}</h1>
                   <p>${ftImage.content.rendered}</p>
                   <a href="blogs.html" class="button_01">Blog posts</a>
                </div>
            </div>
        </div>`
    
    
    myBlog.innerHTML +=
        `<div class="my_blog_container">
            <div class="section_part01">
                <h3>My blog</h3>
               <h2>The first journey</h2>
               <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
            <div class="section_part02">
                <img src="${sectionCont._embedded['wp:featuredmedia']['0'].source_url}" class="section_img" alt="section image ${sectionCont.title.rendered}"></img>
                <div class="section_text">
                    <h3>New York</h3>
                    <h2>${sectionCont.title.rendered}</h2>
                    <p>${sectionCont.content.rendered}</p>
                </div>
            </div>
        </div>`

    sliderHeader.innerHTML =
        `<h2 class="content_width">Latest posts</h2>`

    const total = homeSlider.length;
    const slides = document.getElementById("slides");
    for (let count = 0; count < total; count+=3) {
        const slide = homeSlider.slice(count,count+3);
        console.log({slide})
        const div = document.createElement("div");
        div.id = `slide${(count+3)/3}`
        slide.forEach(function(sliderData){
            div.innerHTML +=
                `<a href="post.html?id=${sliderData.id}" class="slider_card">
                    <p class="slider_img" style="background-image: url('${sliderData._embedded['wp:featuredmedia']['0'].source_url}')" alt="${sliderData.title.rendered}"></p>
                    <div class="slider_text">
                        <h3>${sliderData.title.rendered}</h3>
                        <p class="slider_ex">${sliderData.excerpt.rendered}</p>
                        <hr>
                        <p class="slider_date">Post date: ${sliderData.date}</p>
                    </div>
                </a>`
        });
        slides.appendChild(div)
    }
    loader.classList.add("remove");
};