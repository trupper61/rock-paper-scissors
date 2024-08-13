let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById('results');

function updateResults(message){
    resultsDiv.textContent = message;
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
    updateResults(resultMessage);
    console.log(`Score: Human ${humanScore} - ${computerScore} Computer`); 
}