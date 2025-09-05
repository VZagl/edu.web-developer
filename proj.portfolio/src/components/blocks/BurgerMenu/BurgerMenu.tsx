import { useCallback, useEffect } from 'react';
import { Burger } from './Burger';
import './BurgerMenu.scss';

export function BurgerMenu() {
	const onBurgerMenuCloseClick = useCallback((burgerMenu: Element | null) => {
		console.log('## onBurgerMenuCloseClick');
		burgerMenu?.classList.remove('active');
		if (document.body.classList.contains('scroll-off')) {
			document.body.classList.remove('scroll-off');
		}
	}, []);

	useEffect(() => {
		const burgerMenuClose = document.querySelector('.burger-menu__close');
		const burgerMenu = document.querySelector('.burger-menu');
		const menuItems = document.querySelectorAll('.burger-menu__link');

		burgerMenuClose?.addEventListener('click', () =>
			onBurgerMenuCloseClick(burgerMenu)
		);
		menuItems.forEach((item) =>
			item.addEventListener('click', () => onBurgerMenuCloseClick(burgerMenu))
		);

		return () => {
			burgerMenuClose?.removeEventListener('click', () =>
				onBurgerMenuCloseClick(burgerMenu)
			);
			menuItems.forEach((item) =>
				item.removeEventListener('click', () =>
					onBurgerMenuCloseClick(burgerMenu)
				)
			);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log('## BurgerMenu: render');
	return (
		<>
			<Burger />
			<section className='burger-menu'>
				<div className='burger-menu__fog'></div>
				<div className='burger-menu__wrapper'>
					<div className='burger-menu__close-wrapper'>
						<img
							className='burger-menu__close'
							src='/assets/icons/Close.svg'
							alt='Close'
						/>
					</div>
					<nav className='burger-menu__nav'>
						<ul>
							<li>
								<a className='burger-menu__link' href='#about'>
									ПРО МЕНЯ
								</a>
							</li>
							<li>
								<a className='burger-menu__link' href='#benefit'>
									МОЙ ОПЫТ
								</a>
							</li>
							<li>
								<a className='burger-menu__link' href='#skills'>
									МОИ НАВЫКИ
								</a>
							</li>
							<li>
								<a className='burger-menu__link' href='#portfolio'>
									МОИ РАБОТЫ
								</a>
							</li>
							<li>
								<a className='burger-menu__link' href='#price-list'>
									ПРАЙС-ЛИСТ
								</a>
							</li>
							<li>
								<a className='burger-menu__link' href='#contakts'>
									КОНТАКТЫ
								</a>
							</li>
						</ul>
					</nav>
					<div className='burger-menu__social'>
						<a href='#'>
							<img src='assets/icons/social/github.svg' alt='github' />
						</a>
						<a href='#'>
							<img src='assets/icons/social/instagram.svg' alt='instagram' />
						</a>
						<a href='#'>
							<img src='assets/icons/social/facebook.svg' alt='facebook' />
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
