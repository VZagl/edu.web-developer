import type { JSX } from 'react';
import './Title.scss';

interface i_TitleProps {
	type?: number; // теперь число
	className?: string;
	children: React.ReactNode;
}

/**
 * Renders a semantic HTML heading element (`h1` to `h6`) with customizable class names and content.
 *
 * @param props - The properties for the Title component.
 * @param props.className - Additional CSS classes to apply to the heading element.
 * @param props.children - The content to be displayed inside the heading.
 * @param props.type - The heading level (1-6). Defaults to 1. Values outside 1-6 will be reset to 1.
 *
 * @returns A React element representing the specified heading level with the provided content and classes.
 */
export function Title(props: i_TitleProps) {
	const { className = '', children } = props;
	let { type: type = 1 } = props;

	// Ограничиваем диапазон
	if (typeof type !== 'number' || type < 1 || type > 6) {
		type = 1;
	}
	const Tag = `h${type}` as keyof JSX.IntrinsicElements;

	return <Tag className={`title title--h${type} ${className}`}>{children}</Tag>;
}
