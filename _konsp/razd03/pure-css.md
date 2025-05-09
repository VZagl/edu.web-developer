# pure-css

## Что такое Pure CSS?

**Pure CSS** — это небольшой, отзывчивый и модульный CSS-фреймворк, который помогает быстро создавать стилизованные веб-интерфейсы. Он разработан с акцентом на минимализм и производительность.

## Основные особенности Pure CSS

- **Легковесность**: Фреймворк занимает всего несколько килобайт.
- **Модульность**: Вы можете подключать только те модули, которые вам нужны.
- **Отзывчивость**: Встроенная поддержка адаптивного дизайна.
- **Совместимость**: Работает во всех современных браузерах.

## Установка

### Через CDN

Вы можете подключить Pure CSS через CDN:

```html
<link
	rel="stylesheet"
	href="https://unpkg.com/purecss@2.0.6/build/pure-min.css"
/>
```

### Локальная установка

Скачайте файлы с [официального сайта](https://pure-css.github.io/) и подключите их в вашем проекте:

```html
<link rel="stylesheet" href="path/to/pure-min.css" />
```

## Примеры использования

### Кнопки

```html
<button class="pure-button">Обычная кнопка</button>
<button class="pure-button pure-button-primary">Основная кнопка</button>
```

### Формы

```html
<form class="pure-form">
	<input type="text" placeholder="Введите текст" />
	<button class="pure-button pure-button-primary" type="submit">
		Отправить
	</button>
</form>
```

### Таблицы

```html
<table class="pure-table">
	<thead>
		<tr>
			<th>Имя</th>
			<th>Возраст</th>
			<th>Город</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Иван</td>
			<td>25</td>
			<td>Москва</td>
		</tr>
		<tr class="pure-table-odd">
			<td>Анна</td>
			<td>30</td>
			<td>Санкт-Петербург</td>
		</tr>
	</tbody>
</table>
```

### Сетки

```html
<div class="pure-g">
	<div class="pure-u-1 pure-u-md-1-3">Колонка 1</div>
	<div class="pure-u-1 pure-u-md-1-3">Колонка 2</div>
	<div class="pure-u-1 pure-u-md-1-3">Колонка 3</div>
</div>
```

## Полезные ссылки

- [Документация Pure CSS](https://pure-css.github.io/)
- [Примеры использования](https://pure-css.github.io/layouts/)
