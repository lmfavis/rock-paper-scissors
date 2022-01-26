let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('.user-score');
const computerScore_span = document.querySelector('.computer-score');
const result_p = document.querySelector('.result > p');
const rockChoice_div = document.getElementById('r');
const paperChoice_div = document.getElementById('p');
const scissorsChoice_div = document.getElementById('s');
const reset_i = document.querySelector('.reset-button');

function reset() {
	userScore = 0;
	computerScore = 0;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = 'Game reset!';
}

function convert(choice) {
	if (choice === 'r') return 'Rock';
	else if (choice === 'p') return 'Paper';
	else return 'Scissors';
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	const userTag = '<i class="fa fa-user"></i>'
		.fontsize(4)
		.fontcolor('#e34d6b')
		.sup();
	const computerTag = '<i class="fa fa-desktop"></i>'
		.fontsize(4)
		.fontcolor('#e34d6b')
		.sup();
	result_p.innerHTML = `${convert(userChoice)}${userTag} beats ${convert(
		computerChoice
	)}${computerTag}. You win!`;
	const currChoice = document.getElementById(userChoice);
	currChoice.classList.add('green-glow');
	setTimeout(() => currChoice.classList.remove('green-glow'), 400);
}

function lose(userChoice, computerChoice) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	const userTag = '<i class="fa fa-user"></i>'
		.fontsize(4)
		.fontcolor('#e34d6b')
		.sup();
	const computerTag = '<i class="fa fa-desktop"></i>'
		.fontsize(4)
		.fontcolor('#e34d6b')
		.sup();
	result_p.innerHTML = `${convert(userChoice)}${userTag} loses to ${convert(
		computerChoice
	)}${computerTag}. You lose!`;
	const currChoice = document.getElementById(userChoice);
	currChoice.classList.add('red-glow');
	setTimeout(() => currChoice.classList.remove('red-glow'), 400);
}

function draw(userChoice, computerChoice) {
	const userTag = '<i class="fa fa-user"></i>'
		.fontsize(4)
		.fontcolor('#e34d6b')
		.sup();
	const computerTag = '<i class="fa fa-desktop"></i>'
		.fontsize(4)
		.fontcolor('#e34d6b')
		.sup();
	result_p.innerHTML = `${convert(userChoice)}${userTag} equals ${convert(
		computerChoice
	)}${computerTag}. It's a draw!`;
	const currChoice = document.getElementById(userChoice);
	currChoice.classList.add('gray-glow');
	setTimeout(() => currChoice.classList.remove('gray-glow'), 400);
}

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomVal = Math.floor(Math.random() * 3);
	return choices[randomVal];
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'rs':
		case 'sp':
		case 'pr':
			win(userChoice, computerChoice);
			break;
		case 'ps':
		case 'sr':
		case 'rp':
			lose(userChoice, computerChoice);
			break;
		default:
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rockChoice_div.addEventListener('click', () => game('r'));
	paperChoice_div.addEventListener('click', () => game('p'));
	scissorsChoice_div.addEventListener('click', () => game('s'));
	reset_i.addEventListener('click', () => reset());
}

main();
