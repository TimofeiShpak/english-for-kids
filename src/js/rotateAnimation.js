import { cardsPage, numberPage } from "./pages";
import cards from "./cards.js";

let position = 0;
let pageNumber = 0;

export function soundClick(adress) {
  let audio = new Audio(); // Создаём новый элемент Audio
  audio.src = adress; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

let degress = 0;
let additionDegress = 0;

function rotateFromFront(item) {
  degress = 10;
  let interval = setInterval(() => {
    if (degress < 180 && degress > 0) {
      if (degress === 90) {
        item.childNodes[2].textContent = cards[pageNumber][position].translation;
        additionDegress = 180;
        item.childNodes[3].classList.add("hide");
      }
      degress += 5;
      item.style.transform = `rotateY(${degress + additionDegress}deg)`;
      item.classList.add("animation-rotate");
    } else {
      clearInterval(interval);
    }
  }, 10);
}

export function animationRotate() {
  document.querySelector(".container").addEventListener("click", (item) => {
    let elementClass = item.target.className;
    if (elementClass === "button-rotate") {
      position = cardsPage.indexOf(item.target.parentElement, 0);
      pageNumber = numberPage();
      soundClick(cards[pageNumber][position].audioSrc);
      rotateFromFront(item.target.parentElement);
    }
  });
}

function rotateFromBack(item) {
  let interval = setInterval(() => {
    if (degress > 0) {
      if (degress <= 90) {
        item.childNodes[2].textContent = cards[pageNumber][position].word;
        additionDegress = 0;
        item.childNodes[3].classList.remove("hide");
      }
      degress -= 8;
      item.style.transform = `rotateY(${degress + additionDegress}deg)`;
    } else {
      clearInterval(interval);
      item.style.transform = "";
    }
  }, 10);
}

function removeRotate(item) {
  if (item.className === "card card-game animation-rotate") {
    item.classList.remove("animation-rotate");
    rotateFromBack(item);
  }
}

export function animationCheckRotate() {
  document.querySelector(".container").addEventListener("mousemove", (item) => {
    let elementClass = item.target.className;
    if (elementClass !== "card card-game animation-rotate") {
      for (let i = 0; i < cardsPage.length; i++) {
        removeRotate(cardsPage[i]);
      }
    }
  });
}
