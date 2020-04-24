import pageCards, { numberPage } from "./pages";
import cards from "./cards.js";

let degrees = 0;
let additionDegrees = 0;
let pageNumber = 0;
let position = 0;

function rotateFromFront(item) {
  degrees = 10;
  let text = item.childNodes[2];
  let styles = item.style;
  let interval = setInterval(() => {
    if (degrees < 180 && degrees > 0) {
      if (degrees === 90) {
        text.textContent = cards[pageNumber][position].translation;
        additionDegrees = 180;
        item.childNodes[3].classList.add("hide");
      }
      degrees += 5;
      styles.transform = `rotateY(${degrees + additionDegrees}deg)`;
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
      position = pageCards.indexOf(item.target.parentElement, 0);
      pageNumber = numberPage();
      rotateFromFront(item.target.parentElement);
    }
  });
}

function rotateFromBack(item) {
  let text = item.childNodes[2];
  let styles = item.style;
  let interval = setInterval(() => {
    if (degrees > 0) {
      if (degrees <= 90) {
        text.textContent = cards[pageNumber][position].word;
        additionDegrees = 0;
        item.childNodes[3].classList.remove("hide");
      }
      degrees -= 8;
      styles.transform = `rotateY(${degrees + additionDegrees}deg)`;
    } else {
      clearInterval(interval);
      styles.transform = "";
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
      for (let i = 0; i < pageCards.length; i += 1) {
        removeRotate(pageCards[i]);
      }
    }
  });
}
