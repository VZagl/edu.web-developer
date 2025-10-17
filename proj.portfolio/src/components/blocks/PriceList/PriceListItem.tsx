import type { CSSProperties } from 'react';
import './PriceListItem.scss';

interface i_priceListItemProps {
	id: number;
	name: string;
	price: number | string;
	description: string;
	pos?: { col: number; row: number };
}

export function PriceListItem({
	name,
	price,
	description,
	pos,
}: i_priceListItemProps) {
	const style: CSSProperties | undefined = pos
		? { gridColumnStart: pos.col, gridRowStart: pos.row }
		: undefined;

	return (
		<div className={'price-list__item'} style={style}>
			<div className='price-list__item-header circle-small'>
				<h3 className='price-list__item-name'>{name}</h3>
				<p className='price-list__item-price'>
					{typeof price === 'number' ? `от ${price} ₽` : price}
				</p>
			</div>
			<p className='price-list__item-description'>{description}</p>
		</div>
	);
}
