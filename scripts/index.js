class Header {
    constructor(homeLink, aboutLink, contactLink) {
        this.homeLink = homeLink;
        this.aboutLink = aboutLink;
        this.contactLink = contactLink;
    }

    render() {
        return `
        <div class="margin">
        <div class="header__title-container >
            <h1 class="header__title">BecomeBartender</h1>
        </div>
        <nav class="nav-bar"> 
            <ul>
                <a href=${this.homeLink}>
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
        this.headerLink = new Header
        ("../index.html", "../pages/about.html", "../pages/contact-us.html")
    }
    render() {
        return `
        ${this.header.render()};
        `
    }
}


const header = document.getElementById("header");
let addHeader = new Header();
header.innerHTML = addHeader.render();

class Footer {
    constructor() {
    }

    render() {
        return `
        <div class="margin">
        <div class="footer-container">
        <h2 class="footer__header">Get in Touch</h2>
        <div class="footer__icon-container">
            <a class='primary-footer__link' href="https://instagram.com">
                <img
                src="./assets/Icons/SVG/icon-instagram.svg"
                alt="instagram"
                />
            </a>
            <a class='primary-footer__link' href="https://facebook.com">
                <img
                src="./assets/Icons/SVG/icon-facebook.svg"
                alt="facebook"
                />
            </a>
            <a class='primary-footer__link' href="https://twitter.com">
                <img 
                src="./assets/Icons/SVG/icon-twitter.svg"
                alt="twitter"
                />
            </a>
        </div>
        </div>
        </div>
        `;
    }
}


const footer = document.getElementById("footer");
const addFooter = new Footer();
footer.innerHTML = addFooter.render();