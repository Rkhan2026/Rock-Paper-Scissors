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

var pscore=0; var cscore=0;

function playRound(playerSelect, computerSelect) {
    if (playerSelect=="paper" && computerSelect=="rock") {
        console.log("You win! Paper beats Rock"); pscore++;
    } else if (playerSelect=="rock" && computerSelect=="scissors") {
        console.log("You win! Rock beats Scissors"); pscore++;
    } else if (playerSelect=="scissors" && computerSelect=="paper") {
        console.log("You win! Scissors beats paper"); pscore++;
    } if (playerSelect=="paper" && computerSelect=="paper") {
        console.log("It's A Tie");
    } else if (playerSelect=="rock" && computerSelect=="rock") {
        console.log("It's A Tie");
    } else if (playerSelect=="scissors" && computerSelect=="scissors") {
        console.log("It's A Tie");
    } if (playerSelect=="rock" && computerSelect=="paper") {
        console.log("You Lose! Paper beats Rock"); cscore++;
    } else if (playerSelect=="scissors" && computerSelect=="rock") {
        console.log("You Lose! Rock beats Scissors"); cscore++:
    } else if (playerSelect=="paper" && computerSelect=="scissors") {
        console.log("You Lose! Scissors beats paper"); cscore++;
    }
}

function game() {
    var playerSelect = prompt("Enter Choice");
    var lcrp = playerSelect.toLowerCase();
    playerSelect = lcrp;
    var computerSelect = getComputerChoice();
    playRound(playerSelect,computerSelect);
}

game();
game();
game();
game();
game();

if (pscore>cscore) {
    console.log("Player Wins Against Computer");
} else if (cscore>pscore) {
    console.log("Computer Wins Against Player");
} else if (cscore==pscore) {
    console.log("Tie Between Player And Computer");
} 

