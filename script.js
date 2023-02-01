let actors;
let filter = "all";
const = 
const header = document.querySelector("h1");

// Click event on nav which runs filterActors function when clicked
const filterBtn = document.querySelectorAll("nav button");
filterBtn.forEach((button) => button.addEventListener("click", filterActors));

// When #popup is clicked it doesn't display
document.querySelector(".close").addEventListener("click", () => (popup.style.display = "none"));

// Filters the actors and removes the class from the element and adds it to the new clicked element
function filterActors() {
  filter = this.dataset.category;
  document.querySelector(".clicked").classList.remove("clicked");
  this.classList.add("clicked");
  showActors()
}

// Targets the "main" tag in the DOM
const main = document.querySelector("main");

// This retrieves the data from the json file
async function getActorData() {
const response = await fetch

}