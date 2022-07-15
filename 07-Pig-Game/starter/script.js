'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    correntScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

let correntScore = 0
let scores = [0 , 0];
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

btnRoll.addEventListener('click' , function () {
    if (playing){
    const dice = Math.trunc(Math.random() * 6) + 1 ;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
        correntScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = correntScore;
    }else {
     switchPlayer();
    }
}
});

btnHold.addEventListener('click' , function () {
    if (playing) {
    scores[activePlayer] += correntScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        playing = false;
    }else {
        switchPlayer();
    }
}
});

btnNew.addEventListener('click' , function () {
    playing = true;
    correntScore = 0
    scores = [0 , 0];
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current1El.textContent = 0; 
    current0El.textContent = 0; 
    player1El.classList.remove('player--winner')
    player0El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    diceEl.classList.add('hidden')
    
})