import './SkillCard.scss';

export interface i_SkillCardProps {
	title: string;
	imageUrl: string;
	children?: React.ReactNode;
}

export function SkillCard({
	title,
	imageUrl,
	children = '',
}: i_SkillCardProps) {
	return (
		<div className='skill-card'>
			<div className='skill-card__icon'>
				<img src={imageUrl} alt={title} />
			</div>
			<div className='skill-card__title'>{title}</div>
			<div className='skill-card__description'>{children}</div>
		</div>
	);
}
