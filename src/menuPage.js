const menuPage = document.createElement('div');
menuPage.id = "menu-page";

const items = [{
                    dishName: "Pizza",
                    dishDescription: "sourdough crust with a garlic and basil sauce",
                    dishPrice: "$15",
                    imagePath: ""
                },
                {
                    dishName: "Shrimp Scampi",
                    dishDescription: "fresh fettucine pasta with wild caught shrimp in a garlicky, parmesean wine sauce",
                    dishPrice: "$20",
                    imagePath: ""
                },
                {
                    dishName: "Chicken Pesto Pasta",
                    dishDescription: "fresh fettucine pasta with a basil, parmesean, pecorino pesto",
                    dishPrice: "$18",
                    imagePath: ""
                },
                {
                    dishName: "Beef Stirfry",
                    dishDescription: "stirfried tri tip beef with mushrooms, onions and brocolli and a side of jasmine rice",
                    dishPrice: "$17",
                    imagePath: ""
                },
                {
                    dishName: "Ranchera Marinada Tacos",
                    dishDescription: "Ranchera Marinada beef flap grilled topped with grilled onions, lettuce, tomatoes, cheese, and peppers",
                    dishPrice: "$22",
                    imagePath: ""
                },
                {
                    dishName: "Baked Chicken",
                    dishDescription: "roasted chicken thighs with a side of lemony asparagus and roasted potatoes",
                    dishPrice: "$15",
                    imagePath: ""
                },
                {
                    dishName: "Korean Short Ribs",
                    dishDescription: "korean marinated short ribs with a side of steamed brocolli",
                    dishPrice: "$17",
                    imagePath: ""
                },];

items.forEach(elem =>{
    const item = document.createElement("div");
    item.classList.add("card");
    const title = document.createElement("h3");
    title.innerText = elem.dishName;
    title.classList.add("dish-title");
    item.appendChild(title);
    const description = document.createElement("p");
    description.classList.add("dish-description");
    description.innerText = elem.dishDescription;
    item.appendChild(description);
    const price = document.createElement("h5");
    price.classList.add("dish-price");
    price.innerText = elem.dishPrice;
    item.appendChild(price);
    if(elem.imagePath!==""){
        const image = document.createElement("img");
        image.src = elem.imagePath;
        image.classList.add("dish-picture");
    }
    menuPage.appendChild(item);
})

function getMenuPage(){
    return menuPage;
}

export { getMenuPage };