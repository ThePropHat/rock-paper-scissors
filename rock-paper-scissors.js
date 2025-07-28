  let humanScore = 0
    let cpuScore = 0

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3); //Generate random number 0-2
    
    if (compChoice===0){
        return "rock";
    }

    else if (compChoice===1){
        return "paper";
    }
   
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Rock, Paper, Scissors?").toLowerCase(); //Ask player for choice, convert to lower case
}

function playGame(){
    function playRound(humanChoice, compChoice){
  

    if ((humanChoice === "rock" && compChoice === "scissors") || (humanChoice === "scissors" && compChoice === "paper") || (humanChoice === "paper" && compChoice === "rock")){
        console.log(`${humanChoice} beats ${compChoice}! You get 1 point!`)
        ++humanScore;}

    else if ((humanChoice === "scissors" && compChoice === "rock") || (humanChoice === "paper" && compChoice === "scissors") || (humanChoice === "rock" && compChoice === "paper")){
        console.log(`${humanChoice} is beat by ${compChoice}! Computer gets 1 point!`)
        ++cpuScore;}

   else if (humanChoice===compChoice){
    console.log(`${humanChoice} is the same as ${compChoice}! No points awarded!`)}

   else{
    console.log("Please type rock, paper, or scissors.")}

}
        const compChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(compChoice, humanChoice);
    console.log(`Your score is ${humanScore} and computer score is ${cpuScore}`)
    if ((cpuScore === 3) || (humanScore === 3)){
        console.log("Winner!")
    }

};

playGame();
playGame();
playGame();
playGame();
playGame();
