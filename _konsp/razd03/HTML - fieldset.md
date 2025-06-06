## Элемент fieldset

`<fieldset>` — это HTML-элемент, который используется для группировки связанных элементов формы и создания логических блоков внутри формы. Обычно применяется для объединения полей, относящихся к одной категории, например, контактной информации или настроек пользователя.

Внутри `<fieldset>` часто размещают элемент `<legend>`, который задаёт заголовок группы полей.

**Пример использования:**

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

**Преимущества использования fieldset:**

- Улучшает структуру и читаемость формы.
- Повышает доступность для пользователей с особыми потребностями.
- Позволяет стилизовать отдельные группы полей с помощью CSS.

## Ресурсы

- [Элемент fieldset](https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/fieldset)
