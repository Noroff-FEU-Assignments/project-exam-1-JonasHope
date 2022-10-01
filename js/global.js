/*----hamburger menu ----*/

function hamburgerMenu() {
    const nav = document.querySelector("nav");
	
	if (nav.classList.contains("hide_nav")) {
	  nav.classList.remove("hide_nav");
	} else {
	  nav.classList.add("hide_nav");
	}
  };


/*---- practising createElement ----*/
/*---- Footer ----*/

const addFooter = document.createElement("footer");
const p = document.createElement(`p`);

addFooter.appendChild(p)
p.innerText = "© Copyright 2022 Jonas Hope";
document.body.appendChild(addFooter);