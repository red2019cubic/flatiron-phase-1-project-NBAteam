document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => data.forEach((team) => createCard(team)));
     
  
});



function viewAllTeams(data) {
  fetch("http://localhost:3000/data")
    .then((response) => response.json())
    .then((data) => data.forEach((team) => createCard(team) ));
   
}
function createCard(data) {
//   const view = document.createElement("div");
//   view.addEventListener("click", viewAllTeams);
//   let card = document.createElement("div");
//   card.classList.add("card");

  const div = document.querySelector(".card");
  const img = document.createElement("img");
  img.src = data.img;
  const p1 = document.createElement("h4");
  //p1.textContent = data.name;
  const p2 = document.createElement("h4");
  //p2.textContent = data.abbreviation;
  const p3 = document.createElement("p");
  //p3.textContent = data.city;
  const p4 = document.createElement("p");
  //p4.textContent = data.conference;
  const p5 = document.createElement("p");
  //p5.textContent = data.division;

  div.append(img, p1, p2, p3, p4, p5);
}
// let addToy = false;
// function createCardElement(toy){
//   let card = document.createElement("div");
//   card.classList.add("card");

//   let h2 = document.createElement("h2");
//   h2.textContent = toy.name;

//   let img = document.createElement("img");
//   img.src = toy.img;
//   img.classList.add("toy-avatar");

//   let p = document.createElement("p");
//   p.textContent = toy.division;
//   let p1 = document.createElement("p");
//   p.textContent = toy.city;
//   let p2 = document.createElement("p");
//   p.textContent = toy.conference;
//   let p3 = document.createElement("p");
//   p.textContent = toy.fullName;
//   let p4 = document.createElement("p");
//   p.textContent = toy.abbreviation;


//   let btn = document.createElement("button");
//   btn.classList.add("like-btn");
//   btn.addEventListener("click", ()=>{
//     p.textContent = `${toy.likes += 1} Likes`;
//     updateLikes(toy.id, toy.likes)
//   })
 
//   card.append(h2, img, p, p1,p2 ,p3, btn);
//   document.getElementById("toy-collection").appendChild(card)
// }
// function updateLikes(id, newNumberOfLikes){
//   fetch(`http://localhost:3000/data/${id}`,{
//     method:"PATCH",
//     headers:
//     {
//       "Content-Type": "application/json",
//       "Accept":"application/json"
//     },
//     body: JSON.stringify({
//       "likes": newNumberOfLikes
//     })
//   })

// }

// function sendItOut(newToy){
//   fetch("http://localhost:3000/data", {
//     method:"POST",
//     headers:
//     {
//       "Content-Type": "application/json",
//       "Accept":"application/json"
//     },
//     body: JSON.stringify({
//       ...newToy,
//      "likes": 0
//     })

//   }).then(res => res.json()).then(resToy => createCardElement(resToy))


// }
// document.addEventListener("DOMContentLoaded", () => {
//   fetch("http://localhost:3000/data")
//   .then(response => response.json())
//   .then(toys => toys.forEach(toy=>createCardElement(toy)));

//   const form = document.querySelector("form.add-toy-form");
//   form.addEventListener("submit", e => {
//     e.preventDefault();
//     const formData = Object.fromEntries(new FormData(e.target));
//     sendItOut(formData);
    
//   })
//   const addBtn = document.querySelector("#new-toy-btn");
//   const toyFormContainer = document.querySelector(".container");


//   addBtn.addEventListener("click", () => {
//     // hide & seek with the form
//     addToy = !addToy;
//     if (addToy) {
//       toyFormContainer.style.display = "block";
//     } else {
//       toyFormContainer.style.display = "none";
//     }
//   });
// });



