import Swiper from 'swiper';

const swiperOptions = {
  slidesPerView: 5,
  spaceBetween: 16,

  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
  },
};
////
const swiper = new Swiper('.swiper', swiperOptions);
