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
        <h2 class="footer__header">Follow Us</h2>
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
        `;
    }
}


const footer = document.getElementById("footer");
const addFooter = new Footer();
footer.innerHTML = addFooter.render();