// Set active class to tab based on url
function setActiveTab() {
	const location = document.location
	const navLinks = document.querySelectorAll('main nav ul li a')

	navLinks.forEach(link => {
    if (link.pathname === '/topics/latest' && location.pathname === '/') {
			link.classList.add('active')
		}

		if (location.href.indexOf(link.href) >= 0) {
			link.classList.add('active')
		}
	})
}

export { setActiveTab }
