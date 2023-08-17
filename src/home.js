export default function homePage() {
    const content = document.querySelector("#content");
    const homeBlurb = document.createElement("p");
    homeBlurb.innerHTML = "<b>Home of the best Franks in the world</b> Come dine with us!";
    homeBlurb.id = "home-blurb";
    content.appendChild(homeBlurb);
}