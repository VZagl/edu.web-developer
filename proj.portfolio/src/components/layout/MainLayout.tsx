import {
	About,
	Benefit,
	Contacts,
	Header,
	Portfolio,
	PriceList,
	Skills,
} from 'components/blocks';

export function MainLayout() {
	console.log('## MainLayout: render');
	return (
		<div className='main-layout'>
			<Header />
			<About />
			<Benefit />
			<Skills />
			<Portfolio />
			<PriceList />
			<Contacts />
		</div>
	);
}
