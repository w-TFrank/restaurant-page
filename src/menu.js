import Logo from "./frank.png";

export default function menuPage() {
    const content = document.querySelector("#content");
    const classic = document.createElement("h4");
    const menu = document.createElement("div");
    const blurb = document.createElement("h6");
    const chiliDog = new Image();
    chiliDog.src = Logo;
    let menuItems = [];

    menu.id = "menu";
    chiliDog.className = "chili-dog";

    classic.textContent = "Chili Dog - $4.99";
    blurb.textContent = "The best chili dog you'll ever eat";

    for (let i = 0; i < 6; i++) {
        menuItems[i] = document.createElement("div");
        menuItems[i].className = "menu-items";
        menuItems[i].append(classic, chiliDog, blurb);
        menu.appendChild(menuItems[i].cloneNode(true));
    }
    
    content.appendChild(menu);
}