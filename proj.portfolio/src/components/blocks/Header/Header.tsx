import { Button, Title } from 'components/ui/';
import './Header.scss';

export function Header() {
	console.log('## Header: render');
	return (
		<section className='header'>
			<div className='hamburger'>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className='container'>
				<Title type={3} className='circle-big'>
					Меня зовут Александра Смит
				</Title>
				<Title type={1}>Я web-разработчик из города Москва</Title>
				<div className='buttons-wrapper'>
					<Button type='primary' href='#portfolio'>
						Портфолио
					</Button>
					<Button href='#about'>Про меня</Button>
				</div>
			</div>
		</section>
	);
}
