'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const player = document.querySelector('.player');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// score0El.textContent = 0;
// score1El.textContent = 0;
// let total = 0;
// let activePlayer = 0;
// const scores = [0, 0];
// let playing = true;

// diceEl.classList.add('hidden');

let scores, total, activePlayer, playing;

const init = function () {
  total = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  diceEl.classList.add('hidden');
};
init();

const switchPlayer = function () {
  total = 0;
  document.getElementById(`current--${activePlayer}`).textContent = total;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

roll.addEventListener('click', function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');

    //   console.log(diceNumber);
    diceEl.src = 'dice-' + diceNumber + '.png';
    if (diceNumber !== 1) {
      total = total + diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = total;
      // current0El.textContent = total;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += total;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', function () {
  init();
});
