import Swiper from 'swiper';

import {
  Autoplay,
  EffectCards,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';

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
      slidesPerView: 3,
      spaceBetween: 16,
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

// import Swiper from 'swiper';
// import { EffectCards } from 'swiper/modules';
// import 'swiper/css/effect-cards';

// const swiperParams = {
//   effect: 'cards',
//   grabCursor: true,
//   cardsEffect: {
//     perSlideOffset: 8,
//     perSlideRotate: 2,
//     slideShadows: true,
//   },
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// };
//   {autoplay: {
//     delay: 1500,
//   },
//   direction: 'horizontal',
//   centeredSlides: true,
//   effect: 'cards',
//   cardsEffect: {
//     perSlideOffset: 5,
//     perSlideRotate: 20,
//     rotate: true,
//     slideShadows: true,
//   },
//   grid: { colums: 5 },
//   loop: true,
//   pagination: true,
//   setWrapperSize: true,
// };

// const swiper = new Swiper('.swiper', swiperParams);
