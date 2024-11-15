window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu_item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		// hamburger.classList.toggle('hamburger_active');
		// menu.classList.toggle('menu_active');
		hamburger_toggle();
	});

	menuItem.forEach((item) => {
		item.addEventListener('click', () => {
			// hamburger.classList.toggle('hamburger_active');
			// menu.classList.toggle('menu_active');
			hamburger_toggle();
		});
	});

	function hamburger_toggle() {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
	}
});
