const choiceRock = 1;
const choiceScissors = 2;
const choicePaper = 3;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1; //Generate random number 1-3
    console.log(randomNumber)
   
}

getComputerChoice()