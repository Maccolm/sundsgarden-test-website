const button = document.getElementById('checkbox')
const menu = document.getElementById('menu__body')
const logo = document.getElementById('menu-logo')
const mainContainer = document.querySelector('.main')

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

//Добавляю слухач на контейнер, щоб визначити, що нажав не на іконку і закрити меню
mainContainer.addEventListener('click', function(event) {
	if (!button.contains(event.target)) {
		menu.classList.remove('opened')
		logo.classList.remove('opened')
		button.checked = false
	}
})

//go-to============================================================
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}
	}
}
//=============================================
