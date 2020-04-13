import { switchLabel } from "./js/label.js";
import { changeMenu, activeLink } from "./js/menu.js";
import { moveLink } from "./js/pages.js";

activeLink();
switchLabel();
changeMenu();
moveLink();

/* switch1.addEventListener('click', () => {
    import('./js/label.js').then(module =>{
        module.switchLabel();
    });
}); */
