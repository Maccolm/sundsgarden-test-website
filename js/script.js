const button = document.getElementById('checkbox')
const menu = document.getElementById('menu__body')
const logo = document.getElementById('menu-logo')

function switcherNavigation(){
	if (button.checked) {
			menu.classList.add('opened')
			logo.classList.add('opened')
	} else{
		menu.classList.remove('opened')
		logo.classList.remove('opened')
	}
}

button.addEventListener('change', switcherNavigation)