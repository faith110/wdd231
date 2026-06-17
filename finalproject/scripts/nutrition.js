const meals = [

{
name:"Protein Breakfast",
foods:"Eggs, Oats, Banana",
benefit:"Supports muscle growth"
},

{
name:"Healthy Lunch",
foods:"Chicken, Rice, Vegetables",
benefit:"Provides energy"
},

{
name:"Balanced Dinner",
foods:"Fish, Sweet Potato, Salad",
benefit:"Supports recovery"
},

{
name:"Green Smoothie",
foods:"Spinach, Apple, Yogurt",
benefit:"Rich in vitamins"
}

];

const container =
document.querySelector("#nutrition-container");

meals.forEach(meal=>{

const card =
document.createElement("section");

card.classList.add("feature-card");

card.innerHTML = `

<h2>${meal.name}</h2>

<p>${meal.foods}</p>

<p>${meal.benefit}</p>

`;

container.appendChild(card);

});
