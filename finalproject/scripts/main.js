const menuBtn =
document.querySelector("#menu-btn");

const navLinks =
document.querySelector("#nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("open");

});
const savedGoal = localStorage.getItem("fitnessGoal");

if (savedGoal) {
    document.querySelector("#saved-goal").textContent =
        `Your fitness goal: ${savedGoal}`;
}

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;