/*------ Header -------*/

const header = document.querySelector(`header`);

header.innerHTML = 
    `<div class="header_container">
        <div class="logo_container">
            <a href="index.html">
                <h2>Hopes Journey</h2>
            </a>
            <h3> / ${document.title}<h3>
        </div>
        <div class="hamburger_container">
            <a href="javascript:void(0);" onclick="hamburgerMenu()">
                <i class="material-icons hamburger">&#xe5d2;</i>
            </a>
        </div>
        <div class="nav_container">
            <nav class="hide_nav">
                <ul>
                    <li><a href="index.html" class="nav_link">Home</a></li>
                    <li><a href="blogs.html" class="nav_link">Blogs</a></li>
                    <li><a href="about.html" class="nav_link">About</a></li>
                    <li><a href="contact.html" class="nav_link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>`;


/*----hamburger menu ----*/

function hamburgerMenu() {
    const nav = document.querySelector("nav");
	
	if (nav.classList.contains("hide_nav")) {
	  nav.classList.remove("hide_nav")
	} else {
	  nav.classList.add("hide_nav")
	}
  };


/*---- practising createElement ----*/
    
  /*---- Footer ----*/

const test = document.createElement("footer")
const p = document.createElement(`p`);

test.appendChild(p)
p.innerText = "© Copyright 2022 Jonas Hope";
document.body.appendChild(test);