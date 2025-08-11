let humanScore=0;
let clankerScore=0;

function getClankerChoice(){
    let choice = Math.floor(Math.random()*(3) + 1);
    
    if (choice === 1){
        return "rock"
    }

    else if(choice === 2){
        return "paper"
    }

    else if(choice === 3){
        return "scissors"
    }

}

const clankerChoice = getClankerChoice()
getClankerChoice()
console.log("the clanker has picked ", clankerChoice)

function getUserChoice(){
    const userChoice = prompt("Rock, paper, scissor?");
    const lowerUserChoice = userChoice.toLowerCase();

    if ((lowerUserChoice === "rock" && clankerChoice === "scissors" ) || 
        (lowerUserChoice === "scissors" && clankerChoice === "paper") ||
        (lowerUserChoice === "paper" && clankerChoice === "rock")){
        return "you picked " + userChoice + ". you win! here, have a point!"
    }

    else if((lowerUserChoice === "scissors" && clankerChoice === "rock" ) || 
        (lowerUserChoice === "paper" && clankerChoice === "scissors") ||
        (lowerUserChoice === "rock" && clankerChoice === "paper")){
            return "you picked " + userChoice + ". you lost...the clanker gets a point"

    }

    else if(lowerUserChoice === clankerChoice){
        return "you and the clanker tied! are you cheating?"
    }

    else{
        return "please pick rock paper or scissors...."
    }


}

const userChoice = getUserChoice()
console.log(userChoice)