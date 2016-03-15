////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    var answer = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    return answer;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var playerMove = move.toLowerCase();// Write an expression that operates on a variable called `move`
    if (playerMove === 'rock' || playerMove === 'paper' || playerMove === 'scissors') {// If a `move` has a value, your expression should evaluate to that value.
        return playerMove;
    } else {
       return getInput();
    }
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    /* Your Expression */;
}

function getComputerMove(move) {
    var computerMove = move;// Write an expression that operates on a variable called `move`
    if (computerMove === 'rock' || computerMove === 'paper' || computerMove === 'scissors') {// If a `move` has a value, your expression should evaluate to that value.
        return computerMove;
    } else {
       return randomPlay();
    }
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    /* Your Expression */
}

function getWinner(playerMove,computerMove) {
    
    if (
            (playerMove === 'rock' && computerMove === 'scissors') ||
            (playerMove === 'paper' && computerMove === 'rock') ||
            (playerMove === 'scissors' && computerMove === 'paper')
        ) {
        console.log('Player wins');
        return 'player';
    } else if (playerMove === computerMove) {
        console.log('It\'s a tie!');
        return 'tie';
    } else {
        console.log('Computer wins...');
        return 'computer';
    }// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    

    while(playerWins < 5 && computerWins < 5) {
       var playerInput = getPlayerMove(getInput());
       var computerInput = getComputerMove(randomPlay());
       var winner = getWinner(playerInput, computerInput);
        if (winner === 'player') {
            playerWins += 1;
        } else if( winner === 'tie') {
            playerWins += 1;
            computerWins += 1;
        } else {
            computerWins += 1;
        }
        console.log('Player Score = ' + playerWins,'Computer Score = ' + computerWins);
    }
    if (playerWins > computerWins) {
        console.log('Player Wins')
    } else {
        console.log('Computer Wins :\'(');
    }
}

playToFive();