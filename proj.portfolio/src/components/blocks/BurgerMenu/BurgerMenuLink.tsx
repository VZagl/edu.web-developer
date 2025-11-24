import { useEffect, useRef } from 'react';
import './BurgerMenuLink.scss';

interface i_BurgerMenuLinkProps {
	href: string;
	text: string;
	onMenuCloseClick: () => void;
}

/**
 * Renders a single link item for the burger menu.
 *
 * @param props - The properties for the BurgerMenuLink component.
 * @param props.href - The URL to navigate to when the link is clicked.
 * @param props.text - The display text for the link.
 * @param props.onMenuCloseClick - Callback function invoked when the link is clicked, typically used to close the menu.
 *
 * @returns A list item containing an anchor element styled as a burger menu link.
 */
export function BurgerMenuLink({
	href,
	text,
	onMenuCloseClick,
}: i_BurgerMenuLinkProps) {
	const linkRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		const link = linkRef.current;

		link?.addEventListener('click', onMenuCloseClick);

		return () => {
			link?.removeEventListener('click', onMenuCloseClick);
		};
	}, [onMenuCloseClick]);

	return (
		<li className='burger-menu__link'>
			<a href={href} ref={linkRef}>
				{text}
			</a>
		</li>
	);
}
