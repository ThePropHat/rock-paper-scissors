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
