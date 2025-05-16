# HTML тег `<legend>`

Тег `<legend>` используется для добавления заголовка к элементу `<fieldset>`, который группирует связанные элементы формы. Это улучшает доступность и структуру формы.

## Синтаксис

```html
<fieldset>
	<legend>Заголовок группы</legend>
	<!-- элементы формы -->
</fieldset>
```

## Пример использования

```html
<form>
	<fieldset>
		<legend>Контактная информация</legend>
		<label for="name">Имя:</label>
		<input id="name" type="text" name="name" />
		<label for="email">Email:</label>
		<input id="email" type="email" name="email" />
	</fieldset>
</form>
```

## Особенности

- `<legend>` должен быть первым дочерним элементом `<fieldset>`.
- Текст внутри `<legend>` обычно отображается жирным шрифтом и может быть стилизован с помощью CSS.
- Улучшает доступность для пользователей с экранными читалками.

## Стилизация

```css
legend {
	padding: 4px 8px;
	color: #2a7ae2;
	font-size: 1.2em;
}
```

## Советы

- Используйте `<legend>` для описания назначения группы полей.
- Не используйте для обычных заголовков вне `<fieldset>`.

## Ссылки

- [MDN: legend](https://developer.mozilla.org/ru/docs/Web/HTML/Element/legend)
- [HTML Living Standard: legend](https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element)
