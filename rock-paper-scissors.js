



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
    if (humanChoice === "rock" && cpuChoice === "Rock"){
        return "You Tied! Zero points!"}
    else if (humanChoice === "rock" && cpuChoice === "Paper"){
        return "Paper beats rock! 1 point to CPU!"}
    else if (humanChoice === "rock" && cpuChoice === "Scissors"){
        return "Rock beats scissors! 1 point to Player!" }

    //User picks Paper
    else if (humanChoice === "paper" && cpuChoice === "Paper"){
        return "You Tied! Zero points!"}
    else if (humanChoice === "paper" && cpuChoice === "Scissors"){
        return "Scissors beats paper! 1 point to CPU!" }
    else if (humanChoice === "paper" && cpuChoice === "Rock"){
        return "Paper beats rock! 1 point to Player!"}

    //User picks Scissors
    else if (humanChoice === "scissors" && cpuChoice === "Paper"){
        return "Scissors beats paper! 1 point to Player!"}
    else if (humanChoice === "scissors" && cpuChoice === "Scissors"){
        return "You Tied! Zero points!" }
    else if (humanChoice === "scissors" && cpuChoice === "Rock"){
        return "Rock beats scissors! 1 point to CPU!" }

    //String unrecognized
    else {
        return "You must pick rock, paper, or scissors!"
        }
}
const humanChoice = getHumanChoice();
console.log(humanChoice)

