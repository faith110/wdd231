export async function getWorkouts() {

try {

const response =
await fetch("data/workouts.json");

if (!response.ok) {

throw new Error(
"Unable to load workout data."
);

}

const data =
await response.json();

return data;

}

catch(error){

console.error(error);

return [];

}

}