const mainUrl = "https://rd-products.site/wp-json/wp/v2/posts?_embed";
const allBlogs = document.querySelector(".blog_posts");
const viewMore = document.querySelector("#more");
const fix = document.querySelector(".view_more");
const loader = document.querySelector(".loading_icon");
const overskrift = document.querySelector(".head_01");

/*---- API Fetch all blog posts ----*/

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

/*---- add h1 above blog posts ----*/

overskrift.innerHTML = `<div class="blogs_header">
                            <h1>All my blog posts</h1>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <hr>
                        </div>`;

/*---- display first 10 blogposts ----*/

function createHTML(blogPosts){
    blogPosts.forEach(function(blogData){
        allBlogs.innerHTML +=

            `<a href="post.html?id=${blogData.id}" class="card">
                <div class="card_img" 
                    style="background-image: url('${blogData._embedded['wp:featuredmedia']['0'].source_url}')" alt="${blogData.title.rendered}">
                </div>
                <div class="card_text">
                    <h2>${blogData.title.rendered}</h2>
                    <div>${blogData.excerpt.rendered}</div>
                    <hr>
                    <p id="date-fix-${blogData.id}" class="date">${blogData.date}</p>
                </div>
            </a>`;

/*---- fix date on blog posts ----*/

        let dateUpdate = `${blogData.date}`;
        let result = dateUpdate.substring(0, 10);
        document.getElementById(`date-fix-${blogData.id}`).innerHTML = 'post date:' + ' ' + result;

        loader.classList.add("remove");
    })
};

/*---- View more button ----*/

viewMore.onclick = function() {
    const updatedUrl = mainUrl + `&per_page=20`;
    allBlogs.innerHTML = "";
    getData(updatedUrl);
    fix.classList.add("remove");
}