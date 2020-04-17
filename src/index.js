import { switchLabel } from "./js/label.js";
import { changeMenu, activeLink } from "./js/menu.js";
import { moveLink, activeCard } from "./js/pages.js";
import { animationRotate, animationNotrotate } from "./js/rotateAnimation.js";
import { Game } from "./js/play.js";
import { hideStatistics, resetButton, createStatistic } from "./js/statistics";

activeLink();
switchLabel();
changeMenu();
moveLink();
activeCard();
animationRotate();
animationNotrotate();
Game();
hideStatistics();
resetButton();
createStatistic();

/* switch1.addEventListener('click', () => {
    import('./js/label.js').then(module =>{
        module.switchLabel();
    });
}); */
