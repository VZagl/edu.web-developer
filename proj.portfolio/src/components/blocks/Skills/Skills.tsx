import { Title } from 'components/ui';
import { SkillCard } from './SkillCard';
import { SkillProcressCard } from './SkillProcressCard';
import './Skills.scss';

const skillCards = [
	{
		key: 'HTML5',
		title: 'HTML5',
		imageUrl: 'assets/icons/skills/html5.svg',
		description:
			'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта',
	},
	{
		key: 'css3',
		title: 'CSS3',
		imageUrl: 'assets/icons/skills/css3.svg',
		description:
			'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!',
	},
	{
		key: 'js',
		title: 'Java Script',
		imageUrl: 'assets/icons/skills/js.svg',
		description:
			'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое',
	},
	{
		key: 'jquery',
		title: 'Jquery',
		imageUrl: 'assets/icons/skills/jquery.svg',
		description:
			'Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует',
	},
	{
		key: 'react',
		title: 'React',
		imageUrl: 'assets/icons/skills/react.svg',
		description:
			'Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели',
	},
	{
		key: 'nodejs',
		title: 'Node.js',
		imageUrl: 'assets/icons/skills/node.js.svg',
		description:
			'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит',
	},
	{
		key: 'mongodb',
		title: 'Mongo.db',
		imageUrl: 'assets/icons/skills/mongo.db.svg',
		description:
			'Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения',
	},
];

const progressCards = [
	{ key: 'sites', title: 'Создание сайтов', progress: 100 },
	{ key: 'apps', title: 'Создание приложений', progress: 85 },
	{ key: 'data', title: 'Работа с данными', progress: 90 },
	{ key: 'creativity', title: 'Креативность', progress: 75 },
	{ key: 'design', title: 'Создание дизайна', progress: 90 },
	{ key: 'soft', title: 'Soft skills', progress: 95 },
];

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
