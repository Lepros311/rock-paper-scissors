const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');
const rpsButtons = document.querySelectorAll('.rps-btn');
const playerSelectionP = document.querySelector('.player-selection-p');
const computerSelectionP = document.querySelector('.computer-selection-p');
const roundResultsP = document.querySelector('.round-results-p');
const scoreP = document.querySelector('.score-p');
const gameResultsP = document.querySelector('.game-results-p');

const RPS = ['rock', 'paper', 'scissors'];
let playerSelection = '';

function getComputerChoice() {
    let computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
    return computerChoice;
}

function printComputerChoice(computerSelection) {
    computerSelectionP.textContent = `Computer choice is ${computerSelection.charAt(0).toUpperCase() +   computerSelection.slice(1)}.`;
}

let computerSelection = '';

function playRound(playerSelection, computerSelection) {
    // playerSelection = prompt("Please type 'rock', 'paper', or 'scissors': ");
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    playerSelectionP.textContent = `Player choice is ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`;
    if (RPS.includes(playerSelection)) {
        printComputerChoice(computerSelection);
    }
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

let roundResults = null;

function playGame(roundResults, computerSelection) {
    let computerScore = 0;
    let playerScore = 0;
    rpsButtons.forEach((button) => {
        button.addEventListener('click', function (e) {
            roundResults = playRound(e.target.id, computerSelection);
        });
    });
    for (let i = 1; i <= 5; i++) {    
        roundResultsP.textContent = `${roundResults}`;
        if (roundResults.includes('You tied!')) {
            scoreP.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
        }
        else if (roundResults.includes('You win!')) {
            playerScore++;
            scoreP.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
        }
        else if (roundResults.includes('You lose!')) {
            computerScore++;
            scoreP.textContent = `Player Score = ${playerScore}, Computer Score = ${computerScore}`;
        }
        else {
            i--;
        }
    }
    if (playerScore > computerScore) {
        gameResultsP.textContent = "You win!";
    }
    else if (computerScore > playerScore) {
        gameResultsP.textContent = "You lose!";
    }
    else {
        gameResultsP.textContent = "You tied!";
    }
}

playGame(playerSelection, computerSelection);