const menuBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.menu-burger');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  menu.classList.add('menu-burger--active');
  body.classList.add('lock');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('menu-burger--active');
  body.classList.remove('lock');
});

document.addEventListener('click', () => {
  if (event.target.classList.contains('lock')) {
    menu.classList.remove('menu-burger--active');
    document.body.classList.remove('lock');
  }  
});

const swiper = new Swiper('.top__slider', {
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

document.querySelectorAll('.accordeon__trigger').forEach(e => {
  e.addEventListener('click', () => {
    e.parentElement.classList.toggle('accordeon__item--active');
  });
});