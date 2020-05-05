const button = document.querySelectorAll("#choices button");

button.forEach(function (buttons) {
  buttons.addEventListener("click", playerPlay);
});

let computerPlay = () => {
  let cpuChoices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return cpuChoices[index];
};

function playerPlay(e) {
  const playerSelection = e.target.innerText;
  playRound(playerSelection, computerPlay());
}

function playRound(playerChoice, computerChoice) {
  let playerScore = document.querySelector(".playerScore");
  let computerScore = document.querySelector(".cpuScore");
  let results = document.querySelector("#results");
  let computerLogo = document.querySelector("#computer-logo");
  let playerLogo = document.querySelector("#player-logo");
  let playAgain = document.querySelector("#playAgain");

  if (playerChoice === "Rock") {
    playerLogo.classList.add("fa-hand-rock");
    if (computerChoice === "rock") {
      computerLogo.classList.add("fa-hand-rock");
      results.innerHTML = "Its a tie! Play again.";
    } else if (computerChoice === "scissors") {
      computerLogo.classList.add("fa-hand-scissors");
      playerScore.innerText = parseInt(playerScore.innerText) + 1;
      results.innerHTML = "You win!";
    } else {
      computerLogo.classList.add("fa-hand-paper");
      computerScore.innerText = parseInt(computerScore.innerText) + 1;
      results.innerHTML = "You lost:(";
    }
  } else if (playerChoice === "Scissors") {
    playerLogo.classList.add("fa-hand-scissors");
    if (computerChoice === "rock") {
      computerLogo.classList.add("fa-hand-rock");
      computerScore.innerText = parseInt(computerScore.innerText) + 1;
      results.innerHTML = "You lost:(";
    } else if (computerChoice === "scissors") {
      computerLogo.classList.add("fa-hand-scissors");
      results.innerHTML = "Its a tie! Play again.";
    } else {
      computerLogo.classList.add("fa-hand-paper");
      playerScore.innerText = parseInt(playerScore.innerText) + 1;
      results.innerHTML = "You win!";
    }
  } else {
    playerLogo.classList.add("fa-hand-paper");
    if (computerChoice === "rock") {
      computerLogo.classList.add("fa-hand-rock");
      playerScore.innerText = parseInt(playerScore.innerText) + 1;
      results.innerHTML = "You win!";
    } else if (computerChoice === "scissors") {
      computerLogo.classList.add("fa-hand-scissors");
      computerScore.innerText = parseInt(computerScore.innerText) + 1;
      results.innerHTML = "You lost:(";
    } else {
      computerLogo.classList.add("fa-hand-paper");
      results.innerHTML = "Its a tie! Play again.";
    }
  }

  if (
    parseInt(playerScore.innerText) + parseInt(computerScore.innerText) ===
    5
  ) {
    button.forEach(function (button) {
      button.disabled = true;
      button.classList.add("disabled");
      gameOver(
        playerLogo,
        computerLogo,
        playerScore,
        computerScore,
        results,
        playAgain
      );
    });
    if (parseInt(playerScore.innerText) > parseInt(computerScore.innerText)) {
      results.innerHTML = "Game Over: You WON!!!!!!!!!";
    } else {
      results.innerHTML = "Game Over: You lost.";
    }
  }
}

function gameOver(
  playerLogo,
  computerLogo,
  playerScore,
  computerScore,
  results,
  play
) {
  play.style.display = "flex";
  play.addEventListener("click", function () {
    computerLogo.classList.add = "fa-question";
  });
}
let computer = document.querySelector("#computer-logo");
computer.classList.add = "fa-hand-rock";
