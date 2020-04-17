const MAX_LEFT = -100;
const MIN_LEFT = -620;

function animationVisibleMenu() {
  let left = MIN_LEFT;
  setInterval(() => {
    if (left < MAX_LEFT) {
      left += 10; listMenu.style.left = `${left}px`;
    }
  }, 10);
}

function animationHideMenu() {
  let left = MAX_LEFT;
  let interval = setInterval(() => {
    if (left > MIN_LEFT) {
      left -= 10; listMenu.style.left = `${left}px`;
    } else {
      listMenu.style.left = "";
      clearInterval(interval);
    }
  }, 10);
}

function VisibleMenu(){
  animationVisibleMenu();
  firstSpan.classList.add("span-first");
  secondSpan.classList.add("span-second");
  thirdSpan.classList.add("span-third");
}

function HideMenu(){
  animationHideMenu();
  burgerMenu.checked = false;
  firstSpan.classList.remove("span-first");
  secondSpan.classList.remove("span-second");
  thirdSpan.classList.remove("span-third");
}

export function changeMenu() {
  document.querySelector("html").addEventListener("click", (item) => {
    if (burgerMenu.checked && item.target.id === "burgerMenu") {
      VisibleMenu();
    } else if (burgerMenu.checked || item.target.id === "burgerMenu") {
      HideMenu();
    }
  });
}

export function activeLink() {
  listMenu.addEventListener("click", (item) => {
    let nameClass = item.target.className;
    if (nameClass !== "list-menu" && nameClass !== "list-menu list-menu-label") {
      document.querySelectorAll(".page-link").forEach((link) => {
        link.classList.remove("active-link");
      });
      item.target.classList.add("active-link");
    }
  });
}



