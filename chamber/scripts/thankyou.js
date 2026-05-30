const params = new URLSearchParams(window.location.search);

const results = document.getElementById("results");

results.innerHTML = `
<p>First Name: ${params.get("fname")}</p>
<p>Last Name: ${params.get("lname")}</p>
<p>Email: ${params.get("email")}</p>
<p>Phone: ${params.get("phone")}</p>
<p>Business: ${params.get("business")}</p>
<p>Timestamp: ${params.get("timestamp")}</p>
`;
// HAMBURGER MENU
const menuBtn = document.getElementById("menu");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});