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
        `
    }
}

const header = document.getElementById("header");
let addHeader = new Header();
header.innerHTML = addHeader.render();

class Footer {
    constructor(title, home) {
        this.title = title;
        this.home = home;
    }

    render() {
        return `
        <div class="margin">
        <div class="header__title-container >
            <h1 class="header__title">BecomeBartender</h1>
        </div>
        <nav class="nav-bar"> 
            <ul>
                <a href="#">
                    <li>Home</li>
                </a>
                <a href="./pages/about.html">
                    <li>About</li>
                </a>
                <a href="./pages/contact-us.html">
                    <li>Contact Us</li>
                </a>

            </ul>
        </nav>
        </div>
        `
    }
}


const footer = document.getElementById("footer");
const addFooter = new Footer();
footer.innerHTML = addFooter.render();