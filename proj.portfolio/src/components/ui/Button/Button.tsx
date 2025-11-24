import './Button.scss';

interface i_ButtonProps {
	type?: 'primary';
	href?: string;
	className?: string;
	children: React.ReactNode;
}

/**
 * Renders a customizable button component as an anchor (`<a>`) element.
 *
 * @param props - The properties for the Button component.
 * @param props.type - Optional type modifier for styling the button.
 * @param props.className - Optional additional CSS classes for the button.
 * @param props.href - Optional URL for the anchor; defaults to '#'.
 * @param props.children - The content to be displayed inside the button.
 *
 * @returns A styled anchor element acting as a button.
 */
export function Button(props: i_ButtonProps) {
	const { type = '', className = '', href = '#', children } = props;

	return (
		<a className={`button ${type} ${className}`} type='button' href={href}>
			{children}
		</a>
	);
}
