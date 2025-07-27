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

getComputerChoice()
console.log(cpuChoice)

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, Scissors?"); //Ask player for choice
    if (humanChoice === "rock" && cpuChoice === "Rock"){
        return "You Tied! Zero points!"
    }
    else if (humanChoice === "rock" && cpuChoice === "Paper"){
        return "Paper beats rock! 1 point to CPU!"}

    else if (humanChoice === "rock" && cpuChoice === "Scissors"){
        return "Rock beats scissors! 1 point to Player!" 
    }

}

getHumanChoice()
console.log(humanChoice)

const cpuChoice = getComputerChoice();
const humanChoice = getHumanChoice();