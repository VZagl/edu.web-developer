import { Title } from 'components/ui/Title';
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
				<Title titleType={3} className='circle-big'>
					Меня зовут Александра Смит
				</Title>
				<Title titleType={1}>Я web-разработчик из города Москва</Title>
				<div className='buttons-wrapper'>
					<a className='button-primary' href='#portfolio'>
						Портфолио
					</a>
					<a className='button' href='#about'>
						Про меня
					</a>
				</div>
			</div>
		</section>
	);
}
