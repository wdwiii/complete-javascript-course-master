'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//================================================
// 186. Selecting, Creating, and Deleting Elements
//================================================
//Selecting documents
console.log(document.documentElement); //Shows entire html element
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); //Will return a nodeList

const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //Will return an HTLMCollection or 'life-collection' (automaticall updays when DOM changes

//Creating and inserting elements
//.insertAdjacentHTML(position, HTMLString)
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'This was added via text content';
message.innerHTML =
  '<p>This was added via innerHTML</p><button class="btn btn--close-cookie">This button was also added with innerHTML</button>';

header.prepend(message); //adds element as the first-child
header.append(message); //adds element as the last-child
//prepend and append not only inserts elements but it can also move them

//If you want to insert multiple copies, you must first make a clone
const messageClone = message.cloneNode(true);
//header.prepend(messageClone);

//before and affter adds the element as a sibling
header.before(messageClone);
//header.after(messageClone);

//deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    messageClone.remove();
  });
