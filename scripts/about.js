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


// creating random cocktail picker 

let i = 0;
let cocktail = []
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let cocktailImg = document.querySelector('.cocktailImg');
let cocktailName = document.querySelector('.cocktailName');



const loadCocktail = () => {
    axios
    .get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
    .then((response) => {
        console.log(response.data);
        let cocktail = response.data;

        cocktailName.innerHTML = `${cocktail.drinks[0].strDrink}`;
        cocktailImg.src = cocktail.drinks[0].strDrinkThumb;
    })
    .catch((error) => {
        console.log(error);
    });
};

loadCocktail();


/*     function loop() {
        if (i === cocktail[0].length) {
            i = 0;
        } else if (i === -1) {
            i = cocktail[0].length - 1;
        }
    }
    
    function addData() {
        cocktailName.innerHTML = `${cocktail.drink[0].strDrink}`
        cocktailImg.src = cocktail.drink[0].strDrinkThumb
    
    }
    
    function clearImg() {
        cocktailName.innerHTML = ``;
        cocktailImg.src = null;
    }
    
    nextBtn.addEventListener('click', function () {
        i++;
        loop();
        clearImg();
        addData();
    })
    
    prevBtn.addEventListener('click', function () {
        i--;
        loop();
        clearImg();
        addData();
    }) */