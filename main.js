document.addEventListener("DOMContentLoaded", (e) => {
  //display all teams logo
  fetch("http://localhost:3000/data")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((team) => {
        createTeamLogo(team);
      });
    });

  pacificDivisionTeams();
  centralDivisionTeams();
  southwestDivisionTeams();
  southeastDivisionTeams();
  atlanticDivisionTeams();

  const form = document.querySelector(".form");

  //Http post request to create new team logo
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    addNewTeam(formData);
    e.target.reset();
    
  });
  
  

  // this function adds new team logo and add it to the db.json
  function addNewTeam(newTeam) {
    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...newTeam,
      }),
    })
      .then((res) => res.json())
      .then((team) => createTeamLogo(team));
  }
  //this function create card for every team logo and update db.json file
  function createTeamLogo(team) {
    let card = document.createElement("li");
    card.className = "card";
    card.innerHTML = `
                      <div class="team">
                      <h1><b>Team Details</b></h2>
                      <br>
                      <br>
                      <img id="logo" src="${team.img}" width=200px height=200px/>
                      
                  
                      <p><strong>Name: ${team.name}</strong></p>
                      <p><strong>Full Name: ${team.fullname}</strong></p>
                      <p><strong>Abbreviation: ${team.abbreviation}</strong></p>
                      <p><strong>City: ${team.city}</strong></p>
                      <p><strong>Conference: ${team.conference}</strong></p>
                  
                      <p><strong>Division: ${team.division}</strong></p>
                      <button id="deleteBtn">Delete</button>
                      <p>
                      <span class="fa fa-star "></span>
                      <span class="fa fa-star "></span>
                      <span class="fa fa-star "></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      </p>
                      </div>`;

    document.querySelector("#team-log").appendChild(card);

    //create a click event listener
    card.querySelector("#deleteBtn").addEventListener("click", () => {
      card.remove();
      removeTeamCard(team.id);
    });
    //delete record from db.json
    function removeTeamCard(id) {
      fetch(`http://localhost:3000/data/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    }
    const rating = document.querySelectorAll("span");

    // display team rating stars
    rating.forEach((rating) =>
      rating.addEventListener("click", () => {
        rating.className = "fa fa-star checked";
      })
    );
  }
  //this function filter team log based on the division value
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
              createTeamLogo(team);
            }
          });
        });
    });
  }
  //this function filter team log based on the division value
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
              createTeamLogo(team);
            }
          });
        });
    });
  }
  //this function filter team log based on the division value
  function southeastDivisionTeams() {
    const southeastDiv = document.querySelector("#southeast");

    southeastDiv.addEventListener("click", () => {
      fetch("http://localhost:3000/data")
        .then((response) => response.json())
        .then((data) => {
          const div = document.querySelector(".card");
          div.replaceChildren();
          data.filter((team) => {
            if (team.division === "Southeast") {
              createTeamLogo(team);
            }
          });
        });
    });
  }
  //this function filter team log based on the division value
  function southwestDivisionTeams() {
    const westDiv = document.querySelector("#southwest");

    westDiv.addEventListener("click", () => {
      fetch("http://localhost:3000/data")
        .then((response) => response.json())
        .then((data) => {
          const div = document.querySelector(".card");
          div.replaceChildren();
          data.filter((team) => {
            if (team.division === "Southwest") {
              createTeamLogo(team);
            }
          });
        });
    });
  }
  //this function filter team log based on the division value
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
              createTeamLogo(team);
            }
          });
        });
    });
  }
});
