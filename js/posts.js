    /* Variables */

const mainUrl = "https://rd-products.site/wp-json/wp/v2/posts?_embed";
const allBlogs = document.querySelector(".blog_posts");
const viewMore = document.querySelector("#more")
const fix = document.querySelector(".view_more")
const loader = document.querySelector(".loading_icon")
const overskrift = document.querySelector(".head_01")

    /* API Fetch all blog posts */

async function getData(url){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }
    
    catch(error){
        console.log(error, "An error occurred!");
    }
};

getData(mainUrl)

overskrift.innerHTML = `<div>
                            <h1>All my blogs</h1>
                            <hr>
                        </div>`

function createHTML(blogPosts){
    blogPosts.forEach(function(blogData){
        allBlogs.innerHTML +=

            `<a href="post-specific.html?id=${blogData.id}" class="card">
                <div class="card_img" 
                    style="background-image: url('${blogData._embedded['wp:featuredmedia']['0'].source_url}')" alt="${blogData.title.rendered}">
                </div>
                <h3 class="font_2">${blogData.title.rendered}</h3>
                <hr>
                <p>${blogData.date}</p>
            </a>`;

        loader.classList.add("remove")
    })
};

viewMore.onclick = function() {
    const updatedUrl = mainUrl + `&per_page=20`;
    allBlogs.innerHTML = "";
    getData(updatedUrl);
    fix.classList.add("remove")
}