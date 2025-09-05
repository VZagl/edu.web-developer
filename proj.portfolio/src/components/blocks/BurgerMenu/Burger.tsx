import { useEffect, useRef } from 'react';
import './Burger.scss';

interface i_BurgerProps {
	onMenuOpenClick: () => void;
}

/**
 * Renders a burger menu icon component.
 *
 * @param onMenuOpenClick - Callback function invoked when the burger menu is clicked.
 *
 * The component attaches a click event listener to the burger menu element using a ref.
 * When clicked, it triggers the provided `onMenuOpenClick` handler.
 *
 * @remarks
 * - The event listener is added and removed using a `useEffect` hook to ensure proper cleanup.
 * - The burger menu consists of three `<span>` elements for visual representation.
 */
export function Burger({ onMenuOpenClick }: i_BurgerProps) {
	const burgerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const burger = burgerRef.current;

		burger?.addEventListener('click', onMenuOpenClick);

		return () => {
			burger?.removeEventListener('click', onMenuOpenClick);
		};
	}, [onMenuOpenClick]);

	console.log('## Burger: render');
	return (
		<div className='burger' ref={burgerRef}>
			<span></span>
			<span className='long'></span>
			<span></span>
		</div>
	);
}
