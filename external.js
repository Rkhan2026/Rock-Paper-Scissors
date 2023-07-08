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
            document.getElementById("rock").removeEventListener('click', roc);
            document.getElementById("paper").removeEventListener('click', pap);
            document.getElementById("scissors").removeEventListener('click', sci);
        } else if (cscore==5) {
            document.getElementById("final-result").textContent="The Winner Is : Computer";
            document.getElementById("rock").removeEventListener('click', roc);
            document.getElementById("paper").removeEventListener('click', pap);
            document.getElementById("scissors").removeEventListener('click', sci);
        }         
}

function roc(){
    playRound("rock", getComputerChoice());
}; 

function pap(){
   playRound("paper", getComputerChoice());
};

function sci() {
   playRound("scissors", getComputerChoice());
};  

document.getElementById("rock").addEventListener('click', roc);

document.getElementById("paper").addEventListener('click', pap);

document.getElementById("scissors").addEventListener('click', sci);

document.getElementById("reset").addEventListener('click', function ()
{
     pscore=0;cscore=0;
     document.getElementById("Pchoice").textContent=`Player Selected : `;
     document.getElementById("Cchoice").textContent=`Computer Selected : `;
     document.getElementById("player-score").textContent=`Player Score : ${pscore}`;
     document.getElementById("comp-score").textContent=`Computer Score : ${cscore}`;
     document.getElementById("final-result").textContent="The Winner Is : ";
     document.getElementById("rock").addEventListener('click', roc);
     document.getElementById("paper").addEventListener('click', pap);
     document.getElementById("scissors").addEventListener('click', sci);  
}); 

