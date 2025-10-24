import { MainLayout } from 'components/layout/MainLayout';
import { useLayoutEffect } from 'react';
import './App.scss';

export function App() {
	useLayoutEffect(() => {
		const applyRoot = () => {
			const desiredMm = 10; // 1rem = 10 mm
			const mmPerIn = 25.4;
			const dpr = window.devicePixelRatio || 1;
			const cssPxPerIn = 96 * dpr; // оценка
			const pxPerMm = cssPxPerIn / mmPerIn;
			let rootPx = Math.round(pxPerMm * desiredMm);

			// Ограничения, чтобы не выйти за разумные пределы
			rootPx = Math.max(10, Math.min(200, rootPx));

			document.documentElement.style.fontSize = rootPx + 'px';
			document.documentElement.style.setProperty(
				'--root-font-size-fallback',
				rootPx + 'px'
			);

			console.debug('window.devicePixelRatio:', window.devicePixelRatio);
			console.debug(
				'devicePixelRatio:',
				dpr,
				'rootPx:',
				rootPx,
				'estDPI:',
				cssPxPerIn
			);
		};

		applyRoot();

		let timeout: number | undefined;
		const onResize = () => {
			window.clearTimeout(timeout);
			timeout = window.setTimeout(applyRoot, 120);
		};

		window.addEventListener('resize', onResize);
		window.addEventListener('orientationchange', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
			window.removeEventListener('orientationchange', onResize);
			if (timeout) window.clearTimeout(timeout);
		};
	}, []);

	console.log('## App: render');
	return <MainLayout />;
}
