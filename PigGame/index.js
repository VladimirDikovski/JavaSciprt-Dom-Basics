const totalScorePlayer1 = document.querySelector('.digit-score-1');
const totalScorePlayer2 = document.querySelector('.digit-score-2');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const currentScorePlayer1 = document.querySelector('.current-score-1');
const currentScorePlayer2 = document.querySelector('.current-score-2');
const buttonNewGame = document.querySelector('.btn-new-game');
const buttonRollDice = document.querySelector('.btn-roll-dice');
const buttonHold = document.querySelector('.btn-hold');
const diceImg = document.querySelector('.dice-img');

let rollDice = 0;

function removeActive(player) {
  player.classList.remove('player--active');
}

function addActive(player) {
  player.classList.add('player--active');
}

function resetScore(score) {
  score.textContent = 0;
}

function resetAllStats(component) {
  component.textContent = 0;
}

const increaseScore = function (rollDice, currentPlayer) {
  currentPlayer.textContent = rollDice + Number(currentPlayer.textContent);
};

function whoWin(scorePlayer) {
  if (scorePlayer.textContent >= 100) {
    if (player1.classList.contains('player--active')) {
      player1.classList.add('win');
    } else if (player2.classList.contains('player--active')) {
      player2.classList.add('win');
    }
    buttonRollDice.disabled = true;
    buttonHold.disabled = true;
  }
}

// Implement logic for roll the dice
const rollTheDiceFunction = function () {
  let rollDice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove('unvisible');
  diceImg.setAttribute('src', `Dices/dice-${rollDice}.png`);
  if (player1.classList.contains('player--active') && rollDice === 1) {
    removeActive(player1);
    addActive(player2);
    resetScore(currentScorePlayer1);
  } else if (player2.classList.contains('player--active') && rollDice === 1) {
    removeActive(player2);
    addActive(player1);
    resetScore(currentScorePlayer2);
  }
  if (rollDice !== 1) {
    if (player1.classList.contains('player--active')) {
      increaseScore(rollDice, currentScorePlayer1);
    } else if (player2.classList.contains('player--active')) {
      increaseScore(rollDice, currentScorePlayer2);
    }
  }
};

buttonRollDice.addEventListener('click', rollTheDiceFunction);

buttonHold.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    totalScorePlayer1.textContent =
      Number(totalScorePlayer1.textContent) +
      Number(currentScorePlayer1.textContent);
    currentScorePlayer1.textContent = 0;
    whoWin(totalScorePlayer1);
  }
  if (player2.classList.contains('player--active')) {
    totalScorePlayer2.textContent =
      Number(totalScorePlayer2.textContent) +
      Number(currentScorePlayer2.textContent);
    currentScorePlayer2.textContent = 0;
    whoWin(totalScorePlayer2);
  }
});

buttonNewGame.addEventListener('click', function () {
  buttonRollDice.disabled = false;
  buttonHold.disabled = false;
  resetAllStats(totalScorePlayer1);
  resetAllStats(totalScorePlayer2);
  resetAllStats(currentScorePlayer1);
  resetAllStats(currentScorePlayer2);
  diceImg.classList.add('unvisible');
  player1.classList.add('active--player');
  player2.classList.remove('win');
  player1.classList.remove('win');
});
