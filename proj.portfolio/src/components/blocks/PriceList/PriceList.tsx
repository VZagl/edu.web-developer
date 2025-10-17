import { Title } from 'components/ui';
import './PriceList.scss';
import { PriceListItem } from './PriceListItem';

const prices = [
	{
		id: 1,
		name: 'Landing-page',
		price: 8000,
		description: 'Одностраничный сайт для презентации услуг/товаров/...',
		pos: { col: 1, row: 1 },
	},
	{
		id: 2,
		name: 'Корпоративный сайт',
		price: 20000,
		description: 'Сайт для вашего бизнеса или компании',
		pos: { col: 1, row: 2 },
	},
	{
		id: 3,
		name: 'Интернет-магазин',
		price: 30000,
		description: 'Инструмент для ваших продаж в сети',
		pos: { col: 1, row: 3 },
	},
	{
		id: 4,
		name: 'Web-приложение',
		price: 28000,
		description: 'Приложение внутри браузера для лучшего комфорта',
		pos: { col: 2, row: 1 },
	},
	{
		id: 5,
		name: 'Android/IOS Приложение',
		price: 25000,
		description: 'Приложение для смартфона любой ОС',
		pos: { col: 2, row: 2 },
	},
	{
		id: 6,
		name: 'Дизайн',
		price: 'Индивидуально',
		description: 'Создам дизайн для вашего сайта/приложения...',
		pos: { col: 2, row: 3 },
	},
];

export function PriceList() {
	console.log('## PriceList: render');
	return (
		<section className='price-list' id='price-list'>
			<div className='container'>
				<Title type={3} className='circle-big'>
					Прайс-лист
				</Title>
				<div className='divider'></div>

				<div className='price-list__items'>
					{prices.map((item) => {
						return <PriceListItem key={item.id} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
}
