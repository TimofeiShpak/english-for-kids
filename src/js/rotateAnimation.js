import { cardsPage, numberPage } from "./pages";
import cards from "./cards.js";

let position = 0;
let pageNumber = 0;

export function soundClick(adress) {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = adress; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}

function rotateFromFront(item){
    let degress = 0;
    setInterval( () => {
        if(degress<360){
            if(degress === 90){
                item.childNodes[2].textContent = cards[pageNumber][position].translation;
                degress = 270;
                item.childNodes[3].classList.add("hide");
            }
            degress+=5;
            item.style.transform=`rotateY(${degress}deg)`;
            item.classList.add("animation-rotate");
        }
    },10);
}

export function animationRotate() {
    document.querySelector(".container").addEventListener("click", (item) => {
        let elementClass = item.target.className;
        if(elementClass === "button-rotate") {
            position = cardsPage.indexOf(item.target.parentElement, 0);
            pageNumber = numberPage();
            soundClick(cards[pageNumber][position].audioSrc);
            rotateFromFront(item.target.parentElement);
        }
    });
}

function rotateFromBack(item){
    let degress = 360;
    let interval = setInterval( () => {
        if(degress>0){
            if(degress === 270){
                item.childNodes[2].textContent = cards[pageNumber][position].word;
                degress = 90;
                item.childNodes[3].classList.remove("hide");
            }
            degress-=5;
            item.style.transform=`rotateY(${degress}deg)`;
        } else {
            clearInterval(interval);
            item.style.transform="";
        }
    },10);
}

export function animationNotrotate() {
    document.querySelector(".container").addEventListener("mouseout", (item) => {
        let elementClass = item.target.className;
        if(elementClass === "card card-game animation-rotate") {
            item.target.classList.remove("animation-rotate");
            rotateFromBack(item.target);
        }
    });
}
