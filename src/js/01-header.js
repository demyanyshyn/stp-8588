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

const burger = document.querySelector('.header__burger-menu');
const mobileMenu = document.querySelector('.header__modal');
const body = document.body;

let scrollPosition = 0;

const openMenu = () => {
  burger.classList.add('header__burger-menu--open');
  mobileMenu.classList.add('header__modal--open');

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
  burger.classList.remove('header__burger-menu--open');
  mobileMenu.classList.remove('header__modal--open');
  body.classList.remove('menu-open');
  body.style.top = '';

  gsap.to(mobileMenu, {
    x: '100%',
    duration: 0.4,
    ease: 'power2.in',
    autoAlpha: 0,
    onComplete: () => {
      window.scrollTo({ top: scrollPosition, behavior: 'instant' });
    },
  });
};

burger.addEventListener('click', () => {
  const isOpen = burger.classList.contains('header__burger-menu--open');
  isOpen ? closeMenu() : openMenu();
});

const sectionOffsets = {
  home: 1,
  whispers: -1,
  gardens: 1,
  moments: 1,
  plant: 1,
};

document.querySelectorAll('[data-target]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetSection = link.getAttribute('data-target');
    const targetElement = document.querySelector(
      `[data-section="${targetSection}"]`
    );

    if (targetElement) {
      closeMenu();
      const headerOffset =
        document.querySelector('.header__box')?.offsetHeight || 109;
      const offsetAdjustment = sectionOffsets[targetSection] || 20;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset -
        offsetAdjustment;

      gsap.to(window, {
        scrollTo: { y: y, autoKill: false },
        duration: 1.2,
        ease: 'power3.out',
      });
    }
  });
});
