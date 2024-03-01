const form = document.querySelector("#form")
const scrollTopButton = document.querySelector("#scroll-top")
const toggleThemeButton = document.querySelector("#toggle-theme")

const lightIcon = toggleThemeButton.querySelector("#light-icon")
const darkIcon = toggleThemeButton.querySelector("#dark-icon")

// Show message when form is submitted
form.addEventListener("submit", (e) => {
	e.preventDefault()

	alert("Formulário enviado!")
})

// Toggle theme
toggleThemeButton.addEventListener("click", () => {
	const currentTheme = document.documentElement.dataset.bsTheme

	if (currentTheme === "dark") {
		document.documentElement.dataset.bsTheme = "light"
		lightIcon.style.display = "block"
		darkIcon.style.display = "none"
	} else {
		document.documentElement.dataset.bsTheme = "dark"
		lightIcon.style.display = "none"
		darkIcon.style.display = "block"
	}
})

// Show/hide scroll to top button
document.addEventListener("scroll", () => {
	if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
		scrollTopButton.style.display = "block"
		return
	}

	scrollTopButton.style.display = "none"
})

// Scroll to top
scrollTopButton.addEventListener("click", () => {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
})
