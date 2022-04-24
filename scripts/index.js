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
            <img src=${this.imageLink} />
            <div class="header__title-container >
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
        this.headerLinks = new Header("#", "./pages/about.html", "./pages/contact-us.html", "./assets/logo.png");
    }

    render() {
        return `
        ${this.headerLinks.render()};
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
        <div class="footer-margin margin">
        <div class="footer-container">
        <h2 class="footer__header">Follow Us</h2>
        <div class="footer__icon-container">
            <a href="https://instagram.com">
                <img
                src="./assets/Icons/SVG/icon-instagram.svg"
                alt="instagram"
                />
            </a>
            <a href="https://facebook.com">
                <img
                src="./assets/Icons/SVG/icon-facebook.svg"
                alt="facebook"
                />
            </a>
            <a href="https://twitter.com">
                <img 
                src="./assets/Icons/SVG/icon-twitter.svg"
                alt="twitter"
                />
            </a>
        </div>

        <h2>Become Bartender<h2>

        <div class="primary-footer__info-container">
			<div>
				<ul class="primary-footer__list">
					<li class="primary-footer__list-item primary-footer__list-item--bold">Park Sejin</li>
					<li class="primary-footer__list-item primary-footer__list-item--bold">Manhattan Management</li>
				</ul>
				<ul class="primary-footer__list">
					<li class="primary-footer__list-item">24 Kennedy Penthouse,</li>
					<li class="primary-footer__list-item">Brooklyn, NY 53831, USA</li>
				</ul>
				<a href="mailto:myfakeemail@email.com" class="primary-footer__email">myreallyfakeEmail@fake.com</a>
			</div>
			<div>
				<ul class="primary-footer__list">
					<li class="primary-footer__list-item primary-footer__list-item--bold">Mark Macaraig</li>
					<li class="primary-footer__list-item primary-footer__list-item--bold">Limitless Drinking Groups</li>
				</ul>
				<ul class="primary-footer__list ">
					<li class="primary-footer__list-item">59 Bremner Rd</li>
					<li class="primary-footer__list-item">New York, </li>
				</ul>
				<a href="mailto:pearl.gregg@limitlessag.com" class="primary-footer__email">pearl.gregg@limitlessag.com</a>
			</div>
        </div>
        </div>
        </div>
        `;
    }
}


const footer = document.getElementById("footer");
const addFooter = new Footer();
footer.innerHTML = addFooter.render();