const images = document.querySelectorAll('.images__child');
const buttonLeft = document.querySelector('.btn__left');
const buttonRight = document.querySelector('.btn__right');
const img = document.querySelectorAll('.images__wife ');
const btnLeft = document.querySelector('.button__left');
const btnRight = document.querySelector('.button__right');


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
