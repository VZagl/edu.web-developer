import { Title } from 'components/ui';
import './Portfolio.scss';

export function Portfolio() {
	console.log('## Portfolio: render');
	return (
		<section className='portfolio' id='portfolio'>
			<div className='container'>
				<Title type={3} className='circle-big'>
					Портфолио
				</Title>
				<Title type={2}>Мои работы</Title>
				<div className='divider'></div>

				<div className='portfolio__images'>
					<img src='assets/img/works/uber.jpg' alt='uber' />
					<img src='assets/img/works/pulse.jpg' alt='pulse' />
					<img src='assets/img/works/bread.jpg' alt='bread' />
					<img
						src='assets/img/works/plans.jpg'
						alt='plans'
						className='grid-2w'
					/>
					<img src='assets/img/works/ipad.jpg' alt='ipad' />
					<img src='assets/img/works/mac.jpg' alt='mac' className='grid-2h' />
				</div>
			</div>
		</section>
	);
}
