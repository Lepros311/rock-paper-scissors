const RPS = ['rock', 'paper', 'scissors'];
let playerSelection = '';

function getComputerChoice() {
    let computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
    return computerChoice;
}

let computerSelection = ';'

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Please type 'rock', 'paper', or 'scissors': ");
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    console.log(`Player choice is ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`);
        console.log(`Computer choice is ${computerSelection.charAt(0).toUpperCase() +   computerSelection.slice(1)}.`);
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                return 'You tied!';
            }
            else if (computerSelection === 'paper') {
                return 'You lose! Paper beats Rock.';
            }
            else {
                return 'You win! Rock beats Scissors.';
            }
            break;
        case 'paper':
            if (computerSelection === 'paper') {
                    return 'You tied!';
            }
            else if (computerSelection === 'scissors') {
                return 'You lose! Scissors beats Paper.';
            }
            else {
                return 'You win! Paper beats Rock.';
            }
            break;
        case 'scissors':
            if (computerSelection === 'scissors') {
                return 'You tied!';
            }
            else if (computerSelection === 'rock') {
                return 'You lose! Rock beats Scissors.';
            }
            else {
                return 'You win! Scissors beats Paper.';
            }
            break;
        default:
            return 'Sorry, that is not a valid option. Please try again.';
        }
}

function playGame(playerSelection, computerSelection) {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let gameResults = playRound(playerSelection, computerSelection);
        console.log(gameResults);
        if (gameResults.includes('You tied!')) {
            console.log(`Player Score = ${playerScore}, Computer Score = ${computerScore}`);
        }
        else if (gameResults.includes('You win!')) {
            playerScore++;
            console.log(`Player Score = ${playerScore}, Computer Score = ${computerScore}`);
        }
        else {
            computerScore++;
            console.log(`Player Score = ${playerScore}, Computer Score = ${computerScore}`);
        }
    }
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (computerScore > playerScore) {
        console.log("You lose!");
    }
    else {
        console.log("You tied!");
    }
}

playGame(playerSelection, computerSelection);