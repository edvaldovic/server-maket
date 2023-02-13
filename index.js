const button = document.querySelector('.header__button');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.popup__close')

function openPopup() {
  overlay.classList.add('on__popup');
}

function closePopup() {
  overlay.classList.remove('on__popup');
}


button.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)
