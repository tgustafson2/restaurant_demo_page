import kitchen from './kitchen.jpg';
const homePage = document.createElement('div');
homePage.id = "home";

const restaurantName = document.createElement('h1');
restaurantName.className = "restaurant-name";
restaurantName.textContent = "Scratch Home Kitchen";

const promoPicture = document.createElement('div');
promoPicture.classList.add("card");
promoPicture.classList.add("promo-picture-container");

const picture = new Image();
picture.src = kitchen;
promoPicture.appendChild(picture);
const picCredit = document.createElement("div");
picCredit.classList.add("img-credit");
const picCreditText = document.createElement("p");
picCreditText.innerText = "Image by Freepik";
picCredit.appendChild(picCreditText);
promoPicture.appendChild(picCredit);

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