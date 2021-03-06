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
            <a href="#">
            <img class="header__logo" src=${this.imageLink} />
            </a>
            </div>
            <div class="header__title-container">
                <a href="#">
                <h1 class="header__title">BecomeBartender</h1>
                <a/>
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

        <p class="footer__copyright">Copyright BecomeBartender ?? 2022 All Rights Reserved</p>
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

// references
const cocktailDetails = document.getElementById('cocktail-details')

const searchInput = document.getElementById('search-input')
searchInput.classList.add("hero__search-input")

const searchBtn = document.getElementById('search-btn')
searchBtn.classList.add("hero__search-btn")

const errorMessage = document.getElementById('error-message')

// search button event handler
searchBtn.addEventListener('click', function() {
    cocktailDetails.innerHTML = '';
    cocktailImg.src = '';
    cocktailName.innerHTML = '';

    const searchAPI = axios 
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
    
    .then((response) => {
        console.log(response.data);
        let searchDrink = response.data

        if(searchInput.value === '') {
            errorMessage.innerText = `Search box must be filled`;
        } else {
            displayCocktail(searchDrink.drinks);
            errorMessage.innerText = '';
        }
    })
    .catch((error) => {
        console.log(error);
    })
    
});

// input field event handler
searchInput.addEventListener('keydown', function() {
    cocktailDetails.innerHTML = '';
    cocktailImg.src = '';
    cocktailName.innerHTML = '';

    const searchAPI = axios 
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
    
    .then((response) => {
        console.log(response.data);
        let searchDrink = response.data;
        
        if(searchInput.value === '') {
            errorMessage.innerText = `Search box must be filled`;
        } else {
            displayCocktail(searchDrink.drinks);
            errorMessage.innerText = '';
        }

    })
    .catch((error) => {
        console.log(error);
    })
    
}); 

// display cocktail function
const displayCocktail = (drinkData) => {
    drinkData.forEach(data => {
        const div = document.createElement('div');
        div.classList.add("cocktail__rendered");
        div.innerHTML = `
                <img class="cocktail__img" src="${data.strDrinkThumb}" alt="...">
                <div class="cocktail__rendered-container">
                    <h5 class="cocktail__rendered-name">${data.strDrink}</h5>
                    <button onclick="renderDetails(${data.idDrink})" class="cocktail__detail-btn">Click for Instructions!</button>
                </div>
        `
        cocktailDetails.appendChild(div);

    });
};

// rendering the details of the drinks
const renderDetails = (drinkId) => {
    const lookupAPI = axios 
    .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`) 

    .then((response) => {
        console.log(response.data)
        displayDetails(response.data.drinks[0])
    }
    )};

// placing that data in a new container which only gets called when the button is pressed
const displayDetails = (drink) => {
    console.log(drink);

    cocktailDetails.innerHTML = `
                <div class="margin">
                    <img class="cocktail__img" src="${drink.strDrinkThumb}" alt="...">
                    <h3>${drink.strDrink}</h3>
                    <h5>Category: ${drink.strCategory}</h5>
                    <h5>Type of Glass: ${drink.strGlass}</h5>
                    <h3>Instructions:</h3>
                    <p>${drink.strIngredient1} & ${drink.strIngredient2}</p>
                    <p>${drink.strInstructions}</p>
                </div>
    `
};

// creating random cocktail picker 

const randomBtn = document.getElementById('.random');
const cocktailImg = document.querySelector('.cocktail__img');
const cocktailName = document.querySelector('.cocktail__name');

//connected to randomizer button 

const randomCocktail = () => {

    let randomAPI = axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)

    .then((response) => {
        console.log(response.data);
        let randomData = response.data.drinks;
        cocktailName.innerHTML = randomData[0].strDrink;
        cocktailImg.src = randomData[0].strDrinkThumb;

        errorMessage.innerHTML = '';
        cocktailDetails.innerHTML = '';
    })
};