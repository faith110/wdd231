// FETCH JSON DATA
const url = "data/members.json";
const container = document.querySelector("#members");

// GET MEMBERS
async function getMembers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Error fetching members:", error);
  }
}

// DISPLAY MEMBERS
function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <img src="images/${member.image}" alt="${member.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// TOGGLE GRID / LIST VIEW
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});

// MOBILE MENU TOGGLE
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector("#nav-links");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// FOOTER DYNAMIC DATA
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

// RUN FUNCTION
getMembers();