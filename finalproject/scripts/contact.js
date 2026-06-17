console.log("Contact page loaded");
const form = document.querySelector("form");

form.addEventListener("submit", () => {
    const goal = document.querySelector('input[name="goal"]').value;

    localStorage.setItem("fitnessGoal", goal);
});