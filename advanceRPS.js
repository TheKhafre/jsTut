let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function gameMode(playerMove) {
    const computerMove = pickComputerMove();

    result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'Scissors') {
            result = 'it\'s a Tie';
        } else if (computerMove === 'Rock') {
            result = 'You lose';
        } else {
            result = 'You win';
        }

    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'it\'s a Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        }

    } else {
        if (computerMove === 'Paper') {
            result = 'it\'s a Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You lose';
        } else {
            result = 'You win';
        }

    }

    if(result === 'You win'){
        score.wins += 1;
    } else if(result === 'You lose'){
        score.losses += 1;
    } else {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    
    document.querySelector('.jsMove').innerHTML = `you choose ${playerMove}, computer choose ${computerMove}.`
    
    document.querySelector('.jsResult').innerHTML = result;
}

function updateScoreElement(){
    document.querySelector('.jsScore').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function resetScore(){
    score.losses = 0;
    score.ties = 0;
    score.wins = 0;
    localStorage.removeItem('score');
    alert('score reset successfully');
    updateScoreElement();
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    return computerMove;
}