# Tailwind

## Что такое Tailwind CSS?

Tailwind CSS — это утилитарно-ориентированный CSS-фреймворк, который позволяет быстро создавать пользовательские интерфейсы, используя готовые классы. Вместо написания пользовательских стилей, вы применяете классы прямо в HTML.

## Основные особенности

- **Утилитарные классы**: Tailwind предоставляет множество классов для управления стилями, такими как отступы, размеры, цвета, шрифты и многое другое.
- **Высокая кастомизация**: Вы можете настроить фреймворк под свои нужды, изменяя конфигурационный файл `tailwind.config.js`.
- **Маленький размер в продакшене**: Tailwind удаляет неиспользуемые стили с помощью инструмента PurgeCSS, что делает итоговый CSS-файл минимальным.
- **Модульность**: Позволяет создавать компоненты без необходимости писать дополнительный CSS.

## Установка

1. Установите Tailwind через npm:
   ```bash
   npm install -D tailwindcss
   ```
2. Инициализируйте конфигурационный файл:
   ```bash
   npx tailwindcss init
   ```
3. Настройте файл конфигурации, если требуется.

## Использование

Добавьте Tailwind в ваш CSS-файл:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Запустите процесс сборки:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

## Примеры

HTML с использованием Tailwind:

```html
<div class="bg-blue-500 text-white p-4 rounded-lg">Привет, Tailwind!</div>
```

### Пример кнопки

```html
<button
	class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
>
	Нажми меня
</button>
```

### Пример карточки

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
	<img
		class="w-full"
		src="https://via.placeholder.com/150"
		alt="Пример изображения"
	/>
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2">Заголовок карточки</div>
		<p class="text-gray-700 text-base">
			Это пример карточки с использованием классов Tailwind CSS.
		</p>
	</div>
</div>
```

### Пример сетки

```html
<div class="grid grid-cols-3 gap-4">
	<div class="bg-red-500 p-4 text-white">Элемент 1</div>
	<div class="bg-blue-500 p-4 text-white">Элемент 2</div>
	<div class="bg-green-500 p-4 text-white">Элемент 3</div>
</div>
```

### Пример формы

```html
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
			Имя пользователя
		</label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="username"
			type="text"
			placeholder="Введите имя"
		/>
	</div>
	<div class="mb-6">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="password">
			Пароль
		</label>
		<input
			class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
			id="password"
			type="password"
			placeholder="Введите пароль"
		/>
		<p class="text-red-500 text-xs italic">Пожалуйста, введите пароль.</p>
	</div>
	<div class="flex items-center justify-between">
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			type="button"
		>
			Войти
		</button>
	</div>
</form>
```

## Полезные ссылки

- [Tailwind](https://tailwindcss.com/)
- [Документация](https://tailwindcss.com/docs)
- [Playground](https://play.tailwindcss.com/)
- [GitHub репозиторий](https://github.com/tailwindlabs/tailwindcss)
