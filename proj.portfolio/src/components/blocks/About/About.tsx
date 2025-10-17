import { Title } from 'components/ui';
import './About.scss';
import { AboutCard } from './AboutCard';

export function About() {
	console.log('## About: render');
	return (
		<section className='about' id='about'>
			<div className='container'>
				<div className='about__wrapper'>
					<div className='about__photo'>
						<img src='/assets/img/main_photo.jpg' alt='about photo' />
					</div>
					<div className='about__info'>
						<Title type={3} className='circle-big'>
							Про меня
						</Title>
						<Title type={2}>Меня зовут Александра</Title>
						<div className='divider'></div>
						<p className='about__text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum
						</p>
						<div className='about__cards'>
							<AboutCard
								key='web_development'
								title='Web-разработка'
								imageUrl='assets/icons/about_me/web_development.svg'
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</AboutCard>
							<AboutCard
								key='mobile_dev'
								title='Разработка приложений'
								imageUrl='assets/icons/about_me/mobile_dev.svg'
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</AboutCard>
							<AboutCard
								key='design'
								title='UI/UX Design'
								imageUrl='assets/icons/about_me/design.svg'
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</AboutCard>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
