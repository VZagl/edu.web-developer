import { Title } from 'components/ui';
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
					<SkillCard
						key='HTML5'
						title='HTML5'
						imageUrl='assets/icons/skills/html5.svg'
					>
						Именно он создает каркас вашего сайта или приложения, а пятая версия
						позволит мне создавать более SEO-оптимизированную структуру вашего
						продукта
					</SkillCard>

					<SkillCard
						key='css3'
						title='CSS3'
						imageUrl='assets/icons/skills/css3.svg'
					>
						Этот язык стилей позволяет мне создавать абсолютно любой внешний вид
						вашего сайта или приложения. Все ограничивается только вашей
						фантазией!
					</SkillCard>

					<SkillCard
						key='js'
						title='Java Script'
						imageUrl='assets/icons/skills/js.svg'
					>
						Этот язык программирования позволяет оживить все что угодно:
						слайдеры, окна, подсказки, вкладки, получение данных от сервера и
						многое другое
					</SkillCard>

					<SkillCard
						key='jquery'
						title='Jquery'
						imageUrl='assets/icons/skills/jquery.svg'
					>
						Библиотека Jquery позволит ускорить разработку. Без необходимости
						интегрировать в проект мы её не будем, но навык работы с ней
						присутствует
					</SkillCard>

					<SkillCard
						key='react'
						title='React'
						imageUrl='assets/icons/skills/react.svg'
					>
						Эта библиотека позволяет создавать web-приложения. Мы можем создать
						максимально интерактивный продукт именно под ваши цели
					</SkillCard>

					<SkillCard
						key='nodejs'
						title='Node.js'
						imageUrl='assets/icons/skills/node.js.svg'
					>
						Эта платформа позволяет создавать бэкенд для вашего продукта -
						“мозги”, которые будут выполнять действия, которые пользователь не
						видит
					</SkillCard>

					<SkillCard
						key='mongodb'
						title='Mongo.db'
						imageUrl='assets/icons/skills/mongo.db.svg'
					>
						Это нереляционная база данных, которая будет хранить данные вашего
						сайта или приложения
					</SkillCard>
				</div>
				<div className='skills__progress-cards'>
					<SkillProcressCard title='Создание сайтов' progress={100} />
					<SkillProcressCard title='Создание приложений' progress={85} />
					<SkillProcressCard title='Работа с данными' progress={90} />
					<SkillProcressCard title='Креативность' progress={75} />
					<SkillProcressCard title='Создание дизайна' progress={90} />
					<SkillProcressCard title='Soft skills' progress={95} />
				</div>
			</div>
		</section>
	);
}
