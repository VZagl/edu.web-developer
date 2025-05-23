// import 'purecss/build/grids-min.css';
// import 'purecss/build/grids-responsive-min.css';

// import '../scss/style.scss';

console.log('This is the `index` page');

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM fully loaded and parsed');

	const vase = document.querySelector('.touch__decor');
	console.log('vase =', vase);
	vase.addEventListener('click', () => {
		console.log('vase clicked');
		// vase.classList.toggle('active');
	});
});
