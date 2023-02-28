const images = document.querySelectorAll('.images__child');
const buttonLeft = document.querySelector('.btn__left');
const buttonRight = document.querySelector('.btn__right');
const img = document.querySelectorAll('.images__wife ');
const btnLeft = document.querySelector('.button__left');
const btnRight = document.querySelector('.button__right');
const buttonBurger = document.querySelector('.header__button__burger');
const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerLineFirst = hamburgerMenu.querySelector('.hamburger__line__first');
const hamburgerLineSecond = hamburgerMenu.querySelector('.hamburger__line__second');
const hamburgerLineThir = hamburgerMenu.querySelector('.hamburger__line__thir');
const hamburgerItems = document.querySelector('.hamburger__items');

let position = 0;


function moveImagesLeft() {
  position += 400;
  if (position > 1) {
    position = -2400;
  }

  images.forEach((image) => {
    image.setAttribute('style', `transform: transLateX(${position}px)`);
  })
}

function moveImagesRight() {
  position -= 400;
  if (position < -2400) {
    position = 0;
  }

  images.forEach((image) => {
    image.setAttribute('style', `transform: transLateX(${position}px)`);
  })
}


buttonLeft.addEventListener('click', moveImagesLeft);
buttonRight.addEventListener('click', moveImagesRight);


function moveImgLeft() {
  position += 400;
  if (position > 1) {
    position = -2400;
  }

  img.forEach((image) => {
    image.setAttribute('style', `transform: transLateX(${position}px)`);
  })
}

function moveImgRight() {
  position -= 400;
  if (position < -2400) {
    position = 0;
  }

  img.forEach((image) => {
    image.setAttribute('style', `transform: transLateX(${position}px)`);
  })
}


btnLeft.addEventListener('click', moveImgLeft);
btnRight.addEventListener('click', moveImgRight);


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
