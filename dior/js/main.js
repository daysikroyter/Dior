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