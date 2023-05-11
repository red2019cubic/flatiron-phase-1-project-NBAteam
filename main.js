





function createCard(data) {
  const div = document.querySelector(".card");
  const img = document.createElement("img");
  img.src = data.img;

  div.append(img);
  const imgList = document.querySelectorAll("img");

  let html = "";
  for (let i = 0; i < imgList.length; i++) {
 
    imgList[i].addEventListener("click", () => {
      fetch("http://localhost:3000/data")
        .then((response) => response.json())
        .then((data) =>
          data.forEach((logo) => {
            html = `<div class="team">
                      <h1><b>Team Details</b></h2>
                      <br>
                      <br>
                      <h2>Name: ${logo.name}</h2>
                      <h2>Full Name: ${logo.full_name}</h2>
                      <h2>Abbreviation: ${logo.abbreviation}</h2>
                      <h2>City: ${logo.city}</h2>
                      <h2>Conference: ${logo.conference}</h2>
                      <h2>Division: ${logo.division}</h2>
                      </div>`;
            //let card = document.querySelector(".team")
            div.innerHTML = html;
          })
        );
    });
  }
}


  const atlanticDiv = document.querySelector("#atlantic");
  console.log(atlanticDiv)
  atlanticDiv.addEventListener("click", () => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => data.filter((team) => {
        if(team.division === "Atlantic"){
        console.log(team)
         createCard(team);
        }
      }))
  });


