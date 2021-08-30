'use strict';
// Selecting elements
//===========================
//Player 1
const p1ScoreElem = document.querySelector('#score--0');
const p1Current = document.querySelector('#current--0');
//Player 2
const p2ScoreElem = document.querySelector('#score--1');
const p2Current = document.querySelector('#current--1');

let currentScore = 0;

const diceElem = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Functions
//===========================
const resetScore = function () {
  p1ScoreElem.textContent = 0;
  p2ScoreElem.textContent = 0;
};
// const hideDice = function () {
//   if (!diceElem.classList.contains('hidden')) diceElem.classList.add('hidden');
// };

// Starting Conditions
//===========================
resetScore();
diceElem.classList.add('hidden');

// Rolling Dice Functionality
//===========================
btnRoll.addEventListener('click', function () {
  //1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display dice
  diceElem.classList.remove('hidden');
  diceElem.src = `dice-${dice}.png`;
  console.log(dice);
  //3. Check for 1
  if (dice !== 1) {
    //Add to current score
    currentScore += dice;
    p1Current.textContent = currentScore; //We will need to change this
  } else {
    //If dice rolls 1, switch players
  }
});
