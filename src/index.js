import "./style.css";
import Logo from "./frank.png";
import menuPage from "./menu.js";
import homePage from "./home.js";


/* makes the header */
function header() {
    const content = document.querySelector("#content");
    const restaurantName = document.createElement("h1");
    const blurb = document.createElement("h4");
    const header = document.createElement("div");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");
    const buttons = document.createElement("div");
    const logo = new Image();
    logo.src = Logo;

    restaurantName.textContent = "Franklin's Franks";
    blurb.textContent = "Best dogs this side of the Mississippi!";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact us"

    header.className = "header";
    restaurantName.className = "name";
    logo.className = "logo";
    blurb.className = "blurb";
    buttons.className = "buttons";

    content.appendChild(header);
    restaurantName.appendChild(logo);
    header.append(restaurantName, blurb, buttons);
    buttons.append(home, menu, contact);

    addEventListeners(home, menu, contact);
}

/*
    figure out how to make these work
*/
function addEventListeners(home, menu, contact) {
    home.addEventListener("click", handler);
    menu.addEventListener("click", handler);

    function handler() {
        if (this.textContent === "Home") {

        } else if (this.textContent === "Menu") {

        }
    }
}
header();
homePage();
