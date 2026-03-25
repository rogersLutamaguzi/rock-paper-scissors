'use strict';
const score = JSON.parse(localStorage.getItem('score'));

function playGame(playerMove) {
	const computerMove = pickComputerMove();
	let result = '';
	if (playerMove === 'rock') {
		if (computerMove === 'scissors') {
			result = 'You win';
		} else if (computerMove === 'paper') {
			result = 'You lose';
		} else {
			result = 'Its a tie';
		}
	}
	if (playerMove === 'paper') {
		if (computerMove === 'scissors') {
			result = 'You lose';
		} else if (computerMove === 'paper') {
			result = 'Its a tie';
		} else {
			result = 'You win';
		}
	}
	if (playerMove === 'scissors') {
		if (computerMove === 'scissors') {
			result = 'Its a tie';
		} else if (computerMove === 'paper') {
			result = 'You win';
		} else {
			result = 'You lose';
		}
	}
	if (result === 'You win') {
		score.wins += 1;
	} else if (result === 'You lose') {
		score.losses += 1;
	} else {
		score.ties += 1;
	}
	localStorage.setItem('score', JSON.stringify(score));
	// This shows the result on the webpage screen
	alert(
		`The computer selected: ${computerMove} and you selected: ${playerMove} therefore ${result}:
wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`,
	);
}

function pickComputerMove() {
	// generating computer move
	let computerMove = '';
	const randomNumber = Math.random();

	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		computerMove = 'rock';
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = 'paper';
	} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		computerMove = 'scissors';
	}

	// This logs the result to the F12 Console
	console.log(`The computer selected: ${computerMove}`);

	return computerMove;
}
