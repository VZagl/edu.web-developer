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
					<a href='#'>
						<img src='assets/img/works/uber.jpg' alt='uber' />
					</a>
					<a href='#'>
						<img src='assets/img/works/pulse.jpg' alt='pulse' />
					</a>
					<a href='#'>
						<img src='assets/img/works/bread.jpg' alt='bread' />
					</a>
					<a href='#' className='grid-2rows'>
						<img src='assets/img/works/plans.jpg' alt='plans' />
					</a>
					<a href='#'>
						<img src='assets/img/works/ipad.jpg' alt='ipad' />
					</a>
					<a href='#' className='grid-2columns'>
						<img src='assets/img/works/mac.jpg' alt='mac' />
					</a>
				</div>
			</div>
		</section>
	);
}
