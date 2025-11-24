import { Title } from 'components/ui';
import { progressCards, skillCards } from 'data';
import { SkillCard } from './SkillCard';
import { SkillProcressCard } from './SkillProcressCard';
import './Skills.scss';

export function Skills() {
	console.log('## Skills: render');
	return (
		<section className='skills' id='skills'>
			<div className='container'>
				<Title type={3} className='circle-big'>
					Навыки
				</Title>
				<Title type={2}>Что я использую в работе</Title>
				<div className='divider'></div>

				<div className='skills__cards'>
					{skillCards.map(({ key, title, imageUrl, description }) => (
						<SkillCard key={key} title={title} imageUrl={imageUrl}>
							{description}
						</SkillCard>
					))}
				</div>

				<div className='skills__progress-cards'>
					{progressCards.map(({ key, title, progress }) => (
						<SkillProcressCard key={key} title={title} progress={progress} />
					))}
				</div>
			</div>
		</section>
	);
}
