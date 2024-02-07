const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const paper = document.querySelector('#paper')
const resultGame = document.querySelector('#result-game')


const randomNumber = Math.random()
let computerMove = ''

function getOperators() {
	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		computerMove = 'rock'
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = 'scissors'
	} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		computerMove = "paper"
	}
}

let result = ''
let className = ''


rock.onclick = function () {
	let div = document.createElement('div')
	let span1 = document.createElement('span')
	div.appendChild(span1)
	resultGame.appendChild(div)
	let h1 = document.createElement('h1')
	div.appendChild(h1)
	div.classList.add('flex')
	getOperators()
	if (computerMove === 'rock') {
		result = 'Ничья'
		let rock = document.createTextNode(`✊✊`)
		span1.appendChild(rock)
		className = 'tie'
	} else if (computerMove === 'paper') {
		result = 'Вы проиграли'
		let paper = document.createTextNode(`✊🖐️`)
		span1.appendChild(paper)
		className = 'you__lose'
	} else if (computerMove === 'scissors') {
		result = 'Вы выиграли'
		let scissors = document.createTextNode(`✊✌️`)
		span1.appendChild(scissors)
		className = 'you__win'
	}
	let txt = document.createTextNode(`${result}`)
	h1.appendChild(txt)
	h1.classList.add(`${className}`)
}


scissors.onclick = function () {
	getOperators()
	let div = document.createElement('div')
	let span1 = document.createElement('span')
	div.appendChild(span1)
	resultGame.appendChild(div)
	let h1 = document.createElement('h1')
	div.appendChild(h1)
	div.classList.add('flex')
	if (computerMove === 'rock') {
		result = 'Вы проиграли'
		let rock = document.createTextNode(`✌️✊`)
		span1.appendChild(rock)
		className = 'you__lose'
	} else if (computerMove === 'paper') {
		result = 'Вы выиграли'
		let paper = document.createTextNode(`✌️🖐️`)
		span1.appendChild(paper)
		className = 'you__win'
	} else if (computerMove === 'scissors') {
		result = 'Ничья'
		let scissors = document.createTextNode(`✌️✌️`)
		span1.appendChild(scissors)
		className = 'tie'
	}
	let txt = document.createTextNode(`${result}`)
	h1.appendChild(txt)
	h1.classList.add(`${className}`)
}

paper.onclick = function () {
	getOperators()
	let div = document.createElement('div')
	let span1 = document.createElement('span')
	div.appendChild(span1)
	resultGame.appendChild(div)
	let h1 = document.createElement('h1')
	div.appendChild(h1)
	div.classList.add('flex')
	if (computerMove === 'rock') {
		result = 'Вы выиграли'
		let rock = document.createTextNode(`🖐️✊`)
		span1.appendChild(rock)
		className = 'you__win'
	} else if (computerMove === 'paper') {
		result = 'Ничья'
		let paper = document.createTextNode(`🖐️🖐️`)
		span1.appendChild(paper)
		className = 'tie'
	} else if (computerMove === 'scissors') {
		result = 'Вы проиграли'
		let scissors = document.createTextNode(`🖐️✌️`)
		span1.appendChild(scissors)
		className = 'you__lose'
	}
	let txt = document.createTextNode(`${result}`)
	h1.appendChild(txt)
	h1.classList.add(`${className}`)
}