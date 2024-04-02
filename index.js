let score = JSON.parse(localStorage.getItem('score')) || {
   wins: 0,
   losses: 0,
   ties: 0
 };

 updateScoreElement();

 /*
 if (!score) {
   score = {
     wins: 0,
     losses: 0,
     ties: 0
   };
 }
 */
let isAutoPlaying = false;
let intervalId;

document.querySelector('.js-auto-play-button').addEventListener('click',()=>{
  autoPlay();
})

function autoPlay() {
  if(!isAutoPlaying){ 
    intervalId = setInterval(()=>{
      const playerMove = pickComputerMove();
    playGame(playerMove);
    },1000);
    isAutoPlaying = true; 
    document.querySelector('.auto-play-button').innerHTML = 'Stop';
 } 
 else{
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.auto-play-button').innerHTML = 'Auto Play';
 }
}
  const rockElement = document.querySelector('.js-rock-button');
  rockElement.addEventListener('click',()=>{
    playGame('rock');
  })
  const paperElement = document.querySelector('.js-paper-button');
  paperElement.addEventListener('click',()=>{
    playGame('paper');
  })
  const scissorsElement = document.querySelector('.js-scissors-button');
  scissorsElement.addEventListener('click',()=>{
    playGame('scissors');
  })

 function playGame(playerMove) {
   const computerMove = pickComputerMove();

   let result = '';

   if (playerMove === 'scissors') {
     if (computerMove === 'rock') {
       result = 'You lose.';
     } else if (computerMove === 'paper') {
       result = 'You win.';
     } else if (computerMove === 'scissors') {
       result = 'Tie.';
     }

   } else if (playerMove === 'paper') {
     if (computerMove === 'rock') {
       result = 'You win.';
     } else if (computerMove === 'paper') {
       result = 'Tie.';
     } else if (computerMove === 'scissors') {
       result = 'You lose.';
     }
     
   } else if (playerMove === 'rock') {
     if (computerMove === 'rock') {
       result = 'Tie.';
     } else if (computerMove === 'paper') {
       result = 'You lose.';
     } else if (computerMove === 'scissors') {
       result = 'You win.';
     }
   }

   if (result === 'You win.') {
     score.wins += 1;
   } else if (result === 'You lose.') {
     score.losses += 1;
   } else if (result === 'Tie.') {
     score.ties += 1;
   }

   localStorage.setItem('score', JSON.stringify(score));

   updateScoreElement();

   document.querySelector('.js-result').innerHTML = result;

   document.querySelector('.js-moves').innerHTML = `You
   <img class="move-icon" src="pictures/${playerMove}.png">
   <img class="move-icon" src="pictures/${computerMove}.png"> Computer`;
 }

 function updateScoreElement() {
   document.querySelector('.js-score')
     .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
 }

 function pickComputerMove() {
   const randomNumber = Math.random();

   let computerMove = '';

   if (randomNumber >= 0 && randomNumber < 1 / 3) {
     computerMove = 'rock';
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
     computerMove = 'paper';
   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
     computerMove = 'scissors';
   }

   return computerMove;
 }
 // code for pressing keys to play;
 const bodyElement = document.body;
 bodyElement.addEventListener('keydown',(event)=>{
  switch (event.key) {
    case 'r':
      playGame('rock');
      break;
    case 'p':
      playGame('paper');
      break;
    case 's':
      playGame('scissors');
      break;
    case 'a':
      autoPlay();
      break;
    case 'Backspace':
      showResetConfirmation();
      break;
    case 'y':
      deleteScore();
      deleteResetConfirmation();
      break;
    case 'n':
      deleteResetConfirmation();
      break;
    default:
      
  }
 });
function deleteScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

//onclick Reset button
document.querySelector('.js-reset-button').addEventListener('click',()=>{
  showResetConfirmation();
})

function showResetConfirmation(){

  //generate buttons
  document.querySelector('.js-reset-confirmation').innerHTML = `Do you wish to reset the score? Press Y/N on keyboard
  <button class="js-yes-button reset-score-button">Yes</button>
  <button class="js-no-button reset-score-button">No</button>`;

  //generate event on click for Yes 
  document.querySelector('.js-yes-button').addEventListener('click',()=>{
    deleteScore();
    deleteResetConfirmation();
  });
  //generate event on click for No
  document.querySelector('.js-no-button').addEventListener('click',()=>{
    deleteResetConfirmation();
  });
}

//delete Yes and No from sceen and put shortcut for instuctions
function deleteResetConfirmation(){
  document.querySelector('.js-reset-confirmation').innerHTML=`
    <p class="showInstructions"><span class="underline">*Show shortcuts*</span></p>`;
  showShortcuts();
}

function showShortcuts(){
  document.querySelector('.showInstructions').addEventListener('click',()=>{
    // generate whole instuction manual
    document.querySelector('.showInstructions').innerHTML=`
    <div class="js-reset-confirmation">
          <p class="game-instructions"><span class="yellow">*Hint</span> -> You can use your <span class="yellow">keyboard</span> to play RPS game</p>
          <p>Press key: <span class="yellow">(r)</span> - > rock, <span class="yellow">(p)</span> - > paper, <span class="yellow">(s)</span> - > scissors</p>
          <p><span class="yellow">(a)</span> - > Auto Play, <span class="yellow">(Backspace)</span> -> Reset score</p></div>
      </div>`;
  })
}


