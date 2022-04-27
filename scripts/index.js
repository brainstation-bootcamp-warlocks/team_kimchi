// constructed a header constructor that took in dynamic instances of the relative pathing towards other pages
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
            <img class="header__logo" src=${this.imageLink} />
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

// created another class that rendered the header with the values i wanted to input 
class RenderedHeader {
    constructor() {
        this.headerLinks = new Header("#", "./pages/about.html", "./pages/contact-us.html", "./assets/logo.png");
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

// created a footer class thats only purpose was to generate the HTML on the page with the relative pathing hard coded into the HTML, and not left dynamic
class Footer {
    constructor() {
    }

    render() {
        return `
        
        <div class="footer-container">
        <div class="footer__icon-container">
            <a href="https://instagram.com">
                <img
                src="./assets/Icons/SVG/icon-instagram.svg"
                alt="instagram" class="footer__icon"
                />
            </a>
            <a href="https://facebook.com">
                <img
                src="./assets/Icons/SVG/icon-facebook.svg"
                alt="facebook" class="footer__icon"
                />
            </a>
            <a href="https://twitter.com">
                <img 
                src="./assets/Icons/SVG/icon-twitter.svg"
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

// referencing the footer that has the element of id
const footer = document.getElementById("footer");
// created a new variable that creates a new Footer class
const addFooter = new Footer();
//setting the value of footer to the class but rendered
footer.innerHTML = addFooter.render();

