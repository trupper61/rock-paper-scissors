let humanScore = 0;
let computerScore = 0;

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
    if (humanChoice == computerChoice){
        console.log(`Even! Both choose ${humanChoice}.`);
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else{
        console.log(`You loose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    console.log(`Score: Human ${humanScore} - ${computerScore} Computer`); 
}