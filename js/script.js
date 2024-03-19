const button = document.getElementById('checkbox')
const menu = document.getElementById('menu__body')
const logo = document.getElementById('menu-logo')
const mainContainer = document.querySelector('.main')

function switcherNavigation(){
	if (button.checked) {
			menu.classList.add('opened')
			logo.classList.add('opened')
			document.body.style.overflow = 'hidden'
		mainContainer.addEventListener('click', closeIcon)
		} else{
			document.body.style.overflow = 'visible'
			menu.classList.remove('opened')
			logo.classList.remove('opened')
	}
}

button.addEventListener('change', switcherNavigation)

//Добавляю слухач на контейнер, щоб визначити, що нажав не на іконку і закрити меню
function closeIcon(event) {
	if (event.target.tagName === 'A') {
		menu.classList.remove('opened')
		logo.classList.remove('opened')
		document.body.style.overflow = 'visible'
		button.checked = false
	}
}

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
