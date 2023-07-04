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
            pscore++; 
        } else if (playerSelect=="rock" && computerSelect=="scissors") {
            pscore++; 
        } else if (playerSelect=="scissors" && computerSelect=="paper") {
            pscore++; 
        } else if (playerSelect=="paper" && computerSelect=="paper") {
            
        } else if (playerSelect=="rock" && computerSelect=="rock") {
            
        } else if (playerSelect=="scissors" && computerSelect=="scissors") {
            
        } else if (playerSelect=="rock" && computerSelect=="paper") {
            cscore++; 
        } else if (playerSelect=="scissors" && computerSelect=="rock") {
            cscore++; 
        } else if (playerSelect=="paper" && computerSelect=="scissors") {
            cscore++;
        }
        document.getElementById("Pchoice").textContent=`Player Selected : ${playerSelect}`;
        document.getElementById("Cchoice").textContent=`Computer Selected : ${computerSelect}`;
        document.getElementById("player-score").textContent=`Player Score : ${pscore}`;
        document.getElementById("comp-score").textContent=`Computer Score : ${cscore}`;
        if (pscore==5) {
            document.getElementById("final-result").textContent="The Winner Is : Player";
        } else if (cscore==5) {
            document.getElementById("final-result").textContent="The Winner Is : Computer";
        }

        
}


document.getElementById("reset").addEventListener('click', function ()
{
     pscore=0;cscore=0;
     document.getElementById("final-result").textContent="The Winner Is : ";
     document.getElementById("final-result").textContent="The Winner Is : ";
     document.getElementById("player-score").textContent=`Player Score : ${pscore}`;
     document.getElementById("comp-score").textContent=`Computer Score : ${cscore}`;
}); 


document.getElementById("rock").addEventListener('click', function ()
{
     playRound("rock", getComputerChoice());
}); 

document.getElementById("paper").addEventListener('click', function ()
{
    playRound("paper", getComputerChoice());
}); 

document.getElementById("scissors").addEventListener('click', function () 
{
    playRound("scissors", getComputerChoice());
});  

