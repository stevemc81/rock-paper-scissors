function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors'
    };
};

function getHumanChoice() {
    return prompt('Choose rock, paper or scissors.')
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result = '';

    if (humanChoice === 'rock') {
        switch (computerChoice) {
            case 'rock':
                result = 'Draw!';
                break
            case 'paper':
                result = 'You lose! Paper beats rock.';
                computerScore += 1;
                break
            case 'scissors':
                result = 'You win! Rock beats scissors.'
                humanScore += 1;
                break
        }
    } else if (humanChoice === 'paper') {
        switch (computerChoice) {
            case 'paper':
                result = 'Draw!';
                break
            case 'scissors':
                result = 'You lose! Scissors beats paper.';
                computerScore += 1;
                break
            case 'rock':
                result = 'You win! Paper beats rock.'
                humanScore += 1;
                break
        }
    } else if (humanChoice === 'scissors') {
        switch (computerChoice) {
            case 'scissors':
                result = 'Draw!';
                break
            case 'rock':
                result = 'You lose! Rock beats scissors.';
                computerScore += 1;
                break
            case 'paper':
                result = 'You win! Scissors beats paper.'
                humanScore += 1;
                break
        }
    }
    console.log(result);
}

const humanSelection = getHumanChoice();
console.log(humanSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
playRound(humanSelection, computerSelection);