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
// OPEN MODALS
const links = document.querySelectorAll(".modal-link");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const modalId = link.dataset.modal;
        document.getElementById(modalId).showModal();
    });
});


// CLOSE BUTTONS
// CLOSE MODALS
document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", function () {
        this.closest("dialog").close();
    });
});
// HAMBURGER MENU
const menuBtn = document.getElementById("menu");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});