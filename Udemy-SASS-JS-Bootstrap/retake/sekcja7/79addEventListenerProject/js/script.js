const buttonRed = document.querySelector('#btn1')
const buttonBlue = document.querySelector('.btn2')

const color = document.querySelector('.color')

const removeColor = document.querySelector('.remove-color')

function redColor() {
	// color.classList.add('red')
	// color.classList.remove('blue')

	color.classList.toggle('red')
}

function blueColor() {
	color.classList.add('blue')
	color.classList.remove('red')
}

function remove() {
	color.classList.remove('red')
	color.classList.remove('blue')
}

buttonRed.addEventListener('click', redColor)

buttonBlue.addEventListener('click', blueColor)

removeColor.addEventListener('click', remove)
