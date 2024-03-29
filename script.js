'use strict';

let score = 20;
let number = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Input a number!');
  } else if (guess === number) {
    if (score > 1) {
      displayMessage('Correct Number! Congratulations!');

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.number').textContent = number;

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      document.querySelector('.score').textContent = score - 1;
      displayMessage('You lost the game:(');
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number ? 'Your Guess Is High!' : 'Your Guess Is Low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = score - 1;
      displayMessage('You lost the game:(');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start Guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
