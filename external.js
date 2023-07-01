function getComputerChoice() {
    return "rock";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection="paper" && computerSelection="rock") {
        return "You Win! Paper beats Rock";
    }
    if (playerSelection="scissor" && computerSelection="rock") {
        return "You lose! Rock beats scissor";
    }
    if (playerSelection="scissor" && computerSelection="paper") {
        return "You Win! scissor beats paper";
    }
  }
   
  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
