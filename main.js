document.addEventListener("DOMContentLoaded", (e) => {
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

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    addNewTeam(formData);
  });

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

  function createTeamLogo(team) {
    let card = document.createElement("li");
    card.className = "card";
    card.innerHTML = `
                      <div class="team">
                      <h1><b>Team Details</b></h2>
                      <img id="logo" src="${team.img}" width=200px height=200px/>
                      
                  
                      <p>Name: ${team.name}</p>
                      <p>Full Name: ${team.fullname}</p>
                      <p>Abbreviation: ${team.abbreviation}</p>
                      <p>City: ${team.city}</p>
                      <p>Conference: ${team.conference}</p>
                  
                      <p>Division: ${team.division}</p>
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

    card.querySelector("#deleteBtn").addEventListener("click", () => {
      card.remove();
      removeTeamCard(team.id);
    });
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
    
    rating.forEach((rating) =>
      rating.addEventListener("click", () => {
        rating.className = "fa fa-star checked";
      })
    );
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
              createTeamLogo(team);
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
              createTeamLogo(team);
            }
          });
        });
    });
  }
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
