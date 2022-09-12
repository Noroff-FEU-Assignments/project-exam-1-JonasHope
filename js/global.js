    /* Header */

const header = document.querySelector(`header`)

header.innerHTML = 
       `
       <div class="hopes_journey">
       <a href="index.html" class="logo_header">
            <h2 class="font_1 tcolor_2">Hopes Journey</h2>
        </a>
        </div>
        <div class="navigation font_2">
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="posts.html">Blogs</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contanct.html">Contact</a></li>
                </ul>
            </nav>
        </div>
        `

    /* Footer */

/*const footer = document.createElement(`footer`)
const footerElement = document.createElement(`p`);
const footerContent = document.createTextNode(`© Copyright 2022 Jonas Hope All Rights Reserved`);
footer.appendChild(footerElement)
footerElement.appendChild(footerContent);
const footerMain = document.querySelector(`footer`);
document.body.insertBefore(footer, footerMain);
*/

const test = document.createElement("footer")
const p = document.createElement(`p`);

/* p.setAttribute(`href`, "index.html"); */

test.appendChild(p)
p.innerText = "© Copyright 2022 Jonas Hope All Rights Reserved";
document.body.appendChild(test);