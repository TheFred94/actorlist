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
    container.appendChild(clone);
  });
}

getdata(file);
