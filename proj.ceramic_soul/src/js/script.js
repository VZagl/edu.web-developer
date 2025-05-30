import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '/src/scss/style.scss';

console.log('This is the `index` page');

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM fully loaded and parsed');

	try {
		new Swiper('.works__slider', {
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.icon-right-open',
				prevEl: '.icon-left-open',
			},
			breakpoints: {
				// when window width is >= 1200px
				1200: {
					slidesPerView: 3,
					spaceBetween: 5,
				},
				1920: {
					spaceBetween: 35,
				},
			},
			modules: [Navigation, Pagination],
		});
	} catch (e) {}
});
