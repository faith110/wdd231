const url = "data/members.json";
const container = document.querySelector("#members");

// FETCH DATA
async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

// DISPLAY MEMBERS
function displayMembers(members) {
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit</a>
        `;

        container.appendChild(card);
    });
}

getMembers();


// GRID / LIST TOGGLE
document.getElementById("gridBtn").addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

document.getElementById("listBtn").addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});


// HAMBURGER MENU
const menuBtn = document.getElementById("menu");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});


// FOOTER DATES
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;