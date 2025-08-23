# Использование HTML инклюдов в Vite

## Установка плагина

Для включения HTML-фрагментов в Vite можно использовать плагин `vite-plugin-html`. Это позволяет переиспользовать HTML-фрагменты в разных файлах.

### Шаги установки

1. Установите плагин:

```bash
pnpm add vite-plugin-html -D
```

2. Настройте Vite в `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
	plugins: [
		createHtmlPlugin({
			minify: true, // Опционально: минимизация HTML
			inject: {
				// Настройка инклюдов
				injectData: {
					header: '/partials/header.html',
					footer: '/partials/footer.html',
				},
			},
		}),
	],
});
```

## Пример использования

1. Создайте папку `partials` в проекте и добавьте туда HTML-фрагменты, например:

**partials/header.html**

```html
<header class="header">
	<h1>Заголовок сайта</h1>
</header>
```

**partials/footer.html**

```html
<footer class="footer">
	<p>&copy; 2025 Все права защищены</p>
</footer>
```

2. В основном HTML-файле используйте переменные для инклюдов:

**index.html**

```html
<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Главная страница</title>
	</head>
	<body>
		{{header}}

		<main>
			<h2>Добро пожаловать!</h2>
			<p>Контент главной страницы...</p>
		</main>

		{{footer}}
	</body>
</html>
```

## Как это работает

- Плагин `vite-plugin-html` заменяет переменные `{{header}}` и `{{footer}}` содержимым из файлов `partials/header.html` и `partials/footer.html`.
- Это позволяет легко переиспользовать HTML-фрагменты в разных страницах.
