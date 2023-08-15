import "./style.css";
import Logo from "./frank.png";

const content = document.querySelector("#content");
const restaurantName = document.createElement("h1");
const blurb = document.createElement("h4");
restaurantName.textContent = "Franklin's Franks";
blurb.textContent = "Best dogs this side of the Mississippi!";
const logo = new Image();
logo.src = Logo;
logo.id = "logo";
content.appendChild(restaurantName);
content.appendChild(logo);
content.appendChild(blurb);

/**
 * put this code ^ 
 * in its own file and class then import it here.
 * initialize w/ this code.
 * then make 3 more files for home, menu, & contact us
 */
