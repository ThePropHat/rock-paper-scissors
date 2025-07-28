
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3); //Generate random number 0-2
    
    if (randomNumber===0){
        compChoice = "rock";
    }

    else if (randomNumber===1){
        compChoice = "Paper";
    }
   
    else{
        compChoice = "Scissors";
    }
    return compChoice
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase(); //Ask player for choice, convert to lower case
    return humanChoice
}

function playGame(humanChoice, compChoice){
    let humanScore = 0
    let cpuScore = 0

    if (humanChoice === "rock" && compChoice === "scissors" || humanChoice === "scissors" && compChoice === "paper" || humanChoice === "paper" && compChoice === "rock"){
        console.log(`${humanChoice} beats ${compChoice}! You get 1 point!`)
        ++humanScore;}

    else if (humanChoice === "scissors" && compChoice === "rock" || humanChoice === "paper" && compChoice === "scissors" || humanChoice === "rock" && compChoice === "paper"){
        console.log(`${humanChoice} is beat by ${compChoice}! Computer gets 1 point!`)
        ++cpuScore;}

   else if (humanChoice===compChoice){
    console.log(`${humanChoice} is the same as ${compChoice}! No points awarded!`)}

   else{
    console.log("Please type rock, paper, or scissors.")
   }

}


