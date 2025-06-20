import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				catalog: 'catalog.html',
				blog: 'blog.html',
				about: 'about.html',
			},
		},
	},
	// Массив плагинов для расширения функциональности Vite
	plugins: [
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
	],
});
