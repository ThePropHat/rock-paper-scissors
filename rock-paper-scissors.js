
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3); //Generate random number 0-2

    if (randomNumber===0){
        return "Rock";
    }

    else if (randomNumber===1){
        return "Scissors";
    }
   
    else{
        return "Paper";
    }
}
const cpuChoice = getComputerChoice();
getComputerChoice()
console.log(cpuChoice)



function getHumanChoice(){
   let humanChoice=prompt("Rock, Paper, Scissors?").toLowerCase(); //Ask player for choice, convert to lower case

    //If user picks Rock
    if (humanChoice === "rock"){
        return "Rock";
    }
    //User picks Paper
    else if (humanChoice === "paper" ){
        return "Paper";}
    
    //User picks Scissors
    else if (humanChoice === "scissors"){
        return "Scissors"}
   
    //String unrecognized
    else {
        return "You must pick rock, paper, or scissors!"
        }
}
const humanChoice = getHumanChoice();
console.log(humanChoice)

let humanScore;
let computerScore;


