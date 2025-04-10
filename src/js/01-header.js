import {
  gsap,
  ScrollTrigger,
  Draggable,
  Flip,
  MotionPathPlugin,
  ScrollToPlugin,
} from 'gsap/all';

gsap.registerPlugin(
  ScrollTrigger,
  Draggable,
  Flip,
  MotionPathPlugin,
  ScrollToPlugin
);

const burger = document.querySelector('.header__burger__menu');
const mobileMenu = document.querySelector('.header__modal');
const body = document.body;

let scrollPosition = 0;

const openMenu = () => {
  burger.classList.add('is-open');
  mobileMenu.classList.add('is-open');

  scrollPosition = window.scrollY;

  document.documentElement.style.setProperty(
    '--scrollbar-width',
    `${window.innerWidth - document.documentElement.clientWidth}px`
  );

  body.style.top = `-${scrollPosition}px`;
  body.classList.add('menu-open');

  gsap.to(mobileMenu, {
    x: 0,
    duration: 0.5,
    ease: 'power3.out',
    autoAlpha: 1,
  });
};

const closeMenu = () => {
  burger.classList.remove('is-open');
  mobileMenu.classList.remove('is-open');
  body.classList.remove('menu-open');
  body.style.top = '';
  window.scrollTo(0, scrollPosition);

  gsap.to(mobileMenu, {
    x: '100%',
    duration: 0.4,
    ease: 'power2.in',
    autoAlpha: 0,
  });
};

burger.addEventListener('click', () => {
  const isOpen = burger.classList.contains('is-open');
  isOpen ? closeMenu() : openMenu();
});

document.querySelectorAll('.header__modal__item a').forEach(link => {
  link.classList.add('scroll-link');
});

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      closeMenu();
      const headerOffset =
        document.querySelector('.header__box').offsetHeight || 109;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      gsap.to(window, {
        scrollTo: { y: y, autoKill: true },
        duration: 1,
        ease: 'sine.inOut',
      });
    }
  });
});
