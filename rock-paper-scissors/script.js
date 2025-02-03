var humanWins = 0;
var compWins = 0;
const winner = document.createElement("div");
const scoreCount = document.createElement("div");
const gameChoices = document.createElement("div");
const endGame = document.createElement("div");

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

function playGame(e) {
    var result = playRound(e)

    if (humanWins === 0 && compWins === 0){
        document.body.appendChild(gameChoices);
        document.body.appendChild(winner);
        document.body.appendChild(scoreCount);
    }

    if(humanWins === 5 || compWins === 5){
        return;
    }
        
    if (result == "Draw"){
        winner.textContent = "It's a draw!";
    } else if(result == "Human wins"){
        winner.textContent = "Human wins!";
        humanWins+=1;
    } else {
        winner.textContent = "Computer wins!";
        compWins+=1;
    }

    scoreCount.textContent =`Human score is ${humanWins}. Computer score is ${compWins}.`;
    if (humanWins === 5 || compWins === 5){
        document.body.removeChild(gameChoices);
        document.body.removeChild(winner);
        document.body.removeChild(scoreCount);
        document.body.appendChild(endGame);

        if (humanWins === 5 && compWins === 5){
            endGame.textContent = `Thank you for playing! The games resulted in a draw!`
        } else if (humanWins === 5){
            endGame.textContent = `Thank you for playing! The human won!`
        } else if (compWins === 5){
            endGame.textContent = `Thank you for playing! The computer won!`
        }

    }
}

function playRound(humanChoice){
    humanChoice = humanChoice.target.id;
    var compChoice = getComputerChoice();

    if (humanWins === 5 || compWins === 5){
        return;
    }

    gameChoices.textContent = `The human has chosen ${humanChoice}. The computer has chosen ${compChoice}.`;

    if (compChoice == humanChoice){
        return "Draw";
    } else if((compChoice == "rock" && humanChoice == "paper") || (compChoice == "paper" && humanChoice == "scissors") || (compChoice == "scissors" && humanChoice == "rock")){
        return "Human wins";
    } else {
        return "Computer wins";
    }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", playGame);
});
