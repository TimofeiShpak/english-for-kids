import { numberPage, changePage } from "./pages.js";
import { cardsPlay } from "./play.js";

let page = 0;
function addStyles() {
  label1.innerText = "Play";
  label1.classList.add("labelPlay");
  listMenu.classList.add("list-menu-label");
  if (page < 1) {
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.add("cardPlay");
    });
  }
}

function removeStyles() {
  if (page < 1) {
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("cardPlay");
    });
  }
  label1.classList.remove("labelPlay");
  label1.innerText = "Train";
  listMenu.classList.remove("list-menu-label");
}

export function switchLabel() {
  switch1.addEventListener("click", () => {
    changePage();
    page = numberPage();
    if (page > 0) {
      cardsPlay();
    }
    if (switch1.checked) {
      addStyles();
    } else {
      removeStyles();
    }
  });
}
