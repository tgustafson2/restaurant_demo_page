import { getHomePage } from "./homePage";
import { getAboutPage } from "./aboutPage";
import { getMenuPage } from "./menuPage";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener('click', event =>{
    content.replaceChildren();
    content.append(getHomePage());
})

menuBtn.addEventListener('click', event =>{
    content.replaceChildren();
    content.append(getMenuPage());
})

aboutBtn.addEventListener('click', event =>{
    content.replaceChildren();
    content.append(getAboutPage());
})

content.append(getHomePage());

