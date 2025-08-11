let humanScore=0;
let clankerScore=0;

function getClankerChoice(){
    let choice = Math.floor(Math.random()*(3) + 1);
    
    if (choice === 1) return "rock";
    else if(choice === 2) return "paper";
    return "scissors";

}

function getUserChoice(){
    const userChoice = prompt("Rock, paper, scissor?");
    return userChoice.toLowerCase();
}


function playRound(userChoice, clankerChoice){
    console.log("the clanker has picked ", clankerChoice)
      
    if ( //player wins
        (userChoice === "rock" && clankerChoice === "scissors" ) || 
        (userChoice === "scissors" && clankerChoice === "paper") ||
        (userChoice === "paper" && clankerChoice === "rock")){
            
        humanScore++
        console.log( "you picked " + userChoice + ". you win! here, have a point! | you: " + humanScore + " - clanker: " + clankerScore)
    }

    else if( //player loses
        (userChoice === "scissors" && clankerChoice === "rock" ) ||  
        (userChoice === "paper" && clankerChoice === "scissors") ||
        (userChoice === "rock" && clankerChoice === "paper")){
               
        clankerScore++
        console.log( "you picked " + userChoice + ". you lost...the clanker gets a point. | you: " + humanScore + " - clanker: " + clankerScore)    
    }

    else if(userChoice === clankerChoice){ //player input = clanker
        
            console.log( "you and the clanker tied! are you cheating? | you: " + humanScore + " - clanker: " + clankerScore)
    }

    else{ //bad input
        console.log( "please pick rock paper or scissors.... | you: " + humanScore + " - clanker: " + clankerScore)
    }

}

while(humanScore < 3 && clankerScore < 3){
const userChoice = getUserChoice();
const clankerChoice = getClankerChoice()

playRound(userChoice, clankerChoice);}

console.log("Thanks for playing!")
