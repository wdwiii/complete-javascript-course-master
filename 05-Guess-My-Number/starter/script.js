'use strict';

/*
- .querySelector can grab any element, class, or id
- Use .textContent operator to view inner text of element
- Multiple dot operators will read from left to right
*/
// console.log(document.querySelector('.message').textContent);

// /*
//  */
// document.querySelector('.message').textContent = 'Correct Number';

//document.querySelector('.number').textContent = 19;
//document.querySelector('.score').textContent = 45;

const checkBtn = document.querySelector('.check');
const number = document.querySelector('.number');

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess || guess < 1) {
    document.querySelector('.message').textContent =
      'Please enter a number between 1 and 20.';
    document.querySelector('.message').style.color = 'red';
  }
});
