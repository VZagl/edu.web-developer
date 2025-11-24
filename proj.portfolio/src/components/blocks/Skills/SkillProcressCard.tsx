import './SkillProcressCard.scss';

export interface i_SkillProcressCardProps {
	title: string;
	progress?: number;
}

export function SkillProcressCard({
	title,
	progress = 0,
}: i_SkillProcressCardProps) {
	return (
		<div className='skill-progress-card'>
			<div className='skill-progress-card__title'>
				<div className='skill-progress-card__title-name circle-big'>
					{title}
				</div>
				<div className='skill-progress-card__title-percent'>{`${progress}%`}</div>
			</div>
			<div className='skill-progress-card__progress'>
				<div
					className='skill-progress-card__progress-bar'
					style={{ width: `${progress}%` }}
				></div>
			</div>
		</div>
	);
}
