document.addEventListener("DOMContentLoaded", () => {
  pacificDivisionTeams();
  centralDivisionTeams();
  southwestDivisionTeams();

  southeastDivisionTeams();
  atlanticDivisionTeams();
});

function createTeamImage(team) {
  console.log(team);
  const div = document.querySelector(".card");

  const img = document.createElement("img");

  img.src = team.img;

  div.append(img);

  let html = "";

  img.addEventListener("click", () => {
    html = `<div class="team">
                      <h1><b>Team Details</b></h2>
                      <br>
                      <br>
                      
                      <h2>Name: ${team.name}</h2>
                      <h2>Full Name: ${team.full_name}</h2>
                      <h2>Abbreviation: ${team.abbreviation}</h2>
                      <h2>City: ${team.city}</h2>
                      <h2>Conference: ${team.conference}</h2>
                      <h2>Division: ${team.division}</h2>
                      </div>`;
   
      div.innerHTML = html;
    
  });
}

function atlanticDivisionTeams() {
  const atlanticDiv = document.querySelector("#atlantic");

  atlanticDiv.addEventListener("click", () => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => {
        const div = document.querySelector(".card");
        div.replaceChildren();
        data.filter((team) => {
          if (team.division === "Atlantic") {
            createTeamImage(team);
          }
        });
      });
  });
}
function pacificDivisionTeams() {
  const pacificDiv = document.querySelector("#pacific");

  pacificDiv.addEventListener("click", () => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => {
        const div = document.querySelector(".card");
        div.replaceChildren();
      
        data.filter((team) => {
          if (team.division === "Pacific") {
            createTeamImage(team);
          }
        })
  });
  });
}
function southeastDivisionTeams() {
  const southeastDiv = document.querySelector("#southeast");

  southeastDiv.addEventListener("click", () => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) =>  {
        const div = document.querySelector(".card");
      div.replaceChildren();
        data.filter((team) => {
          if (team.division === "Southeast") {
            createTeamImage(team);
          }
        })
       } );
  });
}

function southwestDivisionTeams() {
  const westDiv = document.querySelector("#southwest");

  westDiv.addEventListener("click", () => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) =>  {
        const div = document.querySelector(".card");
      div.replaceChildren();
        data.filter((team) => {
          if (team.division === "Southwest") {
            createTeamImage(team);
          }
        })
  });
  });
}

function centralDivisionTeams() {
  const centralDiv = document.querySelector("#central");

  centralDiv.addEventListener("click", () => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => {
        const div = document.querySelector(".card");
        div.replaceChildren();
        data.filter((team) => {
          if (team.division === "Central") {
            console.log(team);
            createTeamImage(team);
          }
        })
       } );
  });
}

// function addTeam(){
//   const form = document.querySelector(".form")
//   form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     fetch("http://localhost:3000/data", {
//       method:"POST",
//       header:
//       {
//         "Content-Type": "application/json",
//         Accept:"application/json"
//       },
//       body:JSON.stringify({
//         const formData = Object.fromEntries(new FormData(event.target))
//       })
//     })
//     .then((response) => response.json())
//     .then((data) =>
//   })
// }
