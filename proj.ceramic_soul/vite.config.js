import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	// Конфигурация сборки проекта
	build: {
		// Опции для Rollup (сборщик, который использует Vite под капотом)
		rollupOptions: {
			// Определяем входные точки для многостраничного приложения
			input: {
				// Главная страница - используем resolve для получения абсолютного пути
				main: resolve(__dirname, 'index.html'),
				// Страница 'catalog.html' - относительный путь от корня проекта
				catalog: 'catalog.html',
				blog: 'blog.html',
				about: 'about.html',
			},
		},
	},
	// Массив плагинов для расширения функциональности Vite
	plugins: [
		/**/
		{
			// Создаем кастомный плагин для горячей перезагрузки HTML файлов
			name: 'html-hot-reload', // Имя плагина для идентификации в логах и отладке

			// Хук handleHotUpdate вызывается при изменении любого файла в проекте
			handleHotUpdate({ file, server }) {
				// Проверяем, заканчивается ли путь к файлу на '.html'
				if (file.endsWith('.html')) {
					// Отправляем команду полной перезагрузки страницы через WebSocket
					// это необходимо, так как Vite по умолчанию не отслеживает изменения HTML
					server.ws.send({
						type: 'full-reload', // Тип сообщения - полная перезагрузка браузера
					});

					// Возвращаем пустой массив, чтобы предотвратить дальнейшую обработку
					// этого файла другими плагинами (избегаем дублирования перезагрузки)
					return [];
				}
				// Если файл не HTML, позволяем другим плагинам обработать его
			},
		},
		/**/
		// Плагин для оптимизации изображений
		viteImagemin({
			gifsicle: { optimizationLevel: 7, interlaced: false },
			optipng: { optimizationLevel: 7 },
			mozjpeg: { quality: 70 },
			pngquant: { quality: [0.8, 0.9], speed: 4 },
			svgo: {
				plugins: [
					{ name: 'removeViewBox' },
					{ name: 'removeEmptyAttrs', active: false },
				],
			},
			verbose: true,
		}),
		/**/
	],
});
