import { getWorkouts } from "./datafetch.js";

const container =
document.querySelector("#workout-container");

const modal =
document.querySelector("#workoutModal");

const modalContent =
document.querySelector("#modalContent");

const closeModal =
document.querySelector("#closeModal");

const difficultySelect =
document.querySelector("#difficulty");

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

const menuBtn =
document.querySelector("#menu-btn");

const navLinks =
document.querySelector("#nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("open");

});

closeModal.addEventListener("click",()=>{

modal.close();

});

difficultySelect.addEventListener("change",()=>{

localStorage.setItem(
"difficulty",
difficultySelect.value
);

loadWorkouts();

});

const savedDifficulty =
localStorage.getItem("difficulty");

if(savedDifficulty){

difficultySelect.value =
savedDifficulty;

}

async function loadWorkouts(){

const workouts =
await getWorkouts();

const selected =
difficultySelect.value;

container.innerHTML = "";

const filteredWorkouts =
selected === "All"
? workouts
: workouts.filter(workout =>
workout.difficulty === selected
);

displayWorkouts(filteredWorkouts);

}

function displayWorkouts(workouts){

workouts.forEach(workout=>{

const card =
document.createElement("section");

card.classList.add("workout-card");

card.innerHTML = `
<img src="${workout.image}"
       alt="${workout.name}"
       loading="lazy">

<h2>${workout.name}</h2>

<p><strong>Duration:</strong>
${workout.duration}</p>

<p><strong>Difficulty:</strong>
${workout.difficulty}</p>

<p><strong>Calories:</strong>
${workout.calories}</p>

<p><strong>Equipment:</strong>
${workout.equipment}</p>

<button class="details-btn">
View Details
</button>

`;

const button =
card.querySelector(".details-btn");

button.addEventListener("click",()=>{

modalContent.innerHTML = `

<h2>${workout.name}</h2>

<p><strong>Duration:</strong>
${workout.duration}</p>

<p><strong>Difficulty:</strong>
${workout.difficulty}</p>

<p><strong>Calories Burned:</strong>
${workout.calories}</p>

<p><strong>Equipment:</strong>
${workout.equipment}</p>

`;

modal.showModal();

});

container.appendChild(card);

});

}

loadWorkouts();
