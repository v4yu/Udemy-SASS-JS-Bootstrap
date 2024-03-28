document.addEventListener('DOMContentLoaded', function () {
	const navigation = document.querySelector('.navbar')

	function addShadow() {
		if (window.scrollY >= 175) {
			navigation.classList.add('shadow-bg')
		} else {
			navigation.classList.remove('shadow-bg')
		}
	}

	window.addEventListener('scroll', addShadow)
})
