const aboutPage = document.createElement('div');
aboutPage.id = "about-page";

const hoursArry = [{
                        days: "Sunday - Thursday",
                        hours: "11:00 am - 9:00 pm"
                    },
                {
                    days: "Friday - Saturday",
                    hours: "11:00 am - 11:00 pm"
                }]

const hours = document.createElement('div');
hours.classList.add("card");
const hoursOfOp = document.createElement('h2');
hoursOfOp.innerText = "Hours of Operation";
hours.appendChild(hoursOfOp);
hoursArry.forEach(elem =>{
    const days = document.createElement('p');
    days.innerText = elem.days;
    const hoursOpen = document.createElement('p');
    hoursOpen.innerText = elem.hours;
    hours.appendChild(days);
    hours.appendChild(hoursOpen);
})

const contact = document.createElement('div');
contact.classList.add("card");
const contactHeader = document.createElement('h2');
contactHeader.innerText = "Contact Information";
const phoneNum = document.createElement('p');
phoneNum.innerText = "(555)555-5555";
const email = document.createElement('p');
email.innerText = "fake@fakeemail.com";
const address = document.createElement('p');
address.innerText = "123 Seahaven Island";
contact.appendChild(contactHeader);
contact.appendChild(phoneNum);
contact.appendChild(email);
contact.appendChild(address);


aboutPage.appendChild(hours);
aboutPage.appendChild(contact);



function getAboutPage(){
    return aboutPage;
}

export { getAboutPage };