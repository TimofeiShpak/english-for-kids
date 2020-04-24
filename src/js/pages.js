import cards from "./cards.js";
import { cardsPlay, removeStars, checkIsGame } from "./play.js";
import { statistic, hideStatistics } from "./statistics.js";

const unuseElement = ["list-menu", "list-menu list-menu-label", "page-link statistics active-link"];

let pageCards = [];
document.querySelectorAll(".card").forEach((card) => {
  pageCards.push(card);
});

export default pageCards;

let pageLinks = [];
document.querySelectorAll(".page-link").forEach((card) => {
  pageLinks.push(card);
});
let page = "Main Page";
let numberPages = {};
for (let i = 0; i < 9; i += 1) {
  numberPages[cards[0][i]] = i;
}

let rotateButtons = [];
export function addRotate() {
  for (let i = 0; i < pageCards.length; i += 1) {
    let buttonRotate = document.createElement("div");
    rotateButtons.push(buttonRotate);
    buttonRotate.classList.add("button-rotate");
    pageCards[i].append(buttonRotate);
  }
}

export function removeRotate() {
  for (let i = 0; i < rotateButtons.length; i += 1) {
    rotateButtons[i].remove();
  }
}

export function writeText() {
  for (let i = 0; i < pageCards.length; i += 1) {
    pageCards[i].childNodes[2].textContent = cards[numberPages[page]][i].word;
  }
}

export function numberPage() {
  return numberPages[page];
}

export function soundClick(adress) {
  let audio = new Audio(); // Создаём новый элемент Audio
  audio.src = adress; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

function changeCardsForMainPage() {
  document.querySelectorAll(".card").forEach((item) => {
    let styles = item.style;
    item.classList.remove("card-game");
    styles.backgroundImage = "";
  });
  document.querySelectorAll("img").forEach((item) => {
    let styles = item.style;
    styles.display = "block";
  });
  removeRotate();
}

function drawMainPage() {
  for (let i = 0; i < pageCards.length; i += 1) {
    pageCards[i].childNodes[2].textContent = cards[numberPages[page]][i + 1];
  }
}

function MainPage() {
  changeCardsForMainPage();
  drawMainPage();
}

function playPages() {
  if (rotateButtons[0]) {
    removeRotate();
  }
  if (!switch1.checked) {
    addRotate();
  }
  let numberCards = -1;
  document.querySelectorAll(".card").forEach((item) => {
    let styles = item.style;
    numberCards += 1;
    styles.background = `url(${cards[numberPages[page]][numberCards].image})`;
    item.classList.add("card-game");
  });
  writeText();
  for (let i = 0; i < pageCards.length; i += 1) {
    document.querySelectorAll("img").forEach((item) => {
      let styles = item.style;
      styles.display = "none";
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
  for (let i = 0; i < pageCards.length; i += 1) {
    pageCards[i].classList.remove("cardPlay");
  }
}

function addBackgroundCard() {
  if (switch1.checked) {
    for (let i = 0; i < pageCards.length; i += 1) {
      pageCards[i].classList.add("cardPlay");
    }
  }
}

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
    } else if (nameClass === "page-link statistics active-link") {
      statistic();
    }
  });
}

export function activeCardLinks() {
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

export function activeCards() {
  pageCards.forEach((item) => {
    item.addEventListener("click", (card) => {
      let isGame = checkIsGame();
      let position = pageCards.indexOf(card.target, 0);
      let pageNumber = numberPage();
      let cardClassName = card.target.className;
      if (pageNumber > 0 && cardClassName !== "button-rotate" && !isGame) {
        soundClick(cards[pageNumber][position].audioSrc);
      }
    });
  });
}
