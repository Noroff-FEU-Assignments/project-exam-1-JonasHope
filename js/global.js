/*------ Header -------*/

const header = document.querySelector(`header`)

header.innerHTML = 
    `<div class="header_container">
        <div class="logo_container">
            <a href="index.html">
                <h2">Hopes Journey</h2>
            </a>
        </div>
        <div class="hamburger_container">
            <a href="javascript:void(0);" onclick="hamburgerMenu()">
                <i class="material-icons hamburger">&#xe5d2;</i>
            </a>
        </div>
        <div class="nav_container">
            <nav>
                <ul>
                    <li><a href="index.html" class="nav_link">Home</a></li>
                    <li><a href="blogs.html" class="nav_link">Blogs</a></li>
                    <li><a href="about.html" class="nav_link">About</a></li>
                    <li><a href="contact.html" class="nav_link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>`

function hamburgerMenu() {
	const menu = document.querySelector(".navigation");
	
	if (menu.style.display === "block") {
	  menu.style.display = "none";
	} else {
	  menu.style.display = "block";
	}
  }

/*---- practising createElement ----*/
    
  /*---- Footer ----*/

const test = document.createElement("footer")
const p = document.createElement(`p`);

test.appendChild(p)
p.innerText = "© Copyright 2022 Jonas Hope All Rights Reserved";
document.body.appendChild(test);