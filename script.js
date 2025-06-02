let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

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

const humanChoice = document.querySelector('#human-choice');
humanChoice.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }
});

function playRound(humanChoice, computerChoice) {
    const result = document.querySelector('#result');
    const score = document.querySelector('#score');

    if (humanChoice === 'rock') {
        switch (computerChoice) {
            case 'rock':
                result.textContent = 'Draw!';
                break
            case 'paper':
                result.textContent = 'You lose! Paper beats rock.';
                computerScore += 1;
                break
            case 'scissors':
                result.textContent = 'You win! Rock beats scissors.'
                humanScore += 1;
                break
        }
    } else if (humanChoice === 'paper') {
        switch (computerChoice) {
            case 'paper':
                result.textContent = 'Draw!';
                break
            case 'scissors':
                result.textContent = 'You lose! Scissors beats paper.';
                computerScore += 1;
                break
            case 'rock':
                result.textContent = 'You win! Paper beats rock.'
                humanScore += 1;
                break
        }
    } else if (humanChoice === 'scissors') {
        switch (computerChoice) {
            case 'scissors':
                result.textContent = 'Draw!';
                break
            case 'rock':
                result.textContent = 'You lose! Rock beats scissors.';
                computerScore += 1;
                break
            case 'paper':
                result.textContent = 'You win! Scissors beats paper.'
                humanScore += 1;
                break
        }
    }

    score.textContent = `Human ${humanScore} - ${computerScore} Computer`;

    if (humanScore === winningScore || computerScore === winningScore) {
        if (humanScore > computerScore) {
            score.textContent = `GAME OVER! You won ${humanScore} - ${computerScore}.`;
        } else {
            score.textContent = `GAME OVER! You lost ${humanScore} - ${computerScore}.`;
        }

        // Disable buttons
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
    }
}