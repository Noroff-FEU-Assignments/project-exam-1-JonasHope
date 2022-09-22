const url = "https://rd-products.site/wp-json/wp/v2/pages/100?_embed";
const aboutContainer = document.querySelector(".about_container");
const loader = document.querySelector(".loading_icon")


    /* API Fetch About page */

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


function createHTML(data){
        aboutContainer.innerHTML +=
                            `<div class="about_content content_width">
                                <div class="about_text">
                                    <h1 class="">${data.title.rendered}</h1>
                                    <p>${data.content.rendered}<p>
                                </div>
                                <div class="about_img_container">
                                    <div class="about_img" style="background-image: 
                                        url('${data._embedded['wp:featuredmedia']['0'].source_url}')" alt="${data.title.rendered}">
                                    </div>
                                </div>
                            </div>`
                            
        loader.classList.add("remove")
    }