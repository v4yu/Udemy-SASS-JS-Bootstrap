document.addEventListener('DOMContentLoaded', function () {
	const navigation = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 175) {
			navigation.classList.add('shadow-bg')
		} else {
			navigation.classList.remove('shadow-bg')
		}
	}

	window.addEventListener('scroll', addShadow)

	allNavItems.forEach(navItem => {
		navItem.addEventListener('click', () => {
			navList.classList.remove('show')
		})
	})
})
