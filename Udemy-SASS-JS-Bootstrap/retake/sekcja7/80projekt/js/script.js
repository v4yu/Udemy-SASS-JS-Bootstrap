const arrow = document.querySelector('.fas')
const arrowButton = document.querySelector('.arrow')
const hiddenPicture = document.querySelector('.item1')

function showPicture() {
	hiddenPicture.classList.toggle('show')

	if (hiddenPicture.classList.contains('show')) {
		arrow.style.rotate = '180deg'
	} else {
		arrow.style.rotate = '0deg'
	}
}

arrowButton.addEventListener('click', showPicture)
