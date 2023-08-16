import "./style.css";
import Logo from "./frank.png";

const content = document.querySelector("#content");
const restaurantName = document.createElement("h1");
const blurb = document.createElement("h4");
const header = document.createElement("div");
header.className = "header";
restaurantName.textContent = "Franklin's Franks";
restaurantName.className = "name";
blurb.textContent = "Best dogs this side of the Mississippi!";
const logo = new Image();
logo.src = Logo;
logo.className = "logo";
blurb.className = "blurb";
content.appendChild(header);
header.appendChild(restaurantName);
restaurantName.appendChild(logo);
header.appendChild(blurb);

/**
 * put this code ^ 
 * in its own file and class then import it here.
 * initialize w/ this code.
 * then make 3 more files for home, menu, & contact us
 */
