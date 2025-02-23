'use strict';

const randomNumber = Math.trunc(Math.random() * 20) + 1;

let quessNumber;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  quessNumber = Number(document.querySelector('.guess').value);

  if (!quessNumber) {
    document.querySelector('.message').textContent =
      'You have select numbers between 1 and 20';
  } else if (quessNumber === randomNumber) {
    document.querySelector('.message').textContent =
      'You select right number you Win!';
    changeNumberElement('#03fc7f', '30rem');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.score').textContent = score;
    highScore = score;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else {
    checkScore(randomNumber, quessNumber);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.message').textContent = 'Start guessing...';
  changeNumberElement('#222', '15rem');
  score = 20;
});

function checkScore(randomNumber, quessNumber) {
  if (quessNumber < randomNumber) {
    document.querySelector('.message').textContent = 'You are to low !';
    if (score > 1) {
      score = decreeseScore(score);
    } else {
      writeStatus();
    }
  } else {
    document.querySelector('.message').textContent = 'You are to High !';
    if (score > 1) {
      score = decreeseScore(score);
    } else {
      writeStatus();
    }
  }
}

function decreeseScore(score) {
  score--;
  document.querySelector('.score').textContent = score;
  return score;
}

function writeStatus() {
  document.querySelector('.message').textContent = 'You lost the game';
  document.querySelector('.score').textContent = 0;
}

function changeNumberElement(color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
}
