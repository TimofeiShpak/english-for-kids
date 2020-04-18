import cards from "./cards.js";
import { cardsPlay, removeStars } from "./play.js";
import { statistic, hideStatistics } from "./statistics.js";

let pageCards = [];
document.querySelectorAll(".card").forEach((card) => {
  pageCards.push(card);
});

export let cardsPage = pageCards;

let pageLinks = [];
document.querySelectorAll(".page-link").forEach((card) => {
  pageLinks.push(card);
});
let page = "Main Page";
let numberPages = {};
for (let i = 0; i < 9; i++) {
  numberPages[cards[0][i]] = i;
}

let rotateButtons = [];
export function addRotate() {
  for (let i = 0; i < pageCards.length; i++) {
    let buttonRotate = document.createElement("div");
    rotateButtons.push(buttonRotate);
    buttonRotate.classList.add("button-rotate");
    pageCards[i].append(buttonRotate);
  }
}

export function removeRotate() {
  for (let i = 0; i < rotateButtons.length; i++) {
    rotateButtons[i].remove();
  }
}

export function writeText() {
  for (let i = 0; i < pageCards.length; i++) {
    pageCards[i].childNodes[2].textContent = cards[numberPages[page]][i].word;
  }
}

function MainPage() {
  removeRotate();
  document.querySelectorAll(".card").forEach((item) => {
    item.classList.remove("card-game");
    item.style.backgroundImage = "";
  });
  document.querySelectorAll("img").forEach((item) => {
    item.style.display = "block";
  });
  for (let i = 0; i < pageCards.length; i++) {
    pageCards[i].childNodes[2].textContent = cards[numberPages[page]][i + 1];
  }
}

function playPages() {
  if (rotateButtons[0]) {
    removeRotate();
  }
  if (!switch1.checked) {
    addRotate();
  }
  let numberCards = 0;
  document.querySelectorAll(".card").forEach((item) => {
    item.style.background = `url(\"${cards[numberPages[page]][numberCards++].image}\")`;
    item.classList.add("card-game");
  });
  writeText();
  for (let i = 0; i < pageCards.length; i++) {
    document.querySelectorAll("img").forEach((item) => {
      item.style.display = "none";
    });
  }
}

export function changePage() {
  hideStatistics();
  if (page === "Main Page") {
    MainPage();
  } else {
    playPages();
  }
}

function removeBackgroundCard() {
  for (let i = 0; i < pageCards.length; i++) {
    pageCards[i].classList.remove("cardPlay");
  }
}

function addBackgroundCard() {
  if (switch1.checked) {
    for (let i = 0; i < pageCards.length; i++) {
      pageCards[i].classList.add("cardPlay");
    }
  }
}

let unuseElement = ["list-menu", "list-menu list-menu-label", "page-link statistics active-link"];

export function moveLink() {
  listMenu.addEventListener("click", (item) => {
    let nameClass = item.target.className;
    if (!unuseElement.includes(nameClass)) {
      removeStars();
      page = item.target.innerText;
      changePage();
      if (numberPages[page] > 0) {
        removeBackgroundCard();
        cardsPlay();
      } else {
        addBackgroundCard();
      }
    } else {
      statistic();
    }
  });
}

export function numberPage() {
  return numberPages[page];
}

export function activeCard() {
  cardsContainer.addEventListener("click", (item) => {
    let itemNode = item.target.nodeName;
    let text = "";
    let pageNumber = numberPage();
    if (itemNode === "IMG") {
      text = item.target.parentElement.innerText;
    } else {
      text = item.target.innerText;
    }
    if (pageNumber < 1) {
      let nameClass = item.target.className;
      if (nameClass !== "container") {
        page = text;
        pageNumber = numberPage();
        pageLinks[pageNumber].click();
      }
    }
  });
}
