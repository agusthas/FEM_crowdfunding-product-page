import '../scss/index.scss';

// Mobile Navbar

// 1. Get all Elements
const iconWrapper = document.querySelector('.js-icon-toggle');
const nav = document.querySelector('.js-nav-toggle');
const navBody = document.querySelector('.js-nav-body-toggle');

// 2. Add Event and Its Handler
iconWrapper.addEventListener('click', (e) => {
  e.stopPropagation();

  [...iconWrapper.children].forEach((node) => {
    node.classList.toggle('is-hidden');
  });

  nav.classList.toggle('is-toggled');
  navBody.classList.toggle('is-hidden');
});
