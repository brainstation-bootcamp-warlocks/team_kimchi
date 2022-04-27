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
            <img class="header__logo" src=${this.imageLink} />
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

const cocktailDetails = document.getElementById('cocktail-details')
const allCocktails = document.getElementById('cocktails')
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const errorMessage = document.getElementById('error-message')

// search button event handler
searchBtn.addEventListener('click', function() {
    allCocktails.innerHTML = ''
    cocktailDetails.innerHTML = ''
    const searchText = searchInput.value
    const searchURL = axios 
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
    
    .then((response) => {
        console.log(response.data);
        let searchDrink = response.data
//        console.log(searchDrink.drinks[0]);

        if(searchText === '') {
            errorMessage.innerText = `Search box must be filled`
        } else {
            errorMessage.innerText = 'Cocktails'
            showCocktail(searchDrink.drinks)
        }
    })
    .catch((error) => {
        searchInput.value = '';
        console.log(error);
    })
    
});

// display cocktail function
const showCocktail = (drink) => {
    drink.forEach(data => {
        console.log(data)
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="">
                <img src="${data.strDrinkThumb}" class="" alt="...">
                <div class="">
                    <h5 class="">${data.strDrink}</h5>
                    <button onclick="displayDetails(${data.idDrink})" class="">Click for Instructions!</button>
                </div>
            </div>
        `
        allCocktails.appendChild(div);

    });
};

// display drink details
const displayDetails = (drinkId) => {
    const lookupURL = axios 
    .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`) 

    .then((response) => {
        console.log(response.data)
        showDetails(response.data.drinks[0])
    }
    )};

const showDetails = (drink) => {
    console.log(drink);

    drinkDetails.innerHTML = `
        <div class="">
            <div class="">
                <div class="">
                    <h5><span class="">Category:</span> ${drink.strCategory}</h5>
                    <h5><span class="">Type of Glass:</span> ${drink.strGlass}</h5>
                    <h5 class="">Instructions:</h5> <p>${drink.strInstructions}</p>
                </div>
            </div>
        </div>
    `
}

