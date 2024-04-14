import { getHomePage } from "./homePage";
import { getAboutPage } from "./aboutPage";
import { getMenuPage } from "./menuPage";
import "./style.css";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

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

