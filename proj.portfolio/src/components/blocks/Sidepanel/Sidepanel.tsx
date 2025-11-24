import './Sidepanel.scss';

export function Sidepanel() {
	console.log('## Sidepanel: render');
	return (
		<aside className='sidepanel'>
			<div className='rotated-wrapper'>
				<div>Социальные сети</div>
				<div className='line'></div>
				<a href='#'>
					<img src='assets/icons/social/github.svg' alt='github' />
				</a>
				<a href='#'>
					<img src='assets/icons/social/instagram.svg' alt='instagram' />
				</a>
				<a href='#'>
					<img src='assets/icons/social/facebook.svg' alt='facebook' />
				</a>
			</div>
		</aside>
	);
}
