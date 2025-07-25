import JustValidate from 'just-validate';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '/src/scss/style.scss';

console.log('This is the `index` page');

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM fully loaded and parsed');

	// Burger menu
	const burger = document.querySelector('.burger'),
		close = document.querySelector('.header__menu-close'),
		menu = document.querySelector('.header__menu');

	burger.addEventListener('click', () => {
		menu.classList.add('header__menu--active');
		// document.body.style.overflow = 'hidden';
		if (!document.body.classList.contains('scroll-off')) {
			document.body.classList.add('scroll-off');
		}
	});

	close.addEventListener('click', () => {
		menu.classList.remove('header__menu--active');
		// document.body.style.overflow = 'auto';
		if (document.body.classList.contains('scroll-off')) {
			document.body.classList.remove('scroll-off');
		}
	});

	// Slider
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

	// Tabs
	try {
		const tabs = document.querySelectorAll('.catalog__tab');
		const contents = document.querySelectorAll('.catalog__content-item');

		tabs.forEach((tab, index) => {
			tab.addEventListener('click', () => {
				activateTab(index);
			});
		});

		// Показываем первый контент при загрузке
		// contents.forEach((c, i) => (c.style.display = i === 0 ? 'flex' : 'none'));
		// Индекс активного таба
		const activeTabIndex = 0;
		// Программно активируем activeTabIndex-й таб
		activateTab(activeTabIndex);

		// Функция для активации таба по индексу
		function activateTab(index = 0) {
			if (!tabs) return;
			if (index >= 0 && index < tabs.length) {
				// Удаляем активный класс у всех табов и контента
				tabs.forEach((t) => {
					t.classList.remove('catalog__tab--active');
				});
				contents.forEach((c) => {
					c.classList.remove('catalog__content-item--active');
					// c.style.display = 'none';
				});

				// Добавляем активный класс к выбранному табу и показываем соответствующий контент
				tabs[index].classList.add('catalog__tab--active');
				contents[index].classList.add('catalog__content-item--active');
				// contents[index].style.display = 'flex';
			}
		}
	} catch (e) {}

	// JustValidate (form.touch__form)
	{
		const formSelector = 'form.touch__form';
		try {
			const validator = new JustValidate(formSelector, {
				// submitFormAutomatically: true,
			});

			validator
				.addField(
					'#name',
					[
						{
							rule: 'required',
							errorMessage: 'Please enter your name',
						},
						{
							rule: 'minLength',
							value: 2,
							errorMessage: 'Min length is 2',
						},
					],
					{
						errorsContainer: document
							.querySelector(formSelector)
							.querySelector('.name-error-message'),
					}
				)
				.addField('#email', [{ rule: 'required' }, { rule: 'email' }], {
					errorsContainer: document
						.querySelector(formSelector)
						.querySelector('.email-error-message'),
				})
				.addField(
					'#question',
					[
						{ rule: 'required', errorMessage: 'Please enter your question' },
						{
							rule: 'minLength',
							value: 5,
							errorMessage: 'Min length is 5',
						},
						{
							rule: 'maxLength',
							value: 150,
							errorMessage: 'Max length is 150',
						},
					],
					{
						errorsContainer: document
							.querySelector(formSelector)
							.querySelector('.question-error-message'),
					}
				)
				.addField(
					'#checkbox',
					[
						{
							rule: 'required',
							errorMessage: 'Please agree',
						},
					],
					{
						errorsContainer: document
							.querySelector(formSelector)
							.querySelector('.checkbox-error-message'),
					}
				)
				.onSuccess((event) => {
					const form = event.currentTarget;
					const formData = new FormData(form);

					console.warn(
						`⚠️ Форма (${formSelector}) отправляется на тестовый сервер...`
					);

					fetch('https://httpbin.org/post', {
						method: 'POST',
						body: formData,
					})
						.then((res) => res.json())
						.then((data) => {
							console.info(
								`✅ Форма (${formSelector}) успешно отправлена: `,
								data
							);
							form.reset();
						});
				});
		} catch (e) {
			console.error(`❌ Ошибка отправки формы (${formSelector}): `, e);
		}
	}

	// JustValidate (form.footer__form)
	{
		const formSelector = 'form.footer__form';
		try {
			const validator = new JustValidate(formSelector, {
				// submitFormAutomatically: true,
			});

			validator
				.addField('#footer__email', [{ rule: 'required' }, { rule: 'email' }], {
					errorsContainer: document
						.querySelector(formSelector)
						.querySelector('.footer__email-error-message'),
				})
				.addField(
					'#footer__checkbox',
					[
						{
							rule: 'required',
							errorMessage: 'Please agree',
						},
					],
					{
						errorsContainer: document
							.querySelector(formSelector)
							.querySelector('.footer__checkbox-error-message'),
					}
				)
				.onSuccess((event) => {
					const form = event.currentTarget;
					const formData = new FormData(form);

					console.warn(
						`⚠️ Форма (${formSelector}) отправляется на тестовый сервер...`
					);

					fetch('https://httpbin.org/post', {
						method: 'POST',
						body: formData,
					})
						.then((res) => res.json())
						.then((data) => {
							console.info(
								`✅ Форма (${formSelector}) успешно отправлена: `,
								data
							);
							form.reset();
						});
				});
		} catch (e) {
			console.error(`❌ Ошибка отправки формы (${formSelector}): `, e);
		}
	}
	//
});
