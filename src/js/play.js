import {cardsPage, writeText, numberPage } from "./pages";
import cards from "./cards";
import { soundClick } from "./rotateAnimation";
import { numberTaps, correctTaps, errorTaps } from "./statistics.js";

const MIN_TAPS = 8;

let buttonStart = document.createElement("button");
buttonStart.classList.add("button-start");
buttonStart.innerText = "Start game";
let raiting = document.createElement("div");
raiting.classList.add("raiting");
let text = document.createElement("p");
text.classList.add("text");

export function removeStars(){
    for (let i=0; i<raiting.children.length; i++){
        raiting.children[i].remove();i--;
    }
}

function addStarWin(){
    let starWin = document.createElement("div");
    starWin.classList.add("star-win");
    raiting.append(starWin);
}

function addStar(){
    let star = document.createElement("div");
    star.classList.add("star");
    raiting.append(star);
}

function cardGame(){
    for (let i=0; i<cardsPage.length; i++){
        cardsPage[i].classList.add("cardGame");
        cardsPage[i].childNodes[2].textContent = "";
        app.append(buttonStart);
        cardsContainer.prepend(raiting);
    }
}

function cardTrain(){
    writeText();
    for (let i=0; i<cardsPage.length; i++){
        cardsPage[i].classList.remove("cardGame");
        buttonStart.remove();
    }
}

export function cardsPlay() {
    if(switch1.checked) {
        cardGame();
    }else{
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
    for(let i = 0; i < cards[pageNumber].length; i++) {
        sounds.push(cards[pageNumber][i].audioSrc);
    }
}

function shuffle(arr) {
    let first = 0;
    let second = 0;
    let temp = 0;
    for(let i = 0; i < (arr.length-2); i++) {
        do {
            first = Math.floor(Math.random() * (arr.length));
            second = Math.floor(Math.random() * (arr.length));
        } while (first === second);
        temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }
}

function startGame(){
    buttonStart.classList.add("button-start-active");
    buttonStart.innerText = "Repeat";
    soundsPage();
    shuffle(sounds);
    soundClick(sounds[numberSound]);
    game=true;
}

let taps = 0;

function removeClass(){
    for (let i=0; i<cardsPage.length; i++){
        cardsPage[i].classList.remove("card-active");
        if(pageNumber<1){
            cardsPage[i].classList.remove("cardGame");
        }
    }
}

function success(){
    soundClick("./audio/success.mp3");
    text.innerText = "Win!";
    app.classList.add("win");
}

function failure(){
    text.innerText = ` Errors: ${taps - MIN_TAPS}`;
    app.classList.add("lose");
    soundClick("./audio/failure.mp3");
}

function win() {
    removeClass();
    cardsContainer.classList.add("visible");
    label.classList.add("visible");
    if(taps>MIN_TAPS) {
        failure();
    } else {
        success();
    }
    header.after(text);
    setTimeout( () => {
        cardsContainer.classList.remove("visible");
        label.classList.remove("visible");
        app.classList.remove("win");
        app.classList.remove("lose");
        text.remove();
        mainPage.click();
    }, 2000);
}

function checkWin(){
    if(numberSound>7) {
        setTimeout( ()=>{
            win();
        },500);
    } else {
        setTimeout( ()=>{
            soundClick(sounds[numberSound]);
        },500);
    }
}

function correctCard(item){
    correctTaps(cards[pageNumber][position]["word"]);
    soundClick("./audio/correct.mp3");
    item.target.classList.add("card-active");
    addStarWin();
    numberSound++;
}

function validationCard(item){
    position = cardsPage.indexOf(item.target, 0);
    let tapCard = cards[pageNumber][position]["audioSrc"];
    numberTaps(cards[pageNumber][position]["word"]);
    let sound = sounds[numberSound];
    if (numberSound < 8) {
        if (tapCard === sound) {
            correctCard(item);
        } else {
            errorTaps(cards[pageNumber][position]["word"]);
            soundClick("./audio/error.mp3");
            addStar();
        }
    }
}

function tapCard() {
    document.querySelector(".container").addEventListener("click", (item) => {
        if(game) {
            let elementClass = item.target.className;
            if (elementClass.includes("cardGame") && !elementClass.includes("card-active")) {
                taps++;
                validationCard(item);
                checkWin();
            }
        }
    });
}

export function Game() {
    buttonStart.addEventListener("click", () => {
        if(!game){
            startGame();
        } else {
            soundClick(sounds[numberSound]);
        }
    });
    tapCard();
    changePageGame();
}

function restartGame(){
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
                buttonStart.classList.add("hide");
                raiting.classList.add("hide");
            } else {
                buttonStart.classList.remove("hide");
                raiting.classList.remove("hide");
            }
            restartGame();
        }
    });
}
