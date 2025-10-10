import { Title } from 'components/ui';
import './PriceList.scss';
import { PriceListItem } from './PriceListItem';

const prices = [
	{
		id: 1,
		name: 'Landing-page',
		price: 8000,
		description: 'Одностраничный сайт для презентации услуг/товаров/...',
	},
	{
		id: 2,
		name: 'Корпоративный сайт',
		price: 20000,
		description: 'Сайт для вашего бизнеса или компании',
	},
	{
		id: 3,
		name: 'Интернет-магазин',
		price: 30000,
		description: 'Инструмент для ваших продаж в сети',
	},
	{
		id: 4,
		name: 'Web-приложение',
		price: 28000,
		description: 'Приложение внутри браузера для лучшего комфорта',
	},
	{
		id: 5,
		name: 'Android/IOS Приложение',
		price: 25000,
		description: 'Приложение для смартфона любой ОС',
	},
	{
		id: 6,
		name: 'Дизайн',
		price: 'Индивидуально',
		description: 'Создам дизайн для вашего сайта/приложения...',
	},
	// {
	// 	id: 7,
	// 	name: '77777Корпоративный сайт',
	// 	price: 777,
	// 	description: 'Сайт для вашего бизнеса или компании',
	// },
];

export function PriceList() {
	const itemsPerColumn = Math.max(1, Math.ceil(prices.length / 2));

	console.log('## PriceList: render');
	return (
		<section className='price-list' id='price-list'>
			<div className='container'>
				<Title type={3} className='circle-big'>
					Прайс-лист
				</Title>
				<div className='divider'></div>

				<div className='price-list__items'>
					{prices.map((item, index) => {
						const extraClass =
							index % itemsPerColumn === 0 ? 'is-first-in-column' : '';
						return (
							<PriceListItem key={item.id} className={extraClass} {...item} />
						);
					})}
				</div>
			</div>
		</section>
	);
}
