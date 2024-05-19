'use strict';

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resetScore = document.getElementById('resetScore');
let jsScore = document.querySelector('#js-score');
let jsResult = document.querySelector('#js-result');
let jsMoves = document.querySelector('#js-moves');

console.log(JSON.parse(localStorage.getItem('score')));

let score =  JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  }; // this is called the default operator.
    // does the same as the code below
    // if the left side is falsy, it'll use the right side as a default

updateScoreElement();

// if (!score)

// if (score === null) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   }
// }








//steps(algo) to build the rock paper scissors game
//when a button is clicked:
//1. computer randomly selects a move
//2. compare the moves to get the result
//3. update a score
//4. display the result in a popup


rock.addEventListener('click', () => {
  playGame('rock');
})

paper.addEventListener('click', () => {
  playGame('paper');
  })

scissors.addEventListener('click', () => {
  playGame('scissors');
})

resetScore.addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
})



function js_result() {}

function js_moves() {}


function updateScoreElement() {
  jsScore.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
      if (computerMove === 'scissors') {
      result = 'Tie!';
    } else if (computerMove === 'rock') {
      result = 'You lose!';
    } else if (computerMove === 'paper') {
      result = 'You win!';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'paper') {
    result = 'Tie!';
    } else if (computerMove === 'rock') {
      result = 'You win!';
    } else if (computerMove === 'scissors') {
      result = 'You lose!'
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie!';
    } else if (computerMove === 'paper') {
      result = 'You lose!';
    } else if (computerMove === 'scissors') {
      result = 'You win!';
    }
  }

  if (result === 'You win!') {
    score.wins++;
  } else if (result === 'You lose!') {
    score.losses++;
  } else if (result === 'Tie!') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  
  updateScoreElement();
  
  jsResult.innerHTML = `${result}`;
  jsMoves.innerHTML = `You <img class="move-icon" src="./images/${playerMove}-emoji.png" alt="" />
        <img class="move-icon" src="./images/${computerMove}-emoji.png" alt="" />
        Computer`;

//   alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
}


function pickComputerMove() {
  const randomMove = Math.random();
  let computerMove = '';

   if (randomMove >= 0 && randomMove < 1 / 3) {
    // console.log('scissors')
    computerMove = 'scissors';
  } else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
    computerMove = 'rock';
  } else if (randomMove >= 2 / 3 && randomMove < 1) {
    computerMove = 'paper';
  }

  return computerMove;
}
