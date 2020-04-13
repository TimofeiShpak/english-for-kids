import cards from "./cards.js";

let pageCards = [];
document.querySelectorAll(".card").forEach((card) => {
  pageCards.push(card);
});
let page = "Main Page";
let numberPages = {};
for (let i = 0; i < 9; i++) {
  numberPages[cards[0][i]] = i;
}

function changePage() {
  if (page === "Main Page") {
    document.querySelectorAll(".card").forEach((item) => {
      item.classList.remove("card-game");
      item.style.backgroundImage = "";
    });
    document.querySelectorAll("img").forEach((item) => {
      item.style.display = "block";
    });
    for (let i = 0; i < pageCards.length; i++) {
      pageCards[i].lastChild.textContent = cards[numberPages[page]][i + 1];
    }
  } else {
    let numberCards = 0;
    document.querySelectorAll(".card").forEach((item) => {
      item.classList.add("card-game");
      item.style.backgroundImage = `url(\"${cards[numberPages[page]][numberCards++].image}\")`;
    });
    for (let i = 0; i < pageCards.length; i++) {
      pageCards[i].lastChild.textContent = cards[numberPages[page]][i].word;
      document.querySelectorAll("img").forEach((item) => {
        item.style.display = "none";
      });
    }
  }
}

export function moveLink() {
  listMenu.addEventListener("click", (item) => {
    let nameClass = item.target.className;
    if (nameClass !== "list-menu" && nameClass !== "list-menu list-menu-label") {
      page = item.target.innerText;
      changePage();
    }
  });
}

export function numberPage() {
  return numberPages[page];
}
