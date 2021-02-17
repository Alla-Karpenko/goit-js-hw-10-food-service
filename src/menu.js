import itemsMenu from './menu-items.hbs';
import menu from './menu.json';


const markup = itemsMenu(menu);

const menuRef = document.querySelector('.menu');

menuRef.insertAdjacentHTML('beforeend', markup);

 




 