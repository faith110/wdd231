// ===== FOOTER DATES =====
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


// ===== SPOTLIGHTS =====
const memberURL = "data/members.json";

async function getSpotlights() {
    const response = await fetch(memberURL);
    const data = await response.json();

    // Filter gold & silver only
    const members = data.filter(m => m.membership >= 2);

    // Shuffle randomly
    const random = members.sort(() => 0.5 - Math.random());

    // Pick 3
    const selected = random.slice(0, 3);

    displaySpotlights(selected);
}

function displaySpotlights(members) {
    const container = document.querySelector("#spotlight-container");

    members.forEach(member => {
        const card = document.createElement("div");

        card.classList.add("spot-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name}">
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <p>Membership: ${member.membership}</p>
            <a href="${member.website}" target="_blank">Visit</a>
        `;

        container.appendChild(card);
    });
}

getSpotlights();


// ===== WEATHER =====
const apiKey = "168f0e4ab87f33be7788661051f524d3"; 
const city = "Abuja";

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(weatherURL);
    const data = await response.json();

    document.getElementById("temp").textContent = data.main.temp + "°C";
    document.getElementById("desc").textContent = data.weather[0].description;
}

getWeather();