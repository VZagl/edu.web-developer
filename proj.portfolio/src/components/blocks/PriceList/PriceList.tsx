import { Title } from 'components/ui';
import { prices } from 'data';
import './PriceList.scss';
import { PriceListColumn } from './PriceListColumn';

export function PriceList({ columns = 2 }: { columns?: number }) {
	console.log('## PriceList: render');

	// Нормализуем количество колонок
	const columnsCount = Math.max(1, Math.floor(columns));
	const rowPerCol = Math.ceil(prices.length / columnsCount);
	console.log(
		'## PriceList: columnsCount=',
		columnsCount,
		' rowPerCol=',
		rowPerCol
	);

	return (
		<section className='price-list' id='price-list'>
			<div className='container'>
				<Title type={3} className='circle-big'>
					Прайс-лист
				</Title>
				<div className='divider'></div>
				<div className='price-list__items'>
					{Array.from({ length: columnsCount }).map((_, colIndex) => (
						<div className='price-list__column' key={colIndex}>
							<PriceListColumn
								items={prices}
								colIndex={colIndex}
								rowPerCol={rowPerCol}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
