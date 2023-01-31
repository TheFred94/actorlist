"use strict";

const file = "actors.json";

async function getdata(file) {
  const result = await fetch(file);
  const json = await result.json();
  show(json);
}

document.querySelector(".luk").addEventListener("click", () => (popup.style.display = "none"));

// Loads the json file and displays the data according to the parameters in the file
function show(json) {
  console.log(json);
  const container = document.querySelector("main");
  const template = document.querySelector("template");
  json.forEach((actor) => {
    const clone = template.cloneNode(true).content;
    clone.querySelector(".actor").textContent = actor.fullname;
    clone.querySelector(".movie").textContent = actor.movie;
    clone.querySelector("article").addEventListener("click", () => showDetails(actor));
    container.appendChild(clone);
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
