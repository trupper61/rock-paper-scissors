let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getHumanChoice() {
    const message = "Please choose: Rock, Paper or Scissor.";
    const choice = prompt(message).toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissor"){
        return choice;
    } else {
        alert("Wrong input! Please enter a valid input.");
        return getHumanChoice();
    }
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

function playGame(){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);

    if (humanScore < 5 && computerScore < 5){
        playGame();
    }else if(humanScore === 5){
        console.log(`You win! Congrats :)\nFinal Score: Human ${humanScore} - ${computerScore} Computer`);
    }else {
        console.log(`You loose! Try next time harder ;)\nFinal Score: Human ${humanScore} - ${computerScore} Computer`);
    }
}