'use strict';
//Score Elements
let scores, currentScore, playing, playerScore;
let activePlayer = 0;

// Selecting elements
//===========================
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const diceElem = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Functions
//===========================
const newGame = function () {
  //1. Make player 1 the active player
  //2. Reset all scores to 0
  //3. Hide dice
  //4. Set playing value to true
  activePlayer = 0;
  document.querySelector('#name--0').textContent = 'Player 1';
  document.querySelector('#name--1').textContent = 'Player 2';
  diceElem.classList.add('hidden');
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  playing = true;
  currentScore = 0;
  scores = [0, 0];
};

const updateCurrentScore = function () {
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
};

const switchPlayers = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  // Toggling both classes at the same time ensure only one player will be activie at a time
};

// Starting Conditions
//===========================
newGame();

// Rolling Dice Functionality
//===========================
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceElem.classList.remove('hidden');
    diceElem.src = `dice-${dice}.png`;
    console.log(dice);
    //3b. Check for 1

    if (dice !== 1) {
      //Add to current score
      currentScore += dice;
      updateCurrentScore();
    } else {
      /*
        1. Reset the current score to 0
        2. Remove active class from active player
        3. Apply active class to other player
        4. Change active player value
        */

      currentScore = 0;
      updateCurrentScore();
      switchPlayers();
    }
  }
});

// Hold Button Functionality
//=========================================
/*
1. Add event listener for hold button click
2. If game is being played, allow button funtionality to work
3. Add current score to global score
4. If global score is greater or equal to 51, active player wins
5. If not, switch players
*/

btnHold.addEventListener('click', function () {
  playerScore = document.querySelector(`#score--${activePlayer}`);

  if (playing) {
    scores[activePlayer] += currentScore;
    playerScore.textContent = scores[activePlayer];
    console.log(scores);
    if (scores[activePlayer] >= 100) {
      //first player to 100 wins!
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElem.classList.add('hidden');
      console.log(`PLAYER ${activePlayer + 1} IS THE WINNER`);
      btnHold.classList.add('hidden');
      btnRoll.classList.add('hidden');
    } else {
      currentScore = 0;
      updateCurrentScore();
      switchPlayers();
    }
  }
});

// New Game Button Functionality
//=========================================
/*
1. Add event listener for new game button click
2. Run new game function
3. Make player 1 the active player
4. If there is a winner class applied, remove it.
5. If buttons are hidden, reveal them
*/
btnNew.addEventListener('click', function () {
  newGame();
  if (
    player2.classList.contains('player--active') ||
    player2.classList.contains('player--winner')
  ) {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    player2.classList.remove('player--winner');
  } else {
    player1.classList.remove('player--winner');
    player1.classList.add('player--active');
  }
  if (btnHold.classList.contains('hidden')) {
    btnHold.classList.remove('hidden');
    btnRoll.classList.remove('hidden');
  }
});
