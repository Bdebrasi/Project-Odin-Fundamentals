function getComputerChoice(min=1,max=3){
    const num = Math.floor(Math.random() * (max - min + 1) + min)
    if (num == 1){
        return "rock"
    } else if (num == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(firstRound){
    let choice;
    if (firstRound){
        choice = window.prompt("Welcome to rock paper scissors! Please rock, paper or scissors here:")
    } else {
        choice = window.prompt("Please rock, paper or scissors here:")
    }
    
    return choice;
}

function playRound(firstRound){
    var humanChoice = getHumanChoice(firstRound);
    var compChoice = getComputerChoice();
    
    console.log(`The human has chosen ${humanChoice}`);
    console.log(`The computer has chosen ${compChoice}`);

    if (compChoice == humanChoice){
        return "Draw";
    } else if((compChoice == "rock" && humanChoice == "paper") || (compChoice == "paper" && humanChoice == "scissors") || (compChoice == "scissors" && humanChoice == "rock")){
        return "Human wins";
    } else {
        return "Computer wins";
    }
}

function playGame(){
    var play = true;
    var humanWins = 0;
    var compWins = 0;
    var firstRound = true;
    
    while (play){
        
        var result = playRound(firstRound)
        firstRound  = false;
        
        if (result == "Draw"){
            console.log("It's a draw!");
        } else if(result == "Human wins"){
            console.log("Human wins!")
            humanWins+=1;
        } else {
            console.log("Computer wins!")
            compWins+=1;
        }
        
        console.log(`Human score is ${humanWins}. Computer score is ${compWins}.`);

        var answer = window.prompt("Would you like to play again? Enter true to continue and anything else to exit.")
        if (answer == "true"){
            play = true;
        } else {
            play = false;
        }
    }

    console.log("Thanks for playing!");
    console.log(`Final score is: Human ${humanWins}, Computer ${compWins}`);
}

playGame();
