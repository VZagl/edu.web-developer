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
				<h3 className='title circle-big'>Меня зовут Александра Смит</h3>
				<h1 className='title'>Я web-разработчик из города Москва</h1>
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
