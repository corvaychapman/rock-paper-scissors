let computerPlay = () => {
  let cpuChoices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return cpuChoices[index];
};

let cpuScore = 0;
let myScore = 0;

function playRound(playerSelection, computerSelection) {
  //case insensitive
  playerSelection = playerSelection.toLowerCase();

  //game rules
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "It's a tie, please play again.";
    } else if (computerSelection === "scissors") {
      myScore++;
      return "You Win!";
    } else {
      cpuScore++;
      return "You lose!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      cpuScore++;
      return "You lose!";
    } else if (computerSelection === "scissors") {
      return "It's a tie, please play again.";
    } else {
      myScore++;
      return "You Win!";
    }
  } else {
    if (computerSelection === "rock") {
      myScore++;
      return "You Win!";
    } else if (computerSelection === "paper") {
      return "It's a tie, please play again.";
    } else {
      cpuScore++;
      return "You Loose!";
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let player = prompt("Rock, paper, or scissors?").toLocaleLowerCase();
    let computer = computerPlay();
    let result = playRound(player, computer);
    console.log(result);
  }
  if (myScore > cpuScore) {
    console.log("Congrats! You won the entire game!");
  } else if (myScore === cpuScore) {
    console.log("It was a tie! Play again!");
    game();
  } else {
    console.log("You lost to the computer:(");
  }
}
game();
