import cards from "./cards.js";

const MAX_WORDS_DIFFICULT = 8;

function create(tag, nameClass, text, parentElement) {
    let item = document.createElement(tag);
    item.classList.add(nameClass);
    if(text) {
        item.innerText = text;
    }
    if(parentElement) {
        parentElement.append(item);
    }
    return item;
}

let nameStatistics = create("p", "name-statistics", "statistics of game", app);
let reset = create("button", "reset", "reset", app);
let newPage = create("button","reset", "repeat difficult words", app);
newPage.classList.add("repeat");
let statistics = create("div", "statistic", null, app);
let sections = create("p", "word", null, statistics);
sections.classList.add("cursor");
create("b", "word-text", "word↑↓", sections);
create("b", "translation", "translation↑↓", sections);
create("b", "clicks", "clicks↑↓", sections);
create("b", "correct", "correct↑↓", sections);
create("b", "error", "error↑↓", sections);
create("b", "percent", "%↑↓", sections);

let typesSection = [];
for (let i = 0; i<sections.children.length; i++) {
    typesSection.push(sections.children[i]);
}

let words = {};
if(localStorage.user) {
    words = JSON.parse(localStorage.user);
}

let statiticsWords = [];

export function createStatistic() {
    for(let i=1;i<cards.length; i++) {
        let column = create("div", "column", null, statistics);
        for(let j=0; j<cards[i].length; j++) {
            let text = create("p", "word", null, column);
            create("b", "word-text", cards[i][j].word, text);
            create("b", "translation", cards[i][j].translation, text);
            create("b", "clicks", "0", text);
            create("b", "correct", "0", text);
            create("b", "error", "0", text);
            create("b", "percent", "0", text);
            statiticsWords.push(text);
        }
    }
}

export function resetButton(){
    reset.addEventListener("click", ()=>{
        newPage().click();
       for (let key in words){
           words[`${key}`]["number"]=0;
           words[`${key}`]["correct"]=0;
           words[`${key}`]["error"]=0;
       }
        statisticPage.click();
    });
}

export function numberTaps(item) {
    if(words[`${item}`] === undefined) {
        words[`${item}`] = {};
        words[`${item}`]["number"]=0;
        words[`${item}`]["correct"]=0;
        words[`${item}`]["error"]=0;
    }
    words[`${item}`]["number"]++;
}

export function correctTaps(item) {
    words[`${item}`]["correct"]++;
}

export function errorTaps(item) {
    words[`${item}`]["error"]++;
}

function changeStatistic() {
    for (let i=0; i < statiticsWords.length; i++) {
        let key = `${statiticsWords[i].children[0].innerText}`;
        if(words[key] === undefined) {
            words[key] = {};
            words[key]["number"]=0;
            words[key]["correct"]=0;
            words[key]["error"]=0;
        }
        statiticsWords[i].children[2].innerText = words[key]["number"];
        statiticsWords[i].children[3].innerText = words[key]["correct"];
        statiticsWords[i].children[4].innerText = words[key]["error"];
        if(words[key]["number"]) {
            let persent = Math.round(words[key]["error"] / words[key]["number"] * 100);
            statiticsWords[i].children[5].innerText = persent;
        } else {
            statiticsWords[i].children[5].innerText = "0";
        }
    }
}

let checkSort = false;

statistics.addEventListener("click", (item) => {
    let className = item.target.parentElement.className;
    if(className === "word cursor") {
        let position = typesSection.indexOf(item.target);
        if (position + 1) {
            let times = 0;
            while (times < 3) {
                times++;
                sortStatistic(position);
            }
        }
        if (checkSort) {
            item.target.innerText = item.target.innerText.slice(0, -1) + "↓";
        } else {
            item.target.innerText = item.target.innerText.slice(0, -1) + "↑";
        }
        checkSort = !checkSort;
    }
});

let checkNewPage = false;

newPage.addEventListener("click", ()=>{
    checkNewPage = !checkNewPage;
    if(checkNewPage) {
        newPage.innerText = "come back";
        for (let i = MAX_WORDS_DIFFICULT; i < statiticsWords.length; i++) {
            statiticsWords[i].classList.add("hide");
        }
        for (let i = 0; i < MAX_WORDS_DIFFICULT; i++) {
            console.log(statiticsWords[i].children[2].innerText);
            if (statiticsWords[i].children[2].innerText === "0") {
                statiticsWords[i].classList.add("hide");
            }
        }
    } else{
        newPage.innerText = "repeat difficult words";
        for (let i = 0; i < statiticsWords.length; i++) {
            statiticsWords[i].classList.remove("hide");
        }
    }
});

function check(first, second){
    if(checkSort) {
        return first.innerText > second.innerText;
    } else {
        return first.innerText < second.innerText;
    }
}

function sortStatistic(index) {
    statiticsWords.sort( (first, second) => {
            if (check(first.children[index], second.children[index])) {
                second.after(first);
                return 1;
            }   else {
                first.after(second);
                return -1;
            }
    });
}

function addStyle(...args){
    for (let arg of args) {
        arg.classList.add("hide");
    }
}

function removeStyle(...args){
    for (let arg of args) {
        arg.classList.remove("hide");
    }
}

export function statistic() {
    changeStatistic();
    localStorage.user = JSON.stringify(words);
    addStyle(label, cardsContainer);
    removeStyle(statistics, nameStatistics, reset, newPage);
    app.classList.add("statistic-wrapper");
}

export function hideStatistics() {
    removeStyle(label, cardsContainer);
    addStyle(statistics, nameStatistics, reset, newPage);
    app.classList.remove("statistic-wrapper");
}

