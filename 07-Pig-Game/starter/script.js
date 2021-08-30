'use strict';
// Selecting elements
const p1ScoreElem = document.querySelector('#score--0');
const p2ScoreElem = document.querySelector('#score--1');
const diceElem = document.querySelector('.dice');

// Functions
const resetScore = function () {
  p1ScoreElem.textContent = 0;
  p2ScoreElem.textContent = 0;
};
const hideDice = function () {
  if (!diceElem.classList.contains('hidden')) diceElem.classList.add('hidden');
};

// Starting Conditions
resetScore();
hideDice();
