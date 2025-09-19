import { Title } from 'components/ui';
import './Benefit.scss';
import { BenefitCard } from './BenefitCard';
import { BenefitCardHeader } from './BenefitCardHeader';

export function Benefit() {
	console.log('## Benefit: render');
	return (
		<section className='benefit' id='benefit'>
			<div className='container'>
				<div className='benefit__wrapper'>
					<Title type={3} className='circle-big'>
						Опыт
					</Title>
					<Title type={2}>Чем я буду полезна</Title>
					<div className='divider'></div>
					<div className='benefit__cards'>
						<div className='benefit__cards-wrapper'>
							<div className='benefit__left'>
								<div className='line-vertical'></div>
								<div className='circle-small'></div>
							</div>
							<div className='benefit__right'>
								<BenefitCardHeader title='Образование' />
								<BenefitCard
									key='1'
									title='МГТУ им. Н. Э. Баумана'
									subtitle='Диплом магистра | Москва (2014-2020)'
									imageUrl='assets/icons/experience/university.svg'
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna
									aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
									elit, sed do eiusmo.
								</BenefitCard>
								<BenefitCard
									key='2'
									title='Udemy'
									subtitle='Курсы по Web-разработке '
									imageUrl='assets/icons/experience/courses.svg'
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna
									aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
									elit, sed do eiusmo.
								</BenefitCard>
							</div>
						</div>
						<div className='benefit__cards-wrapper'>
							<div className='benefit__left'>
								<div className='line-vertical'></div>
								<div className='circle-small'></div>
							</div>
							<div className='benefit__right'>
								<BenefitCardHeader title='Опыт работы' />
								<BenefitCard
									key='3'
									title='Front-End Developer'
									subtitle='EPAM | Москва (2018-2019)'
									imageUrl='assets/icons/experience/developer.svg'
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna
									aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
									elit, sed do eiusmo.
								</BenefitCard>
								<BenefitCard
									key='4'
									title='UI/UX Designer'
									subtitle='Squad Team | Москва (2018)'
									imageUrl='assets/icons/experience/designer.svg'
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna
									aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
									elit, sed do eiusmo.
								</BenefitCard>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
