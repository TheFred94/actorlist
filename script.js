let actors;
let filter = "all";
const actorData = "actors.json";
const header = document.querySelector("h1");

// Click event on nav which runs filterActors function when clicked
const filterBtn = document.querySelectorAll("nav button");
filterBtn.forEach((button) => button.addEventListener("click", filterActors));

// When #popup is clicked it doesn't display
document.querySelector(".close").addEventListener("click", () => (popup.style.display = "none"));

// Filters the actors and removes the class from the element and adds it to the new clicked element
function filterActors() {
  filter = this.dataset.movie;
  document.querySelector(".clicked").classList.remove("clicked");
  this.classList.add("clicked");
  header.textContent = this.textContent;
  showActors(actors);
  console.log("Actors filtered");
}

// This retrieves the data from the json file
async function getActorData() {
  console.log(actorData);
  const response = await fetch(actorData);
  actors = await response.json();
  console.log("Actors shown");
  showActors(actors);
}

// runs the showActors function from the getActorData function
function showActors(actors) {
  const container = document.querySelector("main");
  const template = document.querySelector("template").content;
  container.textContent = "";
  console.log("content removed");
  actors.forEach((actor) => {
    if (filter == actor.movie || filter == "all") {
      console.log("Actor data");
      const clone = template.cloneNode(true);
      clone.querySelector(".actor_name").textContent = actor.fullname;
      clone.querySelector(".movie_name").textContent = actor.movie;
      clone.querySelector("article").addEventListener("click", () => showActorDetails(actor));
      container.appendChild(clone);
      console.log("New actors");
    }
  });
}

function showActorDetails(actor) {
  console.log(actor);
  popup.style.display = "block";
  document.querySelector(".actor_name").textContent = actor.fullname;
  document.querySelector(".movie_name").textContent = actor.movie;
}

getActorData(actorData);
