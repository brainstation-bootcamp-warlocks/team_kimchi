let contactContainer = document.getElementById("contact__container");

let form = document.createElement("form");
form.setAttribute("action", "");
form.setAttribute("method", "post");
form.classList.add("contact__form")
contactContainer.appendChild(form);

class Header {
    constructor(homeLink, aboutLink, contactLink, imageLink) {
        this.homeLink = homeLink;
        this.aboutLink = aboutLink;
        this.contactLink = contactLink;
        this.imageLink = imageLink;
    }

    render() {
        return `
        <div class="header-margin margin">
            <div class="header__logo-container">
            <img class="header__logo"src=${this.imageLink} />
            </div>
            <div class="header__title-container">
                <h1 class="header__title">BecomeBartender</h1>
            </div>
        <nav class="nav-bar"> 
            <ul class="nav-bar__list">
                <a href="${this.homeLink}">
                    <li>Home</li>
                </a>
                <a href="${this.aboutLink}">
                    <li>About</li>
                </a>
                <a href="${this.contactLink}">
                    <li>Contact Us</li>
                </a>
            </ul>
        </nav>
        </div>
        `;
    }
}
class RenderedHeader {
    constructor() {
        this.headerLinks = new Header("../index.html", "./about.html", "./contact-us.html", "../assets/logo.png");
    }

    render() {
        return `
        ${this.headerLinks.render()}
        `
    }
}


const header = document.getElementById("header");
let addHeader = new RenderedHeader();
header.innerHTML = addHeader.render();


class Footer {
    constructor() {
    }

    render() {
        return `
        <div class="footer-container">
        <div class="footer__icon-container">
            <a href="https://instagram.com">
                <img
                src="../assets/Icons/SVG/icon-instagram.svg"
                alt="instagram" class="footer__icon"
                />
            </a>
            <a href="https://facebook.com">
                <img
                src="../assets/Icons/SVG/icon-facebook.svg"
                alt="facebook" class="footer__icon"
                />
            </a>
            <a href="https://twitter.com">
                <img 
                src="../assets/Icons/SVG/icon-twitter.svg"
                alt="twitter" class="footer__icon"
                />
            </a>
        </div>
        <div class="footer__copyright-container">
        <p class="footer__copyright">Copyright BecomeBartender &amp;copy 2022 All Rights Reserved</p>
        </div>

        <div class="footer__name-container">
        <h3 class="footer__name">BecomeBartender</h3>
        </div>

        </div>
        `;
    }
}

const footer = document.getElementById("footer");
const addFooter = new Footer();
footer.innerHTML = addFooter.render();

let heading = document.createElement('h2')
heading.innerHTML = "CONTACT US"
heading.classList.add("contact__heading")
contactContainer.appendChild(heading);

let nameLabel = document.createElement('label');
nameLabel.innerHTML = "Name";
nameLabel.classList.add("contact__name")
contactContainer.appendChild(nameLabel);

let inputEl = document.createElement ('input');
inputEl.setAttribute("type", "text");
inputEl.setAttribute("name", "names");
contactContainer.appendChild(inputEl);

let emailLabel = document.createElement('label');
emailLabel.innerHTML = "Email";
emailLabel.classList.add("contact__email")
contactContainer.appendChild(emailLabel);

let emailEl = document.createElement('input')
emailEl.setAttribute("type", "text");
emailEl.setAttribute("name", "emails");
contactContainer.appendChild(emailEl);


let messageLabel = document.createElement('label'); 
messageLabel.innerHTML = "Message";
messageLabel.classList.add("contact__message")
contactContainer.appendChild(messageLabel);

let textareaEl = document.createElement('textarea');
textareaEl.setAttribute("name", "messages");
textareaEl.setAttribute("cols", "10");
textareaEl.setAttribute("rows", "5");
contactContainer.appendChild(textareaEl);

let  submitEl = document.createElement('input'); 
submitEl.setAttribute("type", "submit");
submitEl.setAttribute("name", "dsubmit");
submitEl.setAttribute("value", "SUBMIT");
submitEl.classList.add("contact__submit")
contactContainer.appendChild(submitEl);
