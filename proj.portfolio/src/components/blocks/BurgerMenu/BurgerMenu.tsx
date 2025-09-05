import { useCallback, useEffect, useRef } from 'react';
import { Burger } from './Burger';
import './BurgerMenu.scss';
import { BurgerMenuLink } from './BurgerMenuLink';

const menuLinks = [
	{ key: 'about', href: '#about', text: 'ПРО МЕНЯ' },
	{ key: 'benefit', href: '#benefit', text: 'МОЙ ОПЫТ' },
	{ key: 'skills', href: '#skills', text: 'МОИ НАВЫКИ' },
	{ key: 'portfolio', href: '#portfolio', text: 'МОИ РАБОТЫ' },
	{ key: 'price-list', href: '#price-list', text: 'ПРАЙС-ЛИСТ' },
	{ key: 'contakts', href: '#contakts', text: 'КОНТАКТЫ' },
];

export function BurgerMenu() {
	const menuRef = useRef<HTMLDivElement>(null);
	const fogRef = useRef<HTMLDivElement>(null);
	const closeRef = useRef<HTMLImageElement>(null);

	const onMenuCloseClick = useCallback(() => {
		menuRef.current?.classList.remove('active');
		fogRef.current?.classList.remove('active');
		document.body.classList.remove('scroll-off');
	}, []);

	const onMenuOpenClick = useCallback(() => {
		menuRef.current?.classList.add('active');
		fogRef.current?.classList.add('active');
		document.body.classList.add('scroll-off');
	}, []);

	useEffect(() => {
		const closeButton = closeRef.current;

		closeButton?.addEventListener('click', onMenuCloseClick);

		return () => {
			closeButton?.removeEventListener('click', onMenuCloseClick);
		};
	}, [onMenuCloseClick]);

	function renderMenuLinks(onMenuCloseClick: () => void) {
		return menuLinks.map((link) => (
			<BurgerMenuLink
				key={link.key}
				href={link.href}
				text={link.text}
				onMenuCloseClick={onMenuCloseClick}
			/>
		));
	}

	console.log('## BurgerMenu: render');
	return (
		<>
			<Burger onMenuOpenClick={onMenuOpenClick} />
			<section className='burger-menu'>
				<div className='burger-menu__fog' ref={fogRef}></div>
				<div className='burger-menu__wrapper' ref={menuRef}>
					<div className='burger-menu__close-wrapper'>
						<img
							className='burger-menu__close'
							src='/assets/icons/Close.svg'
							alt='Close'
							ref={closeRef}
						/>
					</div>
					<nav className='burger-menu__nav'>
						<ul>{renderMenuLinks(onMenuCloseClick)}</ul>
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
