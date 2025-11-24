import './BenefitCard.scss';

interface i_BenefitCardProps {
	title: string;
	subtitle: string;
	imageUrl: string;
	children?: React.ReactNode;
}

export function BenefitCard({
	title,
	subtitle,
	imageUrl,
	children = '',
}: i_BenefitCardProps) {
	return (
		<div className='benefit__card'>
			<div className='benefit-card__header'>
				<div className='benefit-card__image circle-big'>
					<img src={imageUrl} alt={title} />
				</div>
				<div className='benefit-card__info'>
					<div className='benefit-card__title'>{title}</div>
					<div className='benefit-card__subtitle'>{subtitle}</div>
				</div>
			</div>
			<div className='benefit-card__text'>{children}</div>
		</div>
	);
}
