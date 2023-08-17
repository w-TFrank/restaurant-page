export default function contactPage() {
    const content = document.querySelector("#content");
    const contact = document.createElement("div");
    contact.id = "contact";
    
    const address = document.createElement("p");
    address.innerHTML = "<b>Address</b> <br><br> Franklin's Franks <br> 123 Hotdog Way <br> Hotdog, CA 90210";
    content.appendChild(contact);

    const email = document.createElement("p");
    email.innerHTML = "<b>Email</b> <br><br> franklinsfranks@email.com";

    const phone = document.createElement("p");
    phone.innerHTML = "<b>Phone Number</b> <br><br> 123-456-7890"


    contact.append(address, email, phone);
}