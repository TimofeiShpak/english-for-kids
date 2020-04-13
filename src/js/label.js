import {numberPage} from "./pages.js"

export function switchLabel() {
  switch1.addEventListener("click", () => {
    let page = numberPage();
    if (switch1.checked) {
      label1.innerText = "Play";
      label1.classList.add("labelPlay");
      listMenu.classList.add("list-menu-label");
      if (page < 1) {
        document.querySelectorAll(".card").forEach((card) => {
          card.classList.add("cardPlay");
        });
      }
    } else {
      if (page < 1) {
        document.querySelectorAll(".card").forEach((card) => {
          card.classList.remove("cardPlay");
        });
      }
      label1.classList.remove("labelPlay");
      label1.innerText = "Train";
      listMenu.classList.remove("list-menu-label");
    }
  });
}
