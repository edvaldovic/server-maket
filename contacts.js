const buttonBurger = document.querySelector('.header__button__burger');
const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerLineFirst = hamburgerMenu.querySelector('.hamburger__line__first');
const hamburgerLineSecond = hamburgerMenu.querySelector('.hamburger__line__second');
const hamburgerLineThir = hamburgerMenu.querySelector('.hamburger__line__thir');
const hamburgerItems = document.querySelector('.hamburger__items');


function toggleHamburgerMenu() {
  hamburgerLineFirst.classList.toggle('line_first_opened');
  hamburgerLineSecond.classList.toggle('line_second_opened');
  hamburgerLineThir.classList.toggle('line_thir_opened');
}

function toggleHamburgerItems() {
  hamburgerItems.classList.toggle('hamburger__items__opened');
}

hamburgerMenu.addEventListener('click', () => {
  toggleHamburgerMenu();
  toggleHamburgerItems();
});

buttonBurger.addEventListener('click', () => {
  toggleHamburgerItems();
  toggleHamburgerMenu();
});
