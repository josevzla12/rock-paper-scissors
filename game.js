
let comchoice = Math.floor(Math.random() * 3)+1;

function getComputerChoice (){
 let choice = comchoice;
 if (choice==1)
    choice ='Rock'
else if (choice == 2){ 
    choice = "Paper"}
else if (choice == 3){
    choice = "Scissors"}

return choice;
}

const playerChoice = "Paper" ;
const computerpick = getComputerChoice();


function playRound(playerSelection, computerSelection) {
playerSelection = playerChoice;
computerSelection = computerpick; 
let playerLost=0;
let playerWon=0;
console.log(computerSelection);
if (playerSelection == "Rock" && computerSelection == "Paper"){
    playerLost = 1;
}
else if (playerSelection == "Paper" && computerSelection == "Scissors") {
     playerLost = 1;}
else if (playerSelection == "Scissors" && computerSelection == "Rock"){
     playerLost = 1;}


else if (computerSelection == "Rock" && playerSelection == "Paper")
{   
    playerWon = 1;}  
else if (computerSelection == "Paper" && playerSelection == "Scissors") 
{   
    playerWon = 1;} 
else if (computerSelection == "Scissors" && playerSelection == "Rock")
{   
    playerWon = 1;} 
    
   
    if (playerWon == 1){
   
        console.log("You Won!" + " " + playerSelection + " " + "beats" + " " + computerSelection ) }
   
   else if (playerLost == 1){
   
    console.log("You Lost!" + " " + computerSelection + " " + " beats " + " " + playerSelection )}
    else 
    {
    console.log("You Tied!" + " " + computerSelection + " " + "is equal to" + " " + playerSelection)}
  }
  playRound();