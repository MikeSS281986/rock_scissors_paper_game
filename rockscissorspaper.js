const OPTIONS = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  computerchoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
  return computerchoice;
} //function that utilizes global variable array OPTIONS to create a randomn choice based from a 3 variable array and returns the computers choice from the array.

function promptPlayerSelection(roundNumber) {
  let playerSelection;
  do {
    playerSelection = prompt(`Round ${roundNumber + 1}\nRock, Paper, or Scissors?`).toLowerCase();
  } while (!isValidInput(playerSelection))

  return playerSelection;
} //argument roundNumber; playerSelection is made via input prompt. Input selection options are for user to type in rock paper or scissors. roundNumber is passed in to become an integer that incerements i.e. Round "1". Round "2", etc. Return the player's choice.
//If user inputs any option besides the 3 choices or no input at all and click ok, user will be prompted for an error thrown via isValidInput function. So while choice(playerSelection) is not valid, throw error prompt.

function isValidInput(input) {
  if (OPTIONS.includes(input)) {
    return true;
  }
  alert('Invalid Input');
  return false;
} //function that logs input from user to console. if option choices via array (includes) from user is true, then returns input as valid. if input is invalid, user input is false and alert is thrown.

function gameFlow(roundNumber) {
  const playerSelection = promptPlayerSelection(roundNumber); //playerSelection comes from user's input
  const computerSelection = computerPlay(); //computerSelection comes from the computerPlay function which the selection comes from the array options like the playerSelection
  console.log(playerSelection, computerSelection); //logs to console the players input selection and computers selection.
  game(playerSelection, computerSelection); //run game function with the compuuter and player selections as params.
}

function game(playerSelection, computerchoice) { //game logic
  if (playerSelection == 'rock' && computerchoice == "rock") {
    alert('Player chose: ' + playerSelection + '; Computer chose: ' + computerchoice + '; It\'s a Draw!');
    draw();
  } else if (playerSelection == 'rock' && computerchoice == "paper") {
    alert('Player chose: ' + playerSelection + '; Computer chose: ' + computerchoice + '; I beat you!');
    keepScoreComputer();
  } else if (playerSelection == 'rock' && computerchoice == "scissors") {
    alert('Player chose: ' + playerSelection + '; Computer chose: ' + computerchoice + '; You beat me!');
    keepScorePlayer();
  } else if (playerSelection == 'paper' && computerchoice == "paper") {
    alert('Player chose: ' + playerSelection + '; Computer chose: ' + computerchoice + '; It\'s a Draw!');
    draw();
  } else if (playerSelection == 'paper' && computerchoice == "rock") {
    alert('Player chose: ' + playerSelection + '; Computer chose: ' + computerchoice + '; You beat me!');
    keepScorePlayer();
  } else if (playerSelection == 'paper' && computerchoice == "scissors") {
    alert('Player chose: ' + playerSelection + '; Computer chose: ' + computerchoice + '; I beat you!');
    keepScoreComputer();
  } else if (playerSelection == 'scissors' && computerchoice == "scissors") {
    alert('Player chose: ' + playerSelection + '; Computer chose: ' + computerchoice + '; It\'s a Draw!');
    draw;
  } else if (playerSelection == 'scissors' && computerchoice == "rock") {
    alert('Player chose: ' + playerSelection + '; Computer chose: ' + computerchoice + '; I beat you!');
    keepScoreComputer();
  } else if (playerSelection == 'scissors' && computerchoice == "paper") {
    alert('Player chose: ' + playerSelection + '; Computer chose: ' + computerchoice + '; You beat me!');
    keepScorePlayer();
  } else {
    alert("Game Error(s)");
  }

}

function keepScorePlayer() {
  playerScore = playerScore + 1;
  console.log(playerScore, computerScore);
}

function keepScoreComputer() {
  computerScore = computerScore + 1;
  console.log(playerScore, computerScore);
}

function draw() {
  playerScore = playerScore;
  computerScore = computerScore;
  console.log(playerScore, computerScore)
}

function updateScores(updatePrompt) {
  playerScore = playerScore;
  computerScore = computerScore;
  if (playerScore > computerScore) {
    updatePrompt = alert(`You are the winner!\nScore was Player: ${playerScore} round(s) won, Computer: ${computerScore} round(s) won`)
  } else if (playerScore < computerScore) {
    updatePrompt = alert(`You lose. The computer is the winner!\nScore was Player: ${playerScore} round(s) won, Computer: ${computerScore} round(s) won`)
  } else {
    updatePrompt = alert("Nobody won. It was a draw.")
  }
}

function clearScores() {
  playerScore = 0;
  computerScore = 0;
}

function playAgain() {
  if (confirm('Play again?')) {
    clearScores();
    playGame(); //if users selects ok from prompt then playGame function is executed and runs the whole program again from scratch beginning.
  } else {
    return; //exit
  }
}

function playGame() {
  for (let round = 0; round < 5; round++) { //loop that iterates everytime gameflow is ran. each round of the game is an iteration that increments each time gameFlow is ran. Stops after round 5.
    gameFlow(round); //gameFlow takes round variable and passes the iteration and increments each time gameflow is ran.
  }
  updateScores();
  alert('Game Over') //after 5 loops, game over is alerted.
  playAgain(); // run playGame function for player choice to play game again or not.
}

playGame(); //main function that kicks off loop to run gameflow logic as well keep track times played.
