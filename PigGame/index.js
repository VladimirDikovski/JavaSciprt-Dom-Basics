const totalScorePlayer1 = document.querySelector('.name-1');
const totalScorePlayer2 = document.querySelector('.name-2');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const currentScorePlayer1 = document.querySelector('.current-score-1');
const currentScorePlayer2 = document.querySelector('.current-score-2');
const buttonNewGame = document.querySelector('.btn-new-game');
const buttonRollDice = document.querySelector('.btn-roll-dice');
const buttonHold = document.querySelector('.btn-hold');
const diceImg = document.querySelector('.dice-img');
let rollDice = 0;

// Implement logic for roll the dice
const rollTheDiceFunction = function () {
  let rollDice = Math.trunc(Math.random() * 6) + 1;
  diceImg.setAttribute('src', `Dices/dice-${rollDice}.png`);
  diceImg.classList.remove('unvisible');
  if (player1.classList.contains('player--active') && rollDice === 1) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else if (player2.contains('player--active') && rollDice === 1) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
  if (player1.classList.contains('player--active')) {
    increaseScore(rollDice, currentScorePlayer1);
  } else if (player2.classList.contains('player--active')) {
    increaseScore(rollDice, currentScorePlayer2);
  }
};

const increaseScore = function (rollDice, currentPlayer) {
  currentPlayer.textContent = rollDice + Number(currentPlayer.textContent);
};

buttonRollDice.addEventListener('click', rollTheDiceFunction);
