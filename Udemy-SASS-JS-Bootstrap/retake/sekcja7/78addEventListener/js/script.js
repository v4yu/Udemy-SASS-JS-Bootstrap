const buttonFirst = document.querySelector('#btn1')
const buttonSecond = document.querySelector('.btn2')

function clickButtonFirst() {
	console.log('Kliknuięto pierwszy przycisk')
}

function clickButtonSecond(x, y) {
	console.log(x + y)
}

buttonFirst.addEventListener('click', clickButtonFirst)

buttonSecond.addEventListener('click', function () {
	clickButtonSecond(2, 3)
})
