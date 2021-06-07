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
  document.body.classList.toggle('has-hide-overflow');
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

// Modal

// 1. Get all elements
const modalOpenBtn = document.querySelectorAll('.js-modal-open');
const modalCloseBtn = document.querySelector('.js-modal-close');
const modalWrapper = document.querySelectorAll('.js-modal');
// console.log(modalWrapper);

modalOpenBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    document.body.style.overflow = 'hidden';

    modalWrapper.forEach((modal) => {
      modal.classList.remove('is-hidden');
    });
  });
});

modalCloseBtn.addEventListener('click', (e) => {
  document.body.style.overflow = 'auto';

  modalWrapper.forEach((modal) => {
    modal.classList.add('is-hidden');
  });
});

// modalCloseBtn.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     document.body.style.overflow = 'auto';

//     modalWrapper.forEach((modal) => {
//       modal.classList.add('is-hidden');
//     });
//   });
// });

// Modal Form Control

// 1. Get all elements
const formControl = document.querySelectorAll('.js-form-control');
const radioBtns = document.querySelectorAll('.js-c-radio__input');
const dropdowns = document.querySelectorAll('.js-form-control-dropdown');

const resetDropdown = () => {
  dropdowns.forEach((dd) => dd.classList.add('is-hidden-recurse'));
};

resetDropdown();
radioBtns.forEach((radio) => {
  const wrapper = radio.closest('.js-form-control');

  const dropdown = wrapper.querySelector('.js-form-control-dropdown');

  if (radio.checked) {
    wrapper.classList.add('has-active');
    dropdown.classList.remove('is-hidden-recurse');
  }

  radio.addEventListener('change', (e) => {
    resetDropdown();
    formControl.forEach((ctrl) => {
      ctrl.classList.remove('has-active');
    });

    wrapper.classList.add('has-active');
    dropdown.classList.remove('is-hidden-recurse');
  });
});

// Form Submit

// 1. Get all elements
const forms = document.querySelectorAll('.js-form');

// 2. Events
forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tier = e.target.closest('.c-form-control').dataset.tier;
    let value = -1;
    if (tier === 'free') {
      modalCloseBtn.click();
      return;
    }

    value = +e.target.querySelector('input[type="text"]').value;

    if (tier === 'bamboo') {
      if (value < 25) {
        alert('Value of input must be higher than $25');
      } else {
        document.querySelectorAll('[data-stock-bamboo]').forEach((node) => {
          node.innerHTML = +node.innerHTML - 1;
        });
        modalCloseBtn.click();
      }
    } else if (tier === 'black') {
      if (value < 75) {
        alert('Value of input must be higher than $75');
      } else {
        document.querySelectorAll('[data-stock-black]').forEach((node) => {
          node.innerHTML = +node.innerHTML - 1;
        });
        modalCloseBtn.click();
      }
    }
  });
});
