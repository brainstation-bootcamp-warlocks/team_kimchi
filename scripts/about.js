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
            <a href="../index.html">
            <img class="header__logo" src=${this.imageLink} />
            </a>
            </div>
            <div class="header__title-container">
                <a href="../index.html">
                <h1 class="header__title">BecomeBartender</h1>
                </a>
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
        this.headerLinks = new Header("../index.html", "#", "./contact-us.html", "../assets/logo.png");
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
        <p class="footer__copyright">Copyright BecomeBartender © 2022 All Rights Reserved</p>
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


