const STORAGE_KEY = 'cookieConsent';

if (!localStorage.getItem(STORAGE_KEY)) {
  document.addEventListener('DOMContentLoaded', () => {
    const cookiesWindow = document.querySelector('.cookies__popup');
    const overlay = document.querySelector('.cookies__overlay');
    const acceptBtn = document.querySelector('.cookies__button--accept');
    const declineBtn = document.querySelector('.cookies__button--decline');

    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        cookiesWindow.classList.add('show-cookies-popup');
        overlay.classList.add('show-overlay');
      }
    }, 1000);

    const hideCookiesPopup = () => {
      cookiesWindow.classList.remove('show-cookies-popup');
      overlay.classList.remove('show-overlay');
      document.body.style.overflow = 'auto';
    };

    const saveConsent = accepted => {
      localStorage.setItem(STORAGE_KEY, accepted);
      hideCookiesPopup();
    };

    acceptBtn.addEventListener('click', () => saveConsent('accepted'));
    declineBtn.addEventListener('click', () => saveConsent('declined'));
  });
}
