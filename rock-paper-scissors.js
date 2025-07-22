const choiceRock = 1;
const choiceScissors = 2;
const choicePaper = 3;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1; //Generate random number

    if (randomNumber === 1){ //Check for number 1
        return choiceRock

    } else if(randomNumber === 2){ //Check for number 2
        return choicePaper

    } else(){ //Check for number 3
        return choiceScissors

    }
 
   
}

getComputerChoice()