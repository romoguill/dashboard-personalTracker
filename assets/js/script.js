'use strict';

const header = document.querySelector('[data-header]');
const navToggleBtn = document.querySelector('[data-menu-toggle-btn]');

navToggleBtn.addEventListener('click', () => {
  header.classList.toggle('active');
});
