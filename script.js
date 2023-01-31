"use strict";
let movies;
let filter = "all";
const file = "actors.json";

const filterBtn = document.querySelectorAll("nav button");
filterBtn.forEach((button) => button.addEventListener("click", filterMovies));

document.querySelector(".luk").addEventListener("click", () => (popup.style.display = "none"));

async function getdata(file) {
  const result = await fetch(file);
  movies = await result.json();
  showMovies();
}

function filterMovies() {
  filter = this.dataset.category;
  document.querySelector(".clicked").classList.remove("clicked");
  this.classList.add("clicked");
  showMovies();
}

// Loads the json file and displays the data according to the parameters in the file
function showMovies() {
  const container = document.querySelector("main");
  const template = document.querySelector("template").content;
  movies.forEach((movie) => {
    console.log(movie);
    if (filter == movie.category || filter == "all") {
      const clone = template.cloneNode(true);
      clone.querySelector(".actor").textContent = movie.fullname;
      clone.querySelector(".movie").textContent = movie.movie;
      clone.querySelector("article").addEventListener("click", () => showDetails(movie));
      container.appendChild(clone);
    }
  });
}

// Runs the function when clicking an actor and displays the popup
function showDetails(actor) {
  console.log(actor);
  popup.style.display = "block";
  document.querySelector(".popup_navn").textContent = actor.fullname;
  document.querySelector(".popup_film").textContent = actor.movie;
}

getdata(file);
