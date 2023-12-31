import "./style.css";
import Logo from "./frank.png";
import menuPage from "./menu.js";
import homePage from "./home.js";
import contactPage from "./contact";


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

function addEventListeners(home, menu, contact) {
    home.addEventListener("click", handler);
    menu.addEventListener("click", handler);
    contact.addEventListener("click", handler);

    //loads screen to the homepage
    homePage();
    let selection = "home";

    /* 
     * handles how the buttons work. makes sure the same content isn't loaded more
     * than once.
     */
    function handler() {
        if (this.textContent === "Home" && selection !== "home") {
            if (selection === "menu") {
                const menuContent = document.getElementById("menu");
                menuContent.remove();
            } else if (selection === "contact") {
                const contactContent = document.getElementById("contact");
                contactContent.remove();
            }
            homePage();
            selection = "home";
        } else if (this.textContent === "Menu" && selection !== "menu") {
            if (selection === "home") {
                const homeContent = document.getElementById("home-blurb");
                homeContent.remove();
            } else if (selection === "contact") {
                const contactContent = document.getElementById("contact");
                contactContent.remove();
            }
            menuPage();
            selection = "menu";
        } else if (this.textContent === "Contact us" && selection !== "contact") {
            if (selection === "home") {
                const homeContent = document.getElementById("home-blurb");
                homeContent.remove();
            } else if (selection === "menu") {
                const menuContent = document.getElementById("menu");
                menuContent.remove();
            }
            contactPage();
            selection = "contact";
        }
    }
}
header();
