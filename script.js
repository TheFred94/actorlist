"use strict";

const file = "actors.json";

async function getdata(file) {
  const result = await fetch(file);
  const json = await result.json();
  show(json);
}

function show(json) {
  console.log(json);
  const container = document.querySelector("main");
  const template = document.querySelector("template");
  json.forEach((actor) => {
    const clone = template.cloneNode(true).content;
    clone.querySelector(".actor").textContent = actor.fullname;
    clone.querySelector("article").addEventListener("click", () => showDetails(actor));
    container.appendChild(clone);
  });
}

function showDetails(actor) {
  console.log(actor);
  popup.style.display = "block";
  document.querySelector(".popup_navn").textContent = actor.fullname;
  document.querySelector(".popup_film").textContent = actor.movie;
}

getdata(file);
