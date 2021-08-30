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

const restartBtn = document.querySelector('.restart');
const checkBtn = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
//Refactored var message into displayMesage function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let number = document.querySelector('.number');

let score = 20;
let scoreDisplay = document.querySelector('.score');

let guess = document.querySelector('.guess').value;

scoreDisplay.textContent = score;

checkBtn.addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (guess && guess > 0 && guess <= 20) {
    //If the guess is a number between 1 and 20
    if (guess !== secretNumber) {
      //If the guess is not correct take 1 point away
      score--;
      scoreDisplay.textContent = score;

      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');

      //ORINGAL CODE BELOW
      // if (guess > secretNumber) {
      //   //If the guess is greater than the secret number, display 'Too High'
      //   message.textContent = 'Too High';
      // } else if (guess < secretNumber) {
      //   //If the guess is less than the secret number, display 'Too Low'
      //   message.textContent = 'Too Low';
      // }
    } else if (guess === secretNumber) {
      //If you guess correctly, display 'YOU WIN' in green, increasing the width of number container and reveal the number
      number.textContent = secretNumber;
      displayMessage('YOU WIN 🎉');
      message.style.color = 'white';
      document.querySelector('body').style.backgroundColor = '#00c324';
      number.style.width = '25rem';
      if (score > document.querySelector('.highscore').textContent)
        document.querySelector('.highscore').textContent = score;
      //If current score is greater than the highscore, the  highscore = current game score
    }
  } else {
    //If you guess a number less than 1 or greater than 20, display error message in red. NO point will be taken away for an invalid guess
    displayMessage('Please enter a number between 1 and 20.');
    message.style.color = 'red';
  }
  if (score <= 0) {
    //If score reaches zero, the display 'you lose' in red
    scoreDisplay = 0;
    number.textContent = secretNumber;
    displayMessage('YOU LOSE!! :(');
    message.style.color = 'red';
  }
});

const newRandom = function () {
  //function to generate a new random number.
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
};

restartBtn.addEventListener('click', function () {
  /*When reset button is clicked:
  - Reset score
  - Clear the number from input 
  - Reset number content & width, message content & color
  - Generate new random number
  */
  score = 20;
  scoreDisplay.textContent = score;
  document.querySelector('.guess').value = '';
  number.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  displayMessage('Start guessing...');
  //message.textContent = 'Start guessing...';
  message.style.color = 'white';
  newRandom();
  console.log(secretNumber);
});

console.log(secretNumber);
