'use strict';
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const diceImg = document.querySelector('.dice');
const current0 =document.getElementById('current--0');
const current1 =document.getElementById('current--1');
const score0 =document.getElementById('score--0');
const score1 =document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


let scores, activePlayer, currentScore, playing;

const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing= true;
    score0.textContent=0;
    score1.textContent=0;
    current0.textContent=0;
    current1.textContent=0;
    diceImg.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();

const switchPlayer= function(){
    currentScore = 0;
    activePlayer= activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Rolling dice ------------------------------------------------------
btnRoll.addEventListener('click', function(){
    diceImg.classList.remove('hidden');
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);
    diceImg.src = `dice-${dice}.png`;
    if(dice !== 1){
        currentScore+=dice;
        console.log(currentScore);
        document.getElementById(`current--${activePlayer}`).textContent= currentScore;
    }else{
        switchPlayer();
    }
});

//Save points--------------------------------------------------------
btnHold.addEventListener('click', function(){
    if (playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        document.getElementById(`current--${activePlayer}`).textContent= 0;
        if (scores[currentScore] >= 100){
            playing=false;
            diceImg.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', function(){
    init();
})
