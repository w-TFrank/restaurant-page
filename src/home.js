export default function homePage() {
    const content = document.querySelector("#content");
    const homeBlurb = document.createElement("h4");
    homeBlurb.textContent = "Home of the best Franks in the world!";
    homeBlurb.id = "home-blurb";
    content.appendChild(homeBlurb);
}