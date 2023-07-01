function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    var val;
    if (choice == 0){
        val="rock";
    } else if (choice == 1){
        val="paper";
    } else if (choice == 2){
        val="scissors";
    }
    return val;
}

var playerSelect = prompt("Enter Choice");
var computerSelect = "rock";

function playRound(playerSelect, computerSelect) {
    if (playerSelect=="paper" && computerSelect=="rock") {
        console.log("You win! Paper beats Rock");
    } else if (playerSelect=="rock" && computerSelect=="scissors") {
        console.log("You win! Rock beats Scissors");
    } else if (playerSelect=="scissors" && computerSelect=="paper") {
        console.log("You win! Scissors beats paper");
  }
}

playRound(playerSelect,computerSelect);