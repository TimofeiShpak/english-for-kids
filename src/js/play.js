import pageCards, { writeText, numberPage, soundClick } from "./pages.js";
import cards from "./cards";
import {
  numberTaps, correctTaps, errorTaps, addStyle, removeStyle,
} from "./statistics.js";
import { isListMenu } from "./menu.js";

const MIN_TAPS = 8;
const LAST_CARD = 7;
const PENULTIMATE_CARD = 5;

export function create(tag, nameClass, text, parentElement) {
  let item = document.createElement(tag);
  item.classList.add(nameClass);
  if (text) {
    item.innerText = text;
  }
  if (parentElement) {
    parentElement.append(item);
  }
  return item;
}

let buttonStart = create("button", "button-start", "Start game");
let raiting = create("div", "raiting");
let text = create("p", "text");
let taps = 0;
let time = 500;
let isGameActive = false;
let pageNumber = 0;
let sounds = [];
let numberSound = 0;
let position = 0;

export function removeStars() {
  for (let i = 0; i < raiting.children.length; i += 1) {
    raiting.children[i].remove(); i -= 1;
  }
}

function addStarWin() {
  create("div", "star-win", null, raiting);
}

function addStar() {
  create("div", "star", null, raiting);
}

function cardGame() {
  for (let i = 0; i < pageCards.length; i += 1) {
    pageCards[i].classList.add("cardGame");
    pageCards[i].childNodes[2].textContent = "";
    app.append(buttonStart);
    cardsContainer.prepend(raiting);
  }
}

function cardTrain() {
  writeText();
  for (let i = 0; i < pageCards.length; i += 1) {
    pageCards[i].classList.remove("cardGame");
    buttonStart.remove();
  }
}

export function cardsPlay() {
  if (switch1.checked) {
    cardGame();
  } else {
    cardTrain();
  }
}

function soundsPage() {
  pageNumber = numberPage();
  for (let i = 0; i < cards[pageNumber].length; i += 1) {
    sounds.push(cards[pageNumber][i].audioSrc);
  }
}

function shuffle(array) {
  let arr = array;
  let first = 0;
  let second = 0;
  let temp = 0;
  for (let i = 0; i < (arr.length - 2); i += 1) {
    do {
      first = Math.floor(Math.random() * (arr.length));
      second = Math.floor(Math.random() * (arr.length));
    } while (first === second);
    temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
}

function startGame() {
  buttonStart.classList.add("button-start-active");
  buttonStart.innerText = "Repeat";
  soundsPage();
  shuffle(sounds);
  soundClick(sounds[numberSound]);
  isGameActive = true;
}

function disableCard() {
  for (let i = 0; i < pageCards.length; i += 1) {
    pageCards[i].classList.remove("card-active");
    if (pageNumber < 1) {
      pageCards[i].classList.remove("cardGame");
    }
  }
}

function success() {
  soundClick("./audio/success.mp3");
  text.innerText = "Win!";
  app.classList.add("win");
}

function failure() {
  text.innerText = ` Errors: ${taps - MIN_TAPS}`;
  app.classList.add("lose");
  soundClick("./audio/failure.mp3");
}

function win() {
  disableCard();
  addStyle(cardsContainer, label, buttonStart);
  if (taps > MIN_TAPS) {
    failure();
  } else {
    success();
  }
  header.after(text);
  setTimeout(() => {
    removeStyle(cardsContainer, label, buttonStart);
    app.classList.remove("win");
    app.classList.remove("lose");
    text.remove();
    mainPage.click();
  }, 2000);
}

function checkWin() {
  if (numberSound > LAST_CARD) {
    setTimeout(() => {
      win();
    }, 500);
  } else {
    setTimeout(() => {
      if (numberSound > PENULTIMATE_CARD) {
        time = 0;
      } else {
        time = 500;
      }
      soundClick(sounds[numberSound]);
    }, time);
  }
}

function correctCard(item) {
  correctTaps(cards[pageNumber][position].word);
  soundClick("./audio/correct.mp3");
  item.target.classList.add("card-active");
  addStarWin();
  numberSound += 1;
}

function errorCard() {
  errorTaps(cards[pageNumber][position].word);
  soundClick("./audio/error.mp3");
  addStar();
}

function validationCard(item) {
  position = pageCards.indexOf(item.target, 0);
  let cardTap = cards[pageNumber][position].audioSrc;
  numberTaps(cards[pageNumber][position].word);
  let sound = sounds[numberSound];
  if (numberSound < 8) {
    if (cardTap === sound) {
      correctCard(item);
    } else {
      errorCard();
    }
  }
}

function tapCard() {
  document.querySelector(".container").addEventListener("click", (item) => {
    if (isGameActive) {
      let elementClass = item.target.className;
      if (elementClass.includes("cardGame") && !elementClass.includes("card-active")) {
        taps += 1;
        validationCard(item);
        checkWin();
      }
    }
  });
}

function restartGame() {
  numberSound = 0;
  isGameActive = false;
  buttonStart.classList.remove("button-start-active");
  buttonStart.innerText = "Start game";
  sounds.length = 0;
  taps = 0;
  disableCard();
}

function changePageGame() {
  listMenu.addEventListener("click", (item) => {
    let nameClass = item.target.className;
    if (!isListMenu.includes(nameClass)) {
      pageNumber = numberPage();
      if (pageNumber < 1 || item.target.innerText === "Statistics") {
        addStyle(buttonStart, raiting);
      } else {
        removeStyle(buttonStart, raiting);
      }
      restartGame();
    }
  });
}

export function checkIsGame() {
  return isGameActive === true;
}

export function Game() {
  buttonStart.addEventListener("click", () => {
    if (!isGameActive) {
      startGame();
    } else {
      soundClick(sounds[numberSound]);
    }
  });
  tapCard();
  changePageGame();
}
