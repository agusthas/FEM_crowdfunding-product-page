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

// Bookmark Button

// 1. Get all elements
const bookmarkBtn = document.querySelector('.js-bookmark');
let bookmarkText = bookmarkBtn.querySelector('[data-text]');

// 2. Add event and its handler
bookmarkBtn.addEventListener('click', (e) => {
  const toggled = bookmarkBtn.classList.toggle('is-bookmarked');

  if (toggled) {
    bookmarkText.dataset.text = 'Bookmarked';
  } else {
    bookmarkText.dataset.text = 'Bookmark';
  }
});
