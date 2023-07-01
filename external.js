function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0){
        return "rock";
    } else if (choice == 1){
        return "paper";
    } else if(choice == 2){
        return "scissors";
    }
}

let playerSelect = prompt("Enter Choice");
let computerSelect = getComputerChoice();

function playRound(playerSelect, computerSelect) {
    if (playerSelect=="paper" && computerSelect=="rock") {
        console.log("You win! Paper beats Rock");
    } else if (playerSelect=="rock" && computerSelect=="scissors") {
        console.log("You win! Rock beats Scissors");
    } else if (playerSelect=="scissors" && computerSelect=="paper") {
        console.log("You win! Scissors beats paper");
  }
}
