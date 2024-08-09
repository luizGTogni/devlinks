function changeProfileImage(base) {
	const imgElement = document.querySelector("#profile img")

	if (base.classList.contains("light")) {
		imgElement.setAttribute("src", "./assets/avatar-light.png")
		imgElement.setAttribute("alt", "Foto de perfil do Mayk Brito Light")
		return
	}

	imgElement.setAttribute("src", "./assets/avatar.png")
	imgElement.setAttribute("alt", "Foto de perfil do Mayk Brito Dark")
}

function toggleMode() {
	const html = document.documentElement

	html.classList.toggle("light")

	changeProfileImage(html)
}
