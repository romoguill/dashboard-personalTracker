'use strict';

const header = document.querySelector('[data-header]');
const navToggleBtn = document.querySelector('[data-menu-toggle-btn]');

navToggleBtn.addEventListener('click', () => {
  header.classList.toggle('active');
});

// Toggle ctx-menu when click on card-menu-btn
const menuBtn = document.querySelectorAll('[data-menu-btn]');

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
  });
}
