import './AboutCard.scss';

interface i_AboutCardProps {
	title: string;
	imageUrl: string;
	children?: React.ReactNode;
}

export function AboutCard({
	title,
	imageUrl,
	children = '',
}: i_AboutCardProps) {
	return (
		<div className='about__card'>
			<div className='about__card-image circle-big'>
				<img src={imageUrl} alt={title} className='' />
			</div>
			<div className='about__card-content'>
				<div className='about__card-title'>{title}</div>
				<p className='about__card-text'>{children}</p>
			</div>
		</div>
	);
}
