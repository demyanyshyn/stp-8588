import Swiper from 'swiper';

import {
  Autoplay,
  EffectCards,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';

const swiperOptions = {
  modules: [Autoplay, EffectCoverflow, Navigation, Pagination, EffectCards],
  effect: 'coverflow',
  // effect: 'cards',
  slidesPerView: 5,
  centeredSlides: true,
  loop: true,
  loopedSlides: 5,
  // loopAdditionalSlides: 5,

  cardsEffect: {
    perSlideOffset: 50,
    perSlideRotate: 1,
    rotate: 20,
    slideShadows: true,
  },
  coverflowEffect: {
    rotate: 30,
    stretch: 20,
    depth: 200,
    modifier: 1,
    slideShadows: true,
    scale: 0.98,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  speed: 800,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  createElements: true,
  lazyPreloadPrevNext: 3,
  loopPreventsSliding: true,
};

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
