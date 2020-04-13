import cards from "./cards.js";

let pageCards = [];
document.querySelectorAll(".textCard").forEach((card) => {
    pageCards.push(card);
});
let page = "Main Page";
let numberPages = {};
for (let i=0; i<9; i++) {
    numberPages[cards[0][i]] = i;
}

function changePage() {
    if(page === "Main Page") {
        for (let i = 0; i < pageCards.length; i++) {
            pageCards[i].innerText = cards[numberPages[page]][i + 1];
        }
    } else {
        for (let i = 0; i < pageCards.length; i++) {
            pageCards[i].innerText = cards[numberPages[page]][i]["word"];
        }
    }
}

export function moveLink() {
    listMenu.addEventListener("click", (item) => {
        let nameClass = item.target.className;
        if (nameClass !== "list-menu" && nameClass !== "list-menu list-menu-label") {
            page = item.target.innerText;
            changePage();
        }
    });
}



