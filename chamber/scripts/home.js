// ===== FOOTER =====
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


// ===== SPOTLIGHT =====
const memberURL = "data/members.json";

async function getSpotlights() {
    const response = await fetch(memberURL);
    const data = await response.json();

    const filtered = data.filter(m => m.membership >= 2);
    const random = filtered.sort(() => 0.5 - Math.random());
    const selected = random.slice(0, 3);

    displaySpotlights(selected);
}

function displaySpotlights(members) {
    const container = document.getElementById("spotlight-container");

    members.forEach(member => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}">
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <p>Membership: ${member.membership}</p>
            <a href="${member.website}" target="_blank">Visit</a>
        `;

        container.appendChild(div);
    });
}

getSpotlights();

// HAMBURGER MENU
const menuBtn = document.getElementById("menu");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});


// ===== WEATHER (CURRENT + 3 DAY FORECAST) =====
const apiKey = "5577698a2979d45fa5a770cd29faf636";
const city = "Abuja";

// CURRENT WEATHER
const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(currentURL);
    const data = await response.json();

    document.getElementById("temp").textContent = data.main.temp + "°C";
    document.getElementById("desc").textContent = data.weather[0].description;
}

getWeather();


// FORECAST
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function getForecast() {
    const response = await fetch(forecastURL);
    const data = await response.json();

    const forecastContainer = document.getElementById("forecast");

    // pick one forecast per day (every 8th item ≈ 24hrs)
    const days = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);

    days.forEach(day => {
        const date = new Date(day.dt_txt).toDateString();
        const temp = day.main.temp;

        const p = document.createElement("p");
        p.textContent = `${date}: ${temp}°C`;

        forecastContainer.appendChild(p);
    });
}

getForecast();