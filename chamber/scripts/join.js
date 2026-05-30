// TIMESTAMP
document.getElementById("timestamp").value = new Date();

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();

// MODALS
function openModal(id) {
    document.getElementById(id).showModal();
}

function closeModal(id) {
    document.getElementById(id).close();
}
// HAMBURGER MENU
const menuBtn = document.getElementById("menu");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});