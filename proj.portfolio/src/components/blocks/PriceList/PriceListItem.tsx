import './PriceListItem.scss';

interface i_priceListItemProps {
	id: number;
	name: string;
	price: number | string;
	description: string;
	className?: string;
}

export function PriceListItem({
	name,
	price,
	description,
	className,
}: i_priceListItemProps) {
	return (
		<div className={'price-list__item' + (className ? ` ${className}` : '')}>
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
