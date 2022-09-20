    /* Variables */

const post = document.querySelector(".specific_post")
const loader = document.querySelector(".loading_icon")
const modalDiv = document.querySelector(".modal")
const modalFt = document.querySelector(".modal_ft")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://rd-products.site/wp-json/wp/v2/posts/" + id + "?_embed"

    /* API Fetch specific blog posts */

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

getData();

function createHTML(blogData){
    post.innerHTML =
        `<div class="blog_content content_width font_02">
            <h1 class="font_2">${blogData.title.rendered}</h1>
            <hr>
            <p class="date">${blogData.date}</p>
            <img src="${blogData._embedded['wp:featuredmedia']['0'].source_url}" class="ft_img" alt="${blogData.title.rendered}"></img>
            <div class="blog_main_content" alt="${blogData.title.rendered}">${blogData.content.rendered}</div>
        </div>`

    modalDiv.innerHTML = 
        `<div class="modal-content modal_width"
            alt="${blogData.title.rendered}">
            ${blogData.content.rendered}
        </div>`

    modalFt.innerHTML = 
        `<div class="modal-content modal_width">
            <img src="${blogData._embedded['wp:featuredmedia']['0'].source_url}" class="ft_img alt="${blogData.title.rendered}"></img>
        </div>`

    document.title +=   
        `Blog post - ${blogData.title.rendered}`

    loader.classList.add("remove")

/*-------------- Modal 1 --------------*/

    const modal = document.getElementById("modal_container");
    const image = document.getElementsByClassName("blog_main_content")[0].querySelector("img");
    
    modal.style.display = "none"

    image.onclick = function() {
        modal.style.display = "block";  
    }

/*-------------- Modal 2 --------------*/

    const modalFeat = document.getElementById("modal-ft_container");
    const imageFeat = document.getElementsByClassName("blog_content")[0].querySelector("img");

    modalFeat.style.display = "none"

    imageFeat.onclick = function() {
    modalFeat.style.display = "block";  

        window.addEventListener("click", function(event) {
            if (event.target == modalFeat || event.target == modal) {
                modalFeat.style.display = "none";
                modal.style.display = "none";
            }
        })
    }
};