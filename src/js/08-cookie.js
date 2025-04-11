import Cookies from 'js-cookie';

const COOKIE_NAME = 'acceptCookies';

if (!Cookies.get(COOKIE_NAME)) {
  document.addEventListener('DOMContentLoaded', () => {
    const cookiesWindow = document.querySelector('.cookies__popup');
    const overlay = document.querySelector('.cookies__overlay');
    const acceptBtn = document.querySelector('.cookies__button--accept');
    const declineBtn = document.querySelector('.cookies__button--decline');

    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (!Cookies.get(COOKIE_NAME)) {
        cookiesWindow.classList.add('show-cookies-popup');
        overlay.classList.add('show-overlay');
      }
    }, 1000);

    const hideCookiesPopup = () => {
      cookiesWindow.classList.remove('show-cookies-popup');
      overlay.classList.remove('show-overlay');
      document.body.style.overflow = 'auto';
    };

    const handleAddCookie = () => {
      Cookies.set(COOKIE_NAME, 'true', { expires: 5 / (24 * 60) });
      hideCookiesPopup();
    };

    const handleRemoveCookie = () => {
      Cookies.set(COOKIE_NAME, 'false', { expires: 5 / (24 * 60) });
      hideCookiesPopup();
    };

    acceptBtn.addEventListener('click', handleAddCookie);
    declineBtn.addEventListener('click', handleRemoveCookie);
  });
}
