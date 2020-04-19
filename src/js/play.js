import { cardsPage, writeText, numberPage } from "./pages.js";
import cards from "./cards";
import { soundClick } from "./rotateAnimation.js";
import {
  numberTaps, correctTaps, errorTaps, create, addStyle, removeStyle,
} from "./statistics.js";

const MIN_TAPS = 8;

let buttonStart = create("button", "button-start", "Start game");
let raiting = create("div", "raiting");
let text = create("p", "text");

export function removeStars() {
  for (let i = 0; i < raiting.children.length; i++) {
    raiting.children[i].remove(); i--;
  }
}

function addStarWin() {
  create("div", "star-win", null, raiting);
}

function addStar() {
  create("div", "star", null, raiting);
}

function cardGame() {
  for (let i = 0; i < cardsPage.length; i++) {
    cardsPage[i].classList.add("cardGame");
    cardsPage[i].childNodes[2].textContent = "";
    app.append(buttonStart);
    cardsContainer.prepend(raiting);
  }
}

function cardTrain() {
  writeText();
  for (let i = 0; i < cardsPage.length; i++) {
    cardsPage[i].classList.remove("cardGame");
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

let game = false;
let pageNumber = 0;
let sounds = [];
let numberSound = 0;
let position = 0;
function soundsPage() {
  pageNumber = numberPage();
  for (let i = 0; i < cards[pageNumber].length; i++) {
    sounds.push(cards[pageNumber][i].audioSrc);
  }
}

function shuffle(arr) {
  let first = 0;
  let second = 0;
  let temp = 0;
  for (let i = 0; i < (arr.length - 2); i++) {
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
  game = true;
}

let taps = 0;

function removeClass() {
  for (let i = 0; i < cardsPage.length; i++) {
    cardsPage[i].classList.remove("card-active");
    if (pageNumber < 1) {
      cardsPage[i].classList.remove("cardGame");
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
  removeClass();
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

let time = 500;
function checkWin() {
  if (numberSound > 7) {
    setTimeout(() => {
      win();
    }, 500);
  } else {
    setTimeout(() => {
      if (numberSound > 5) {
        time = 0;
      } else {
        time = 500;
      }
      console.log(time);
      soundClick(sounds[numberSound]);
    }, time);
  }
}

function correctCard(item) {
  correctTaps(cards[pageNumber][position].word);
  soundClick("./audio/correct.mp3");
  item.target.classList.add("card-active");
  addStarWin();
  numberSound++;
}

function errorCard() {
  errorTaps(cards[pageNumber][position].word);
  soundClick("./audio/error.mp3");
  addStar();
}

function validationCard(item) {
  position = cardsPage.indexOf(item.target, 0);
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
    if (game) {
      let elementClass = item.target.className;
      if (elementClass.includes("cardGame") && !elementClass.includes("card-active")) {
        taps++;
        validationCard(item);
        checkWin();
      }
    }
  });
}

function restartGame() {
  numberSound = 0;
  game = false;
  buttonStart.classList.remove("button-start-active");
  buttonStart.innerText = "Start game";
  sounds.length = 0;
  taps = 0;
  removeClass();
}

function changePageGame() {
  listMenu.addEventListener("click", (item) => {
    let nameClass = item.target.className;
    if (nameClass !== "list-menu" && nameClass !== "list-menu list-menu-label") {
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

export function Game() {
  buttonStart.addEventListener("click", () => {
    if (!game) {
      startGame();
    } else {
      soundClick(sounds[numberSound]);
    }
  });
  tapCard();
  changePageGame();
}
