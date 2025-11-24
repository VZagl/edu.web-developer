import type { prices } from 'data';
import { PriceListItem } from './PriceListItem';

interface i_priceListColumnProps {
	items: typeof prices;
	colIndex: number;
	rowPerCol: number;
}

export function PriceListColumn({
	items,
	colIndex,
	rowPerCol,
}: i_priceListColumnProps) {
	const start = colIndex * rowPerCol;

	return (
		<>
			{items.map((item, i) =>
				i < start || i >= start + rowPerCol ? null : (
					<PriceListItem key={item.id} {...item} />
				)
			)}
		</>
	);
}
