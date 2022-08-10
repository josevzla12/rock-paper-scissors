


function getComputerChoice (){
let comchoice = Math.floor(Math.random() * 3)+1;
 let choice = comchoice;
 if (choice==1)
    choice ='Rock'
else if (choice == 2){ 
    choice = "Paper"}
else if (choice == 3){
    choice = "Scissors"}

return choice;
}

let pWinner;
let cWinner;

function fixedChoice () {
    let playerChoice;
    playerChoice = prompt ('Rock Paper or Scissors?') ;
   let playerFixed = playerChoice.toLowerCase();
    return playerFixed.charAt(0).toUpperCase() + playerFixed.slice(1);
  }

let playerLost;
let playerWon;

function playRound(playerSelection, computerSelection) {
playerSelection = fixedChoice();
computerSelection = getComputerChoice(); 
playerLost=0;
playerWon=0;
console.log("Computer Picked "+computerSelection);
if (playerSelection == "Rock" && computerSelection == "Paper"){
    playerLost = 1;
    
}
else if (playerSelection == "Paper" && computerSelection == "Scissors") {
   playerLost = 1; 
   
     }
else if (playerSelection == "Scissors" && computerSelection == "Rock"){
   playerLost = 1; 
   
     }

else if (computerSelection == "Rock" && playerSelection == "Paper")
{   playerWon = 1;  
    
    }  
else if (computerSelection == "Paper" && playerSelection == "Scissors") 
{    playerWon = 1;  
    } 
else if (computerSelection == "Scissors" && playerSelection == "Rock"){
    playerWon = 1;  }
    
    
   
if (playerWon == 1){
    console.log("You Won!" + " " + playerSelection + " " + "beats" + " " + computerSelection ) 
   }
else if (playerLost == 1){
    console.log("You Lost!" + " " + computerSelection + " " + " beats " + " " + playerSelection )
    }
    else 
    {
    console.log("You Tied!" + " " + computerSelection + " " + "is equal to" + " " + playerSelection)}

}

  
  function game(){
let playerScore = 0;
 let computerScore = 0;
 
      for (i = 0; i < 5; i++){
          getComputerChoice();
          playRound();
          if (playerWon == 1)
          {playerScore = playerScore + 1 }
          else if (playerLost == 1)
          {computerScore = computerScore + 1}
          console.log(playerScore + " "+ computerScore)
     
      }
   if (i == 5 && playerScore > computerScore)
        {console.log("You Won! "+playerScore + " to "+ computerScore)}
        else if (i == 5 && playerScore < computerScore)
        {console.log("You Lost! "+playerScore + " to "+ computerScore)}
        else if (i == 5 && playerScore == computerScore)
            {i= i-1}
      }
  
