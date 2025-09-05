import { useCallback, useEffect, useState } from 'react';
import './Burger.scss';

export function Burger() {
	const [burger, setBurger] = useState<Element | null>(null);
	const [burgerMenu, setburgerMenu] = useState<Element | null>(null);

	const onBurgerClick = useCallback(() => {
		burgerMenu?.classList.add('active');
		if (!document.body.classList.contains('scroll-off')) {
			document.body.classList.add('scroll-off');
		}
	}, [burgerMenu]);

	useEffect(() => {
		const m_burger = document.querySelector('.burger');
		const m_burgerMenu = document.querySelector('.burger-menu');
		setburgerMenu(m_burgerMenu);
		setBurger(m_burger);
	}, []);

	useEffect(() => {
		burger?.addEventListener('click', onBurgerClick);

		return () => {
			burger?.removeEventListener('click', onBurgerClick);
		};
	}, [burger, onBurgerClick]);

	console.log('## Burger: render');
	return (
		<div className='burger'>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}
