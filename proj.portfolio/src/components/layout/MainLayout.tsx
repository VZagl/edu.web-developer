import {
	About,
	Benefit,
	Contacts,
	Header,
	Portfolio,
	PriceList,
	Sidepanel,
	Skills,
} from 'components/blocks';
import './MainLayout.scss';

export function MainLayout() {
	console.log('## MainLayout: render');
	return (
		<div className='main-layout'>
			<Sidepanel />
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
