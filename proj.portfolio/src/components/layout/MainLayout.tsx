import {
	About,
	Benefit,
	BurgerMenu,
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
			<BurgerMenu />
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
