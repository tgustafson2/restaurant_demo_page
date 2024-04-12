
const homePage = document.createElement('div');
homePage.className = "home";

const restaurantName = document.createElement('h1');
restaurantName.className = "restaurant-name";
restaurantName.textContent = "Scratch Home Kitchen";

const promoPicture = document.createElement('div');
promoPicture.classList.add("card");
promoPicture.classList.add("promo-picture-container");

const picture = document.createElement('img');
picture.src = "./skjf.png";
promoPicture.appendChild(picture);

const descriptionContainer = document.createElement('div');
descriptionContainer.classList.add("card");
const quote = document.createElement('p');
quote.innerText = "Incredible tasting assortment from cuisines across the globe with an Italian focus. Have a taste of Mexican,"
                                                                +"Asian, Italian, or American. With one of my wife's signature dishes made from scratch";
const testimonialGiver = document.createElement('h5');
testimonialGiver.innerText = "Loving Husband";
descriptionContainer.appendChild(quote);
descriptionContainer.appendChild(testimonialGiver);



homePage.appendChild(restaurantName);
homePage.appendChild(promoPicture);
homePage.appendChild(descriptionContainer);





function getHomePage(){
    return homePage;
    
}

export { getHomePage };