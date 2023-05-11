document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  fetch("http://localhost:3000/data")
    .then((response) => response.json())
    .then((data) => data.forEach((team) => createCard(team)));
});

const img = document.querySelector("img");
console.log(img);

function createCard(data) {
  const div = document.querySelector(".card");
  let img = document.createElement("img");
  img.src = data.img;

  div.append(img);
  img = document.querySelector("img");
  img.addEventListener("click", () => {
    let html = `<div class="team">
    <h2>Name: ${data.name}</h2>
    <h2>Full Name: ${data.fullName}</h2>
    <h2>Abbreviation: ${data.abbreviation}</h2>
    <h2>City: ${data.city}</h2>
    <h2>Conference: ${data.conference}</h2>
    <h2>Division: ${data.division}</h2>`
    div.innerHTML = html

    // const div = document.createElement("div");
    // div.classList.add("cardInfo");
    // const p1 = document.createElement("p");
    // p1.textContent = data.name;
    // const p2 = document.createElement("p");
    // p2.textContent = data.abbreviation;
    // const p3 = document.createElement("p");
    // p3.textContent = data.city;
    // const p4 = document.createElement("p");
    // p4.textContent = data.conference;
    // const p5 = document.createElement("p");

    // div.append(p1, p2, p3, p4, p5);
  });
}

function viewPacificDivision(data) {
  const p1 = document.createElement("p");
  p1.textContent = data.name;
  const p2 = document.createElement("h4");
  p2.textContent = data.abbreviation;
  const p3 = document.createElement("p");
  p3.textContent = data.city;
  const p4 = document.createElement("p");
  p4.textContent = data.conference;
  const p5 = document.createElement("p");
  //p5.textContent = data.division;
}
