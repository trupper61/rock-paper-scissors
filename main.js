let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById('resultMessage');
const results = document.getElementById('result');

function updateResults(message, message2){

    resultsDiv.textContent = message;
    results.textContent = message2;

    if (humanScore >= 5){
        resultsDiv.textContent = "You Win! Congratulations.";
        disableButtons();
    } else if(computerScore >= 5){
        resultsDiv.textContent = "You loose! Try harder.";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissor').disabled = true;
}

document.getElementById('rock').addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});
document.getElementById('paper').addEventListener('click', function() {
    playRound('paper', getComputerChoice());
});
document.getElementById('scissor').addEventListener('click', function() {
    playRound('scissor', getComputerChoice());
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(humanChoice, computerChoice) {
    let resultMessage = '';

    if (humanChoice == computerChoice){
        resultMessage = `Even! Both choose ${humanChoice}.`;
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ){
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else{
        resultMessage = `You loose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    updateResults(resultMessage, `Score: Human ${humanScore} - ${computerScore} Computer`);
}