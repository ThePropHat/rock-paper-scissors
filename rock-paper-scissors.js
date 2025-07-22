const choiceRock = 1;
const choiceScissors = 2;
const choicePaper = 3;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 100) + 1; //Generate random number

    if (randomNumber <= 33){ //Check for numbers under 33
        return choiceRock

    } else if(randomNumber >= 66){ //Check for numbers over 66
        return choicePaper

    } else(){ //Check for numbers in between 33 and 66
        return choiceScissors

    }
 
   
}

getComputerChoice()