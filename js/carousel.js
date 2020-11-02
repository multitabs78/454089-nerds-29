const carousel = document.querySelector('.carousel');
const slideOne = carousel.querySelector('.carousel__slide-1');
const slideTwo = carousel.querySelector('.carousel__slide-2');
const slideThree = carousel.querySelector('.carousel__slide-3');

const ctrlBtns = carousel.querySelectorAll('.carousel__controls-button');
const ctrlBtn1 = carousel.querySelector('.carousel__controls-button--1');
const ctrlBtn2 = carousel.querySelector('.carousel__controls-button--2');
const ctrlBtn3 = carousel.querySelector('.carousel__controls-button--3');


ctrlBtn1.addEventListener('click', function (evt) {
  evt.preventDefault();
  ctrlBtn1.classList.add('carousel__controls-button--active');
  ctrlBtn2.classList.remove('carousel__controls-button--active');
  ctrlBtn3.classList.remove('carousel__controls-button--active');
  slideOne.classList.add('carousel__slide--active');
  slideTwo.classList.remove('carousel__slide--active');
  slideThree.classList.remove('carousel__slide--active');
});

ctrlBtn2.addEventListener('click', function (evt) {
  evt.preventDefault();
  ctrlBtn2.classList.add('carousel__controls-button--active');
  ctrlBtn1.classList.remove('carousel__controls-button--active');
  ctrlBtn3.classList.remove('carousel__controls-button--active"');
  slideOne.classList.remove('carousel__slide--active');
  slideTwo.classList.add('carousel__slide--active');
  slideThree.classList.remove('carousel__slide--active');
});

ctrlBtn3.addEventListener('click', function (evt) {
  evt.preventDefault();
  ctrlBtn3.classList.add('carousel__controls-button--active');
  ctrlBtn1.classList.remove('carousel__controls-button--active');
  ctrlBtn2.classList.remove('carousel__controls-button--active');
  slideOne.classList.remove('carousel__slide--active');
  slideTwo.classList.remove('carousel__slide--active');
  slideThree.classList.add('carousel__slide--active');
});
