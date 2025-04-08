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

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const body = document.body;

let scrollPosition = 0;

const openMenu = () => {
  burger.classList.add('active');
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
  });
};

const closeMenu = () => {
  burger.classList.remove('active');
  body.classList.remove('menu-open');
  body.style.top = '';
  window.scrollTo(0, scrollPosition);

  gsap.to(mobileMenu, {
    x: '100%',
    duration: 0.4,
    ease: 'power2.in',
  });
};

burger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      closeMenu();
      setTimeout(() => {
        const headerOffset = 2;
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset;

        gsap.to(window, {
          scrollTo: { y: y, autoKill: true },
          duration: 1,
          ease: 'power2.out',
        });
      }, 300);
    }
  });
});
