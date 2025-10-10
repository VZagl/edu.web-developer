import { Title } from 'components/ui';
import './Contacts.scss';

export function Contacts() {
	console.log('## Contacts: render');
	return (
		<section className='contacts' id='contakts'>
			<div className='container'>
				<div className='contacts__wrapper'>
					<img
						src='/assets/img/main_photo.jpg'
						alt='contacts photo'
						className='contacts__photo'
					/>
					<div className='contacts__details'>
						<Title type={3} className='circle-big'>
							Контакты
						</Title>
						<Title type={2}>Свяжитесь со мной</Title>
						<div className='divider'></div>
						<div className='contacts__social'>
							<div className='contacts__social-title'>
								Любым удобным для вас способом:
							</div>
							<div className='contacts__social-links'>
								<a href='#'>
									<img src='assets/icons/social/facebook.svg' alt='facebook' />
								</a>
								<a href='#'>
									<img src='assets/icons/social/telegram.svg' alt='telegram' />
								</a>
								<a href='#'>
									<img
										src='assets/icons/social/instagram.svg'
										alt='instagram'
									/>
								</a>
							</div>
						</div>
						<div className='contacts__form'>
							<div className='contacts__form-title'>
								Или оставьте ваши данные и я сама вам напишу:
							</div>
							<form action='#'>
								{/* name */}
								<fieldset className='fset'>
									<legend className='fset__legend'>Ваше имя</legend>
									<input
										className='fset__input'
										id='name'
										type='text'
										name='name'
										placeholder='Ваше имя'
										required
									/>
								</fieldset>
								{/* email */}
								<fieldset className='fset'>
									<legend className='fset__legend'>Ваша почта</legend>
									<input
										className='fset__input'
										id='email'
										type='email'
										name='email'
										placeholder='Ваша почта'
										required
									/>
								</fieldset>
								{/* question */}
								<fieldset className='fset grid-2columns fset__question'>
									<legend className='fset__legend'>Ваше сообщение</legend>
									<textarea
										className='fset__input'
										id='question'
										name='question'
										placeholder='Ваше сообщение'
										required
									></textarea>
								</fieldset>
								{/* checkbox */}
								<fieldset className='fset fset--checkbox grid-2columns'>
									<input id='checkbox' required type='checkbox' />
									<span>
										Я согласен(а) с <a href='#'>политикой конфиденциальности</a>
									</span>
								</fieldset>
								{/* submit */}
								<div className='grid-2columns'>
									<button className='button primary' type='submit'>
										Отправить сообщение
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
