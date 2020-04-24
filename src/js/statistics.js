import cards from "./cards.js";
import { create } from "./play.js";

let nameStatistics = create("p", "name-statistics", "statistics of game", app);
let reset = create("button", "reset", "reset", app);
let newPage = create("button", "reset", "repeat difficult words", app);
newPage.classList.add("repeat");
let statistics = create("div", "statistic", null, app);
let sections = create("p", "word", null, statistics);
sections.classList.add("cursor");

function createSections(args) {
  for (let i = 1; i < args.length; i += 1) {
    create("b", args[i][0], args[i][1], args[0]);
  }
}
let section = [sections, ["word-text", "word↑↓"], ["translation", "translation↑↓"], ["clicks", "clicks↑↓"],
  ["correct", "correct↑↓"], ["error", "error↑↓"]];
createSections(section);
let percent = create("b", "percent", "%↑↓", sections);

let typesSection = [];
for (let i = 0; i < sections.children.length; i += 1) {
  typesSection.push(sections.children[i]);
}

let words = {};
if (localStorage.user) {
  words = JSON.parse(localStorage.user);
}

function saveStatistics() {
  localStorage.user = JSON.stringify(words);
}

let statisticsWords = [];

let rows = [null, ["", ""], ["", ""], ["clicks", "0"],
  ["correct", "0"], ["error", "0"], ["percent", "0"]];
export function createStatistic() {
  for (let i = 1; i < cards.length; i += 1) {
    let column = create("div", "column", null, statistics);
    for (let j = 0; j < cards[i].length; j += 1) {
      let text = create("p", "word", null, column);
      rows[0] = text;
      rows[1] = ["word-text", cards[i][j].word];
      rows[2] = ["translation", cards[i][j].translation];
      createSections(rows);
      statisticsWords.push(text);
    }
  }
}

let checkNewPage = false;
function hideNewPage() {
  if (checkNewPage) {
    newPage.click();
  }
}

function changeProperties(obj) {
  let element = obj;
  element.number = 0;
  element.correct = 0;
  element.error = 0;
}

function changeStatistic() {
  for (let i = 0; i < statisticsWords.length; i += 1) {
    let key = `${statisticsWords[i].children[0].innerText}`;
    if (words[key] === undefined) {
      words[key] = {};
      changeProperties(words[key]);
    }
    statisticsWords[i].children[2].innerText = words[key].number;
    statisticsWords[i].children[3].innerText = words[key].correct;
    statisticsWords[i].children[4].innerText = words[key].error;
    if (words[key].number) {
      let percents = Math.round((words[key].error / words[key].number) * 100);
      statisticsWords[i].children[5].innerText = percents;
    } else {
      statisticsWords[i].children[5].innerText = "0";
    }
  }
}

export function resetButton() {
  reset.addEventListener("click", () => {
    for (let key in words) {
      if ({}.hasOwnProperty.call(words, key)) {
        changeProperties(words[`${key}`]);
      }
    }
    hideNewPage();
    changeStatistic();
    saveStatistics();
  });
}

export function numberTaps(item) {
  if (words[`${item}`] === undefined) {
    words[`${item}`] = {};
    changeProperties(words[`${item}`]);
  }
  words[`${item}`].number += 1;
}

export function correctTaps(item) {
  words[`${item}`].correct += 1;
}

export function errorTaps(item) {
  words[`${item}`].error += 1;
}

let checkSort = false;

function check(first, second) {
  if ((+first.innerText) + 1) {
    if (checkSort) {
      return (+first.innerText) - (+second.innerText);
    }
    return (+second.innerText) - (+first.innerText);
  }
  if (checkSort) {
    return first.innerText > second.innerText;
  }
  return first.innerText < second.innerText;
}

function sortStatistic(index) {
  statisticsWords.sort((first, second) => {
    if (check(first.children[index], second.children[index]) > 0) {
      second.after(first);
      return 1;
    } if (first.children[index].innerText === second.children[index].innerText) {
      second.after(first);
      return 0;
    }
    first.after(second);
    return -1;
  });
}

statistics.addEventListener("click", (item) => {
  let { className } = item.target.parentElement;
  if (className === "word cursor") {
    let position = typesSection.indexOf(item.target);
    if (position > -1) {
      let times = 0;
      while (times < 2) {
        times += 1;
        sortStatistic(position);
      }
    }
    checkSort = !checkSort;
  }
});

export function addStyle(...args) {
  for (let arg of args) {
    arg.classList.add("hide");
  }
}

export function removeStyle(...args) {
  for (let arg of args) {
    arg.classList.remove("hide");
  }
}

newPage.addEventListener("click", () => {
  checkSort = false;
  percent.click();
  checkNewPage = !checkNewPage;
  if (checkNewPage) {
    newPage.innerText = "come back";
    for (let i = 0; i < statisticsWords.length; i += 1) {
      if (statisticsWords[i].children[4].innerText === "0") {
        addStyle(statisticsWords[i]);
      }
    }
  } else {
    newPage.innerText = "repeat difficult words";
    for (let i = 0; i < statisticsWords.length; i += 1) {
      removeStyle(statisticsWords[i]);
    }
  }
});

export function statistic() {
  changeStatistic();
  saveStatistics();
  addStyle(label, cardsContainer);
  removeStyle(statistics, nameStatistics, reset, newPage);
  app.classList.add("statistic-wrapper");
}

export function hideStatistics() {
  hideNewPage();
  removeStyle(label, cardsContainer);
  addStyle(statistics, nameStatistics, reset, newPage);
  app.classList.remove("statistic-wrapper");
}
