export function switchLabel() {
  switch1.addEventListener("click", () => {
    if (switch1.checked) {
      label1.innerText = "Play";
      label1.classList.add("labelPlay");
      listMenu.classList.add("list-menu-label");
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.add("cardPlay");
      });
    } else {
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("cardPlay");
      });
      label1.classList.remove("labelPlay");
      label1.innerText = "Train";
      listMenu.classList.remove("list-menu-label");
    }
  });
}
