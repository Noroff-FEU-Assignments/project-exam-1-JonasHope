    /* Variables */

const post = document.querySelector(".specific_post")
const loader = document.querySelector(".loading_icon")

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
            `<div class="blog_content content_width font_2">
                <h1 class="font_2">${blogData.title.rendered}</h1>
                <hr>
                <img src="${blogData._embedded['wp:featuredmedia']['0'].source_url}" class="ft_img" alt="${blogData.title.rendered}"></img>
                <div class="blog_main_content" alt="${blogData.title.rendered}">${blogData.content.rendered}</div>
            </div>`

    loader.classList.add("remove")

    document.title +=   
            `Blog post - ${blogData.title.rendered}`
};

