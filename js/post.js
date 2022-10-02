const post = document.querySelector(".specific_post");
const loader = document.querySelector(".loading_icon");
const modalDiv = document.querySelector(".modal");
const modalFt = document.querySelector(".modal_ft");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://rd-products.site/wp-json/wp/v2/posts/" + id + "?_embed";

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

/*---- Blog post content ----*/

    post.innerHTML =
        `<div class="blog_header_content layer">
            <h1>${blogData.title.rendered}</h1>
            <div>${blogData.excerpt.rendered}</div>
            <hr>
            <p id="date-fix" class="date">${blogData.date}</p>
            <a href="blogs.html" class="button_01">Blog posts</a>
        </div>
        <div class="blog_content">
            <img src="${blogData._embedded['wp:featuredmedia']['0'].source_url}" class="ft_img" alt="${blogData.title.rendered}"></img>
            <div class="blog_main_content" alt="${blogData.title.rendered}">${blogData.content.rendered}</div>
        </div>`;

/*---- change blog date ----*/

        let dateUpdate = `${blogData.date}`;
        let result = dateUpdate.substring(0, 10);
        document.getElementById(`date-fix`).innerHTML = 'post date:' + ' ' + result;

/*---- change blog post title in header ----*/

    const pageTitle = document.querySelector(".blog-post_title");
    pageTitle.innerHTML = `/ ${blogData.title.rendered}`;

/*---- Modal content images ----*/

    modalDiv.innerHTML = 
        `<div class="modal-content modal_width"
            alt="${blogData.title.rendered}">
            ${blogData.content.rendered}
        </div>`;

/*---- Modal featured img ----*/

    modalFt.innerHTML = 
        `<div class="modal-content modal_width">
            <img src="${blogData._embedded['wp:featuredmedia']['0'].source_url}" class="ft_img alt="${blogData.title.rendered}"></img>
        </div>`;

/*---- Change title and meta ----*/

    document.title +=   
        ` ${blogData.title.rendered}`;

    const metaFix = document.getElementsByTagName('meta');
    metaFix.description.content = `${blogData.title.rendered}`;

/*-------------- Modal 1 --------------*/

    const modal = document.getElementById("modal_container");
    const image = document.getElementsByClassName("blog_main_content")[0].querySelector("img");
    image.alt = `${blogData.title.rendered}`

    image.onclick = function() {
        modal.style.display = "block";

            window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            };
        });
    };

/*-------------- Modal 2 --------------*/

    const modalFeat = document.getElementById("modal-ft_container");
    const imageFeat = document.getElementsByClassName("blog_content")[0].querySelector("img");

    imageFeat.onclick = function() {
    modalFeat.style.display = "block";  

        window.addEventListener("click", function(event) {
            if (event.target == modalFeat) {
                modalFeat.style.display = "none";
            };
        });
    };

/*---- loader ----*/

    loader.classList.add("remove");
};