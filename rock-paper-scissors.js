function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1; //Generate random number 1-3

    if (randomNumber===1){
        return "Rock";
    }

    else if (randomNumber===2){
        return "Scissors";

    }
   
    else{
        return "Paper";
    }
}

getComputerChoice()