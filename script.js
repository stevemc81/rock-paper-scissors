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

console.log(getComputerChoice());

function getHumanChoice() {
    return prompt('Choose rock, paper or scissors.')
}

console.log(getHumanChoice());