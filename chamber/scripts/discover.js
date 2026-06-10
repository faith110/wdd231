import { places } from "../data/places.mjs";

const container = document.querySelector("#discover-grid");

places.forEach((place,index)=>{

const card = document.createElement("section");

card.classList.add("discover-card");
    
// HAMBURGER MENU
const menuBtn = document.getElementById("menu");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

card.innerHTML = `
<h2>${place.name}</h2>

<figure>
<img src="${place.image}"
alt="${place.name}"
loading="lazy"
width="300"
height="200">
</figure>

<address>${place.address}</address>

<p>${place.description}</p>

<button>Learn More</button>
`;

container.appendChild(card);

});



// Footer

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
document.lastModified;


// Local Storage

const message = document.querySelector("#visit-message");

const lastVisit =
localStorage.getItem("lastVisit");

const now = Date.now();

if(!lastVisit){

message.textContent =
"Welcome! Let us know if you have any questions.";

}else{

const days =
Math.floor((now-lastVisit)/(1000*60*60*24));

if(days < 1){

message.textContent =
"Back so soon! Awesome!";

}else{

message.textContent =
`You last visited ${days} ${days===1 ? "day":"days"} ago.`;

}

}

localStorage.setItem("lastVisit",now);