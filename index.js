const button = document.querySelector('.header__button');
const overlay = document.querySelector('.overlay');
const buttonBurger = document.querySelector('.header__button__burger');
const closeButton = document.querySelector('.popup__close');
const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerLineFirst = hamburgerMenu.querySelector('.hamburger__line__first');
const hamburgerLineSecond = hamburgerMenu.querySelector('.hamburger__line__second');
const hamburgerLineThir = hamburgerMenu.querySelector('.hamburger__line__thir');
const hamburgerItems = document.querySelector('.hamburger__items');


function openPopup() {
  overlay.classList.add('on__popup');
}


function closePopup() {
  overlay.classList.remove('on__popup');
}

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
button.addEventListener('click', openPopup);
buttonBurger.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

