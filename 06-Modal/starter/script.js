'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', function () {
    console.log(btn.textContent);
  });
});
