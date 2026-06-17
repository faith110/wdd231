const params =
new URLSearchParams(window.location.search);

document.querySelector("#results").innerHTML = `

<p><strong>Name:</strong>
${params.get("name")}</p>

<p><strong>Email:</strong>
${params.get("email")}</p>

<p><strong>Age:</strong>
${params.get("age")}</p>

<p><strong>Fitness Goal:</strong>
${params.get("goal")}</p>

`;